
import React, { useState, useEffect, useRef } from 'react';
import { DayPicker, type DateRange } from 'react-day-picker';
import { format, subDays, startOfDay, endOfDay } from 'date-fns';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CustomDateRangePickerProps {
    onRangeSelect: (range: { startDate: string | null; endDate: string | null; label: string }) => void;
    initialRange?: { startDate: string | null; endDate: string | null; label: string };
}

const CustomDateRangePicker: React.FC<CustomDateRangePickerProps> = ({ onRangeSelect, initialRange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [range, setRange] = useState<DateRange | undefined>(
        initialRange?.startDate && initialRange?.endDate
            ? { from: new Date(initialRange.startDate), to: new Date(initialRange.endDate) }
            : undefined
    );
    const [tempRange, setTempRange] = useState<DateRange | undefined>(range);
    const [activeShortcut, setActiveShortcut] = useState<string | null>(initialRange?.label || 'Last 30 days');
    const containerRef = useRef<HTMLDivElement>(null);

    const [leftMonth, setLeftMonth] = useState<Date>(
        tempRange?.from || subDays(new Date(), 30)
    );
    const [rightMonth, setRightMonth] = useState<Date>(
        tempRange?.to || new Date()
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleShortcutClick = (label: string, days?: number) => {
        setActiveShortcut(label);
        if (days) {
            const to = new Date();
            const from = subDays(to, days);
            const newRange = { from, to };
            setTempRange(newRange);
            setLeftMonth(from);
            setRightMonth(to);
        }
    };

    const handleDone = () => {
        setRange(tempRange);
        setIsOpen(false);
        if (tempRange?.from && tempRange?.to) {
            onRangeSelect({
                startDate: tempRange.from.toISOString(),
                endDate: tempRange.to.toISOString(),
                label: activeShortcut || 'Custom Range'
            });
        }
    };

    const handleClear = () => {
        setTempRange(undefined);
        setActiveShortcut(null);
    };

    const shortcuts = [
        { label: 'Last 7 days', days: 7 },
        { label: 'Last 14 days', days: 14 },
        { label: 'Custom Range', days: null }
    ];

    const commonClassNames = {
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center mb-4",
        caption_label: "text-sm font-semibold text-gray-900 capitalize",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 transition-opacity"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-gray-500 rounded-md w-9 font-normal text-[0.8rem] uppercase",
        row: "flex w-full mt-2",
        cell: cn(
            "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-purple-50",
            tempRange?.from && tempRange?.to && "[&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-range-start)]:rounded-l-md"
        ),
        day: cn(
            "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-gray-100 rounded-md transition-colors"
        ),
        day_range_start: "day-range-start bg-[#3b368c] text-white hover:bg-[#3b368c] hover:text-white focus:bg-[#3b368c] focus:text-white rounded-l-md",
        day_range_end: "day-range-end bg-[#3b368c] text-white hover:bg-[#3b368c] hover:text-white focus:bg-[#3b368c] focus:text-white rounded-r-md",
        day_selected: "bg-[#3b368c] text-white hover:bg-[#3b368c] hover:text-white focus:bg-[#3b368c] focus:text-white",
        day_today: "bg-gray-100 text-[#3b368c] font-bold rounded-md",
        day_outside: "text-gray-300 opacity-50",
        day_disabled: "text-gray-300 opacity-50",
        day_range_middle: "aria-selected:bg-purple-50 aria-selected:text-[#3b368c]",
        day_hidden: "invisible",
    };

    return (
        <div className="relative" ref={containerRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
            >
                <CalendarIcon size={16} className="text-gray-500" />
                <span>{range?.from && range?.to
                    ? `${format(range.from, 'MMM d, yyyy')} - ${format(range.to, 'MMM d, yyyy')}`
                    : activeShortcut || 'Select Date Range'}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 flex overflow-hidden min-w-[750px]">
                    {/* Calendar Pane */}
                    <div className="p-4 flex flex-col border-r border-gray-100">
                        <div className="flex gap-6">
                            {/* Left Calendar (From) */}
                            <DayPicker
                                mode="range"
                                selected={tempRange}
                                onSelect={setTempRange}
                                month={leftMonth}
                                onMonthChange={setLeftMonth}
                                className="p-0 border-none"
                                classNames={commonClassNames}
                                components={{
                                    Chevron: (props) => {
                                        if (props.orientation === 'left') {
                                            return <ChevronLeft className="h-4 w-4" />;
                                        }
                                        return <ChevronRight className="h-4 w-4" />;
                                    }
                                }}
                            />
                            {/* Right Calendar (To) */}
                            <DayPicker
                                mode="range"
                                selected={tempRange}
                                onSelect={setTempRange}
                                month={rightMonth}
                                onMonthChange={setRightMonth}
                                className="p-0 border-none"
                                classNames={commonClassNames}
                                components={{
                                    Chevron: (props) => {
                                        if (props.orientation === 'left') {
                                            return <ChevronLeft className="h-4 w-4" />;
                                        }
                                        return <ChevronRight className="h-4 w-4" />;
                                    }
                                }}
                            />
                        </div>

                        <div className="mt-4 flex justify-end gap-3 pt-4 border-t border-gray-100">
                            <button
                                onClick={handleClear}
                                className="text-sm font-medium text-[#3b368c] hover:underline"
                            >
                                Clear
                            </button>
                            <button
                                onClick={handleDone}
                                className="px-6 py-2 bg-[#3b368c] text-white text-sm font-semibold rounded-lg hover:bg-[#2d296b] transition-colors shadow-md"
                            >
                                Done
                            </button>
                        </div>
                    </div>

                    {/* Sidebar Area */}
                    <div className="w-[200px] bg-gray-50/50 flex flex-col p-4 border-l border-gray-100">
                        <div className="space-y-1">
                            {shortcuts.map((shortcut) => (
                                <button
                                    key={shortcut.label}
                                    onClick={() => handleShortcutClick(shortcut.label, shortcut.days || undefined)}
                                    className={cn(
                                        "w-full text-left px-4 py-3 text-[15px] font-medium transition-colors rounded-lg",
                                        activeShortcut === shortcut.label
                                            ? "text-[#3b368c] bg-white shadow-sm border border-purple-100"
                                            : "text-gray-600 hover:text-[#3b368c] hover:bg-purple-50/50"
                                    )}
                                >
                                    {shortcut.label}
                                    {activeShortcut === shortcut.label && (
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#3b368c] rounded-r-full" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomDateRangePicker;
