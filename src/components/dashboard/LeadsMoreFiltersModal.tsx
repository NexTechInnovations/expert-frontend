// import { useState } from 'react';
import { X, Search } from 'lucide-react';
import CustomSelect from '../ui/CustomSelect';

interface LeadsMoreFiltersModalProps {
  onClose: () => void;
}

const LeadsMoreFiltersModal = ({ onClose }: LeadsMoreFiltersModalProps) => {
    // const [filters, setFilters] = useState({ /* ... */ });
    const Label = ({ children }: { children: React.ReactNode }) => (<label className="text-xs font-bold text-gray-900 block mb-1.5">{children}</label>);
    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl flex flex-col" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center p-6 border-b text-black"><h2 className="text-lg font-bold">More Filters</h2><button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100"><X size={20} /></button></div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 overflow-y-auto">
                    <div><Label>Leads received</Label><CustomSelect options={[]} placeholder="Lead received date" value={''} onChange={() => {}} /></div>
                    <div><Label>Lead Status</Label><CustomSelect options={[]} placeholder="Lead Status" value={''} onChange={() => {}} /></div>
                    <div><Label>Assigned to</Label><div className="relative"><Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" /><input type="text" placeholder="Assigned to" className="w-full p-2.5 border rounded-lg text-sm pl-9" /></div></div>
                    <div><Label>Source</Label><CustomSelect options={[]} placeholder="Source" value={''} onChange={() => {}} /></div>
                    <div><Label>Property category</Label><CustomSelect options={[]} placeholder="Property category" value={''} onChange={() => {}} /></div>
                    <div><Label>Offering type</Label><CustomSelect options={[]} placeholder="Offering type" value={''} onChange={() => {}} /></div>
                </div>
                <div className="flex justify-end items-center p-6 border-t bg-gray-50/70 rounded-b-2xl"><button className="text-sm font-semibold text-gray-700 py-2.5 px-5 rounded-lg hover:bg-gray-200/70">Reset</button><button className="text-sm font-semibold text-white bg-red-600 py-2.5 px-5 rounded-lg hover:bg-red-700 ml-3 opacity-50 cursor-not-allowed">Show 0 results</button></div>
            </div>
        </div>
    );
};

export default LeadsMoreFiltersModal;