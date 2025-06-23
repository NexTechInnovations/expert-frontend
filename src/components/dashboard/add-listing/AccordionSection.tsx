import { ChevronUp, ChevronDown, Lock, CheckCircle2 } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface AccordionSectionProps {
  title: string;
  isOpen: boolean;
  isCompleted: boolean;
  isLocked: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const AccordionSection = ({ title, isOpen, isCompleted, isLocked, onToggle, children }: AccordionSectionProps) => {
  return (
    <div className={cn("bg-white border rounded-lg", isLocked ? "bg-gray-50" : "border-gray-200/80")}>
      <button onClick={onToggle} disabled={isLocked} className="w-full flex justify-between items-center p-4 disabled:cursor-not-allowed">
        <div className="flex items-center gap-3">
            {isCompleted ? (
                <CheckCircle2 className="text-green-500" />
            ) : isLocked ? (
                <Lock className="text-gray-400" />
            ) : (
                <div className="w-6 h-6 rounded-full border-2 border-violet-600 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-violet-600 rounded-full"></div>
                </div>
            )}
            <h2 className={cn("text-lg font-bold", isLocked ? "text-gray-400" : "text-gray-800")}>{title}</h2>
        </div>
        {!isLocked && (isOpen ? <ChevronUp /> : <ChevronDown />)}
      </button>
      {isOpen && !isLocked && (
        <div className="p-4 border-t border-gray-200/80">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionSection;