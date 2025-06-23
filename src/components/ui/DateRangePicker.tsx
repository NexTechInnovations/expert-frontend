import { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker'; // THE FIX: Only import DayPicker, not DateRange
import { format, subDays } from 'date-fns';
import 'react-day-picker/dist/style.css';
import { cn } from '../../lib/utils';

// THE FIX: Define the DateRange type locally. This is a TypeScript type.
type DateRange = {
  from: Date | undefined;
  to?: Date | undefined;
};

const presetRanges = [
  { label: 'Today', range: { from: new Date(), to: new Date() } },
  { label: 'Yesterday', range: { from: subDays(new Date(), 1), to: subDays(new Date(), 1) } },
  { label: 'Last 7 days', range: { from: subDays(new Date(), 6), to: new Date() } },
  { label: 'Last 30 days', range: { from: subDays(new Date(), 29), to: new Date() } },
  { label: 'Last 90 Days', range: { from: subDays(new Date(), 89), to: new Date() } },
];

const DateRangePicker = () => {
    const defaultRange = { from: new Date(2025, 4, 16), to: new Date(2025, 5, 16) };
    const [isOpen, setIsOpen] = useState(false);
    const [range, setRange] = useState<DateRange | undefined>(defaultRange);
    const [activePreset, setActivePreset] = useState<string | null>("Custom Range");
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [ref]);

    const handlePresetClick = (preset: typeof presetRanges[0]) => {
        setRange(preset.range);
        setActivePreset(preset.label);
    };
    
    const displayValue = range?.from
        ? range.to
            ? `${format(range.from, 'dd MMM yyyy')} - ${format(range.to, 'dd MMM yyyy')}`
            : format(range.from, 'dd MMM yyyy')
        : 'Select date range';

  return (
    <div className="relative w-full lg:w-64" ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)} className={cn("w-full flex items-center justify-between p-2.5 bg-white border rounded-lg text-sm", isOpen ? "border-violet-500 ring-1 ring-violet-500" : "border-gray-300")}>
        <span>{displayValue}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-20 flex">
            <div className="p-4">
                 <DayPicker
                    mode="range"
                    numberOfMonths={2}
                    selected={range}
                    onSelect={setRange}
                    defaultMonth={range?.from}
                    components={{
                        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
                        IconRight: () => <ChevronRight className="h-4 w-4" />,
                    }}
                    classNames={{
                        root: 'bg-white',
                        months: 'flex flex-col sm:flex-row gap-8',
                        month: 'space-y-4',
                        caption: 'flex justify-center items-center relative mb-4',
                        caption_label: 'font-bold text-sm text-gray-800',
                        nav: 'space-x-1 flex items-center',
                        nav_button: 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                        table: 'w-full border-collapse space-y-1',
                        head_row: 'flex',
                        head_cell: 'text-gray-400 rounded-md w-9 font-normal text-[0.8rem]',
                        row: 'flex w-full mt-2',
                        cell: 'h-9 w-9 text-center text-sm p-0 relative',
                        day: 'h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-full hover:bg-violet-100',
                        day_selected: 'bg-violet-700 text-white rounded-full hover:bg-violet-700 focus:bg-violet-700',
                        day_outside: 'text-gray-300 opacity-50 aria-selected:bg-violet-100/50 aria-selected:text-white',
                        day_range_middle: '!bg-violet-100 !text-violet-800 !rounded-none',
                        day_hidden: 'invisible',
                    }}
                 />
                 <div className="flex justify-end gap-4 mt-4 px-4">
                     <button onClick={() => { setRange(undefined); setActivePreset(null); }} className="text-sm font-semibold text-violet-600">Clear</button>
                     <button onClick={() => setIsOpen(false)} className="text-sm font-semibold text-white bg-violet-800 py-2 px-6 rounded-lg">Done</button>
                 </div>
            </div>
            <div className="border-l border-gray-200">
                <ul className="py-2 w-36">
                    {presetRanges.map(preset => (
                        <li key={preset.label}>
                            <button 
                                onClick={() => handlePresetClick(preset)}
                                className={cn("w-full text-left px-4 py-2 text-sm text-black", activePreset === preset.label ? "bg-violet-100 text-violet-700 font-semibold" : "text-gray-700 hover:bg-gray-100")}
                            >
                                {preset.label}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button onClick={() => setActivePreset('Custom Range')} className={cn("w-full text-left px-4 py-2 text-sm font-semibold text-black", activePreset === 'Custom Range' && "text-violet-700 bg-violet-100 border-l-4 border-violet-600 ml-[-2px] pl-3")}>Custom Range</button>
                    </li>
                </ul>
            </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;