import { cn } from '../../lib/utils';

interface ToggleButtonProps {
  isOn: boolean;
  handleToggle: () => void;
}

const ToggleButton = ({ isOn, handleToggle }: ToggleButtonProps) => {
  return (
    <button
      type="button"
      onClick={handleToggle}
      className={cn(
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2',
        isOn ? 'bg-violet-600' : 'bg-gray-200'
      )}
      role="switch"
      aria-checked={isOn}
    >
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
          isOn ? 'translate-x-5' : 'translate-x-0'
        )}
      />
    </button>
  );
};

export default ToggleButton;