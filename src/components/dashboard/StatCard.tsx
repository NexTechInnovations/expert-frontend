import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface StatCardProps {
  value: string | number;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const StatCard = ({ value, label, isActive, onClick }: StatCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-white p-4 rounded-lg border text-left w-full transition-all duration-200",
        isActive ? "border-violet-600 shadow-md ring-2 ring-violet-200" : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
      )}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
          <p className="text-sm text-gray-500">{label}</p>
        </div>
        <ChevronRight size={20} className="text-gray-400 flex-shrink-0" />
      </div>
    </button>
  );
};

export default StatCard;