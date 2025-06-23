import { useState } from 'react';
import { Search, SlidersHorizontal, Plus } from 'lucide-react';
import LeadsEmptyState from '../components/dashboard/LeadsEmptyState';
import LeadsMoreFiltersModal from '../components/dashboard/LeadsMoreFiltersModal';
import LeadsTable from '../components/dashboard/LeadsTable';
import { Link } from 'react-router-dom';

const LeadsRegularManagement = () => {
    const [isFiltersModalOpen, setFiltersModalOpen] = useState(false);
    const [hasLeads, setHasLeads] = useState(true);

    return (
        <>
            {isFiltersModalOpen && <LeadsMoreFiltersModal onClose={() => setFiltersModalOpen(false)} />}
            <div className="flex flex-col h-full bg-gray-50">
                <div className="p-4 sm:p-6 md:p-8 space-y-4 flex-shrink-0 z-10">
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-800">Leads Management</h1>
                            <Link to='/new-lead'>
                            <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md flex items-center gap-2 text-sm">
                            <Plus size={16} />
                            New lead
                        </button>
                            </Link>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                        <div className="relative flex-grow">
                            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input type="text" placeholder="Search by lead name, phone number, or email" className="w-full bg-white pl-10 pr-4 py-2.5 border rounded-lg text-sm" />
                        </div>
                        <button onClick={() => setFiltersModalOpen(true)} className="flex items-center gap-2 text-sm font-medium bg-white border rounded-lg p-2.5 px-3 text-black">
                            <SlidersHorizontal size={16} />
                            <span>All Filters</span>
                        </button>
                    </div>
                </div>
                <div className="px-4 sm:px-6 md:px-8 flex-grow overflow-y-auto pb-4">
                    {hasLeads ? <LeadsTable /> : <LeadsEmptyState />}
                </div>
            </div>
        </>
    );
};

export default LeadsRegularManagement;