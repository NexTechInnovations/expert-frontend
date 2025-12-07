import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';
interface CheckboxProps { label: string; checked: boolean; onChange: () => void; }
const Checkbox = ({ label, checked, onChange }: CheckboxProps) => (
  <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
    <span className="text-sm text-gray-700">{label}</span>
    <button onClick={(e) => { e.preventDefault(); onChange(); }} className={cn('w-5 h-5 rounded-md border-2 flex items-center justify-center', checked ? 'bg-violet-600 border-violet-600' : 'border-gray-300')}>
      {checked && <Check size={16} className="text-white" />}
    </button>
  </label>
);
export default Checkbox;