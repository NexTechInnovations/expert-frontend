import { useState } from 'react';
import { X } from 'lucide-react';
import CustomSelect from '../ui/CustomSelect';

interface CtsMoreFiltersModalProps {
  onClose: () => void;
}

const CtsMoreFiltersModal = ({ onClose }: CtsMoreFiltersModalProps) => {
    const [filters, setFilters] = useState({
        propertyCategory: '',
        offeringType: 'all',
        agent: '',
        ctsCommunity: '',
        prioritizationStatus: ''
    });

    const handleFilterChange = (key: keyof typeof filters, value: string) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const Label = ({ children }: { children: React.ReactNode }) => (
        <label className="text-xs font-bold text-gray-900 block mb-1.5">{children}</label>
    );

    const baseInputStyles = "w-full p-2.5 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 outline-none transition-shadow";

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl flex flex-col" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center p-6 border-b text-black"><h2 className="text-lg font-bold">More Filters</h2><button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100"><X size={20} /></button></div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div><Label>Reference</Label><input type="text" placeholder="Reference Number" className={baseInputStyles} /></div>
                    <div></div> {/* Empty cell for alignment */}
                    <div><Label>Property category</Label><CustomSelect options={[]} placeholder="Select property category" value={filters.propertyCategory} onChange={v => handleFilterChange('propertyCategory', v)} /></div>
                    <div><Label>Offering type</Label><CustomSelect options={[{value: 'all', label: 'All types'}]} placeholder="All types" value={filters.offeringType} onChange={v => handleFilterChange('offeringType', v)} /></div>
                    <div><Label>Agent</Label><CustomSelect options={[]} placeholder="Select agent" value={filters.agent} onChange={v => handleFilterChange('agent', v)} /></div>
                    <div></div> {/* Empty cell for alignment */}
                    <div><Label>CTS communities</Label><CustomSelect options={[]} placeholder="Select a community" value={filters.ctsCommunity} onChange={v => handleFilterChange('ctsCommunity', v)} /></div>
                    <div><Label>Prioritization status</Label><CustomSelect options={[]} placeholder="Select Prioritisation Status" value={filters.prioritizationStatus} onChange={v => handleFilterChange('prioritizationStatus', v)} /></div>
                </div>
                <div className="flex justify-end items-center p-6 border-t bg-gray-50/70 rounded-b-2xl"><button className="text-sm font-semibold text-gray-700 py-2.5 px-5 rounded-lg hover:bg-gray-200/70">Reset</button><button className="text-sm font-semibold text-white bg-red-600 py-2.5 px-5 rounded-lg hover:bg-red-700 ml-3">Show results</button></div>
            </div>
        </div>
    );
};

export default CtsMoreFiltersModal;