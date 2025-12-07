import { X, Search, Star, Zap } from 'lucide-react';
import CustomSelect from '../../ui/CustomSelect';

interface CreditCalculatorModalProps {
  onClose: () => void;
}

const CreditCalculatorModal = ({ onClose }: CreditCalculatorModalProps) => {
    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl flex flex-col" onClick={e => e.stopPropagation()}>
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <h2 className="text-lg font-bold text-gray-900">Credit calculator</h2>
                    <button onClick={onClose} className="p-2 rounded-full text-gray-500 hover:bg-gray-100"><X size={20} /></button>
                </div>
                
                {/* Body */}
                <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh] scrollbar-thin">
                    <p className="text-sm text-gray-600">Fill out your property details and calculate how many PF Flex credits you will need to list or upgrade it.</p>
                    
                    <div className="relative w-full">
                        <input type="text" placeholder="City, community or building" className="w-full bg-white pl-4 pr-10 py-2.5 border rounded-lg text-sm" />
                        <button className="absolute inset-y-0 right-0 flex items-center justify-center w-12 border-l bg-gray-50 rounded-r-lg hover:bg-gray-100">
                            <Search size={18} className="text-gray-500" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div><label className="text-xs font-semibold text-gray-800 block mb-1.5">Property category</label><CustomSelect options={[]} placeholder="Select category" value="" onChange={()=>{}} /></div>
                        <div><label className="text-xs font-semibold text-gray-800 block mb-1.5">Offering type</label><CustomSelect options={[]} placeholder="Select offering type" value="" onChange={()=>{}} /></div>
                        <div><label className="text-xs font-semibold text-gray-800 block mb-1.5">Project status</label><CustomSelect options={[]} placeholder="Select project status" value="" onChange={()=>{}} /></div>
                        <div><label className="text-xs font-semibold text-gray-800 block mb-1.5">Property type</label><CustomSelect options={[]} placeholder="Select property type" value="" onChange={()=>{}} /></div>
                        <div><label className="text-xs font-semibold text-gray-800 block mb-1.5">Bedrooms</label><CustomSelect options={[]} placeholder="Select" value="" onChange={()=>{}} /></div>
                        <div><label className="text-xs font-semibold text-gray-800 block mb-1.5">Bathrooms</label><CustomSelect options={[]} placeholder="Select" value="" onChange={()=>{}} /></div>
                        <div><label className="text-xs font-semibold text-gray-800 block mb-1.5">Price</label><input type="text" defaultValue="0" className="w-full p-2.5 border rounded-lg" /></div>
                        <div><label className="text-xs font-semibold text-gray-800 block mb-1.5">Price type</label><CustomSelect options={[]} placeholder="Select" value="" onChange={()=>{}} /></div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-sm text-gray-800 mb-3">Listing cost (credits)</h4>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <p className="font-medium text-gray-600 text-sm">Standard</p>
                                <p className="text-gray-500 text-xs mt-1">1 month --</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-600 text-sm flex items-center justify-center gap-1"><Star size={14} className="text-yellow-500"/>Featured</p>
                                <p className="text-gray-500 text-xs mt-1">15 days --</p>
                                <p className="text-gray-500 text-xs mt-1">1 month --</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-600 text-sm flex items-center justify-center gap-1"><Zap size={14} className="text-violet-500"/>Premium</p>
                                <p className="text-gray-500 text-xs mt-1">15 days --</p>
                                <p className="text-gray-500 text-xs mt-1">1 month --</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end items-center p-6 border-t border-gray-200 bg-gray-50/70 rounded-b-2xl">
                    <button className="text-sm font-semibold text-gray-700 py-2.5 px-5 rounded-lg hover:bg-gray-200/70">Reset</button>
                    <button className="text-sm font-semibold text-white bg-gray-300 py-2.5 px-5 rounded-lg cursor-not-allowed ml-3">Calculate</button>
                </div>
            </div>
        </div>
    );
};

export default CreditCalculatorModal;