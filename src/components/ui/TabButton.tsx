import { cn } from "../../lib/utils";

interface TabButtonProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

const TabButton = ({ label, isActive, onClick }: TabButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "py-2 px-4 text-sm font-semibold transition-colors duration-200 border-b-2",
                isActive
                    ? "border-red-500 text-red-600"
                    : "border-transparent text-gray-500 hover:text-gray-800"
            )}
        >
            {label}
        </button>
    );
};

export default TabButton;