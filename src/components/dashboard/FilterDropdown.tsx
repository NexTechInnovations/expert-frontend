import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import type { FilterOption } from '../../types';

interface FilterDropdownProps {
  label: string;
  options: FilterOption[];
  isOpen: boolean;
  onClick: () => void;
}

const FilterDropdown = ({ label, options, isOpen, onClick }: FilterDropdownProps) => {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:border-gray-400 transition-colors"
      >
        <span>{label}</span>
        <ChevronDown size={16} className={cn("text-gray-500 transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-60 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
          <ul className="p-2 max-h-60 overflow-y-auto">
            {options.map((option) => (
              <li key={option.value}>
                <a
                  href="#"
                  className="block px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                >
                  {option.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;