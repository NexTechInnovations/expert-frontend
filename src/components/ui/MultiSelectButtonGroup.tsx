import { cn } from "../../lib/utils";
interface MultiSelectButtonGroupProps {
  options: string[];
  selected: string | string[];
  onToggle: (option: string) => void;
  isMultiSelect?: boolean;
}
const MultiSelectButtonGroup = ({ options, selected, onToggle, isMultiSelect = false }: MultiSelectButtonGroupProps) => (
  <div className="flex flex-wrap gap-2">
    {options.map((option) => {
        const isSelected = isMultiSelect ? (selected as string[]).includes(option) : selected === option;
        return (
            <button
                key={option}
                onClick={() => onToggle(option)}
                className={cn(
                "px-4 py-2 border rounded-lg text-sm font-medium transition-colors",
                isSelected
                    ? 'bg-violet-50 border-violet-600 text-violet-700'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                )}
            >
                {option}
            </button>
        )
    })}
  </div>
);
export default MultiSelectButtonGroup;