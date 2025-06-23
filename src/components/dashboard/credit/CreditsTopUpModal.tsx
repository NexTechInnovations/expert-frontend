import { X, Info } from 'lucide-react';
import { useState } from 'react';

interface CreditsTopUpModalProps {
  onClose: () => void;
}

const CreditsTopUpModal = ({ onClose }: CreditsTopUpModalProps) => {
    const [quantity, setQuantity] = useState('');
    const hasQuantity = quantity.trim() !== '';

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md flex flex-col" onClick={e => e.stopPropagation()}>
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <h2 className="text-lg font-bold text-gray-900">Credits Top Up</h2>
                    <button onClick={onClose} className="p-2 rounded-full text-gray-500 hover:bg-gray-100"><X size={20} /></button>
                </div>
                
                {/* Body */}
                <div className="p-6 space-y-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-4">Enter the amount of credits you need to calculate the price:</p>
                        <label className="text-xs font-semibold text-gray-800 block mb-1.5">Quantity</label>
                        <input 
                            type="number" 
                            placeholder="Enter credits" 
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="w-full p-2.5 border border-gray-300 rounded-lg text-sm" 
                        />
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        <h4 className="font-semibold text-sm text-gray-800">Listing cost (credits)</h4>
                        <div className="flex justify-between text-sm text-gray-500">
                            <span>Price per credit</span>
                            <span>-</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-500">
                            <span>VAT (5%)</span>
                            <span>-</span>
                        </div>
                        <div className="flex justify-between text-sm font-bold text-gray-800 pt-2 border-t mt-2">
                            <span>Total price</span>
                            <span>-</span>
                        </div>
                    </div>
                    
                    <div className="bg-blue-50 text-blue-800 p-3 rounded-lg flex items-start gap-3 text-sm">
                        <Info size={20} className="flex-shrink-0 mt-0.5" />
                        <span>These credits will be valid for 13 days until 29 Jun, 2025</span>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end items-center p-6 border-t border-gray-200 bg-gray-50/70 rounded-b-2xl">
                    <button 
                        disabled={!hasQuantity} 
                        className="text-sm font-semibold text-white py-2.5 px-6 rounded-lg transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed bg-violet-600 hover:bg-violet-700"
                    >
                        Proceed to payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreditsTopUpModal;