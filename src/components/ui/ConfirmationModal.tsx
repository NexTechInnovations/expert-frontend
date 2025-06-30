
import { cn } from '../../lib/utils'; 

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    description: string;
    confirmText?: string;
    cancelText?: string;
    isLoading?: boolean;
    isDestructive?: boolean;
}

const ConfirmationModal = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    description,
    confirmText = 'Submit',
    cancelText = 'Cancel',
    isLoading = false,
    isDestructive = false
}: ConfirmationModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
            <div 
                className="bg-white rounded-2xl shadow-xl w-full max-w-md flex flex-col p-8 text-center"
                onClick={e => e.stopPropagation()}
            >
                <h2 className="text-lg font-bold text-gray-900">{title}</h2>
                <p className="mt-2 text-sm text-gray-600">
                    {description}
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <button
                        onClick={onClose}
                        disabled={isLoading}
                        className="bg-white border border-gray-300 text-gray-700 font-semibold py-2.5 px-6 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={onConfirm}
                        disabled={isLoading}
                        className={cn(
                            "text-white font-semibold py-2.5 px-6 rounded-lg transition-colors disabled:bg-gray-300",
                            isDestructive ? "bg-red-600 hover:bg-red-700" : "bg-violet-600 hover:bg-violet-700"
                        )}
                    >
                        {isLoading ? 'Submitting...' : confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;