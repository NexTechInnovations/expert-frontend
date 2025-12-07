import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import LeadsEmptyState from '../components/dashboard/LeadsEmptyState';
import LeadsMoreFiltersModal from '../components/dashboard/LeadsMoreFiltersModal';
import { cn } from '../lib/utils';
import ToggleButton from '../components/dashboard/ToggleButton';

const LeadsManagement = () => {
    const [isFiltersModalOpen, setFiltersModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('all');
    const [hideLeads, setHideLeads] = useState(false);

    return (
        <>
            {isFiltersModalOpen && <LeadsMoreFiltersModal onClose={() => setFiltersModalOpen(false)} />}
            <div className="flex flex-col h-full bg-gray-50">
                <div className="p-4 sm:p-6 md:p-8 space-y-4 flex-shrink-0 z-10">
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-800">Leads Management</h1>
                        <button className="text-sm bg-violet-600 text-white font-semibold py-1.5 px-3 rounded-md">What's changed</button>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                        <div className="relative flex-grow">
                            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input type="text" placeholder="Search by lead phone number, or email" className="w-full bg-white pl-10 pr-4 py-2.5 border rounded-lg text-sm" />
                        </div>
                        <button onClick={() => setFiltersModalOpen(true)} className="flex items-center gap-2 text-sm font-medium bg-white border rounded-lg p-2.5 px-3 text-black">
                            <SlidersHorizontal size={16} />
                            <span>All Filters</span>
                        </button>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-200">
                        <div className="flex items-center">
                            <button onClick={() => setActiveTab('all')} className={cn("py-3 px-4 text-sm font-semibold", activeTab === 'all' ? "border-b-2 border-violet-600 text-violet-700" : "text-gray-500")}>All leads</button>
                            <button onClick={() => setActiveTab('agent')} className={cn("py-3 px-4 text-sm font-semibold", activeTab === 'agent' ? "border-b-2 border-violet-600 text-violet-700" : "text-gray-500")}>Agent leads</button>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-gray-600">Hide agent leads</span>
                            <ToggleButton isOn={hideLeads} handleToggle={() => setHideLeads(!hideLeads)} />
                        </div>
                    </div>
                </div>
                <div className="px-4 sm:px-6 md:px-8 flex-grow overflow-y-auto flex items-center justify-center">
                    <LeadsEmptyState />
                </div>
            </div>
        </>
    );
};

export default LeadsManagement;