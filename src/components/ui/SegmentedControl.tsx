import React from 'react';
import { cn } from '../../lib/utils';

interface SegmentedOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface SegmentedControlProps {
  options: SegmentedOption[];
  value: string | null;
  onChange: (val: string) => void;
}

const SegmentedControl = ({ options, value, onChange }: SegmentedControlProps) => (
  <div className="flex gap-3 w-full">
    {options.map(opt => {
      const isActive = value === opt.value;
      return (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={cn(
            "flex-1 flex flex-row items-center justify-center transition-all",
            "rounded-lg border text-sm font-medium py-3 px-4",
            isActive
              ? "border-[#3A307F] bg-[#F5F3FF] text-[#3A307F]"
              : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
            // "focus:outline-none focus:ring-2 focus:ring-[#3A307F] focus:ring-offset-2"
          )}
        >
          {opt.icon && <span className="mr-2">{opt.icon}</span>}
          <span>{opt.label}</span>
        </button>
      );
    })}
  </div>
);

export default SegmentedControl;