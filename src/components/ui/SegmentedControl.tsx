import { cn } from "../../lib/utils";
interface SegmentedControlProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}
const SegmentedControl = ({ options, value, onChange, className }: SegmentedControlProps) => (
  <div className={cn("flex items-center p-0.5 bg-gray-100 rounded-lg", className)}>
    {options.map(opt => (
      <button
        key={opt.value}
        onClick={() => onChange(opt.value)}
        className={cn(
          'flex-1 py-1.5 px-4 rounded-md text-sm font-semibold transition-colors',
          value === opt.value ? 'bg-white shadow' : 'text-gray-600 hover:bg-gray-200'
        )}
      >
        {opt.label}
      </button>
    ))}
  </div>
);
export default SegmentedControl;