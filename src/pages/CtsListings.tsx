import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import CtsEmptyState from '../components/dashboard/CtsEmptyState';
import CtsMoreFiltersModal from '../components/dashboard/CtsMoreFiltersModal';

const CtsListings = () => {
    const [isFiltersModalOpen, setFiltersModalOpen] = useState(false);
    
    return (
        <>
            {isFiltersModalOpen && <CtsMoreFiltersModal onClose={() => setFiltersModalOpen(false)} />}
            <div className="flex flex-col h-full bg-gray-50">
                <div className="p-4 sm:p-6 md:p-8 space-y-4 flex-shrink-0 z-10">
                    <h1 className="text-2xl font-bold text-gray-800">Community Top Spot Listings</h1>
                    <p className="text-sm text-gray-600">You can prioritize or deprioritize any of your listings exclusively for the Community Top Spot (CTS).</p>
                    <div className="pt-2">
                        <button onClick={() => setFiltersModalOpen(true)} className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg p-2.5 px-3">
                            <SlidersHorizontal size={16} />
                            <span>All Filters</span>
                        </button>
                    </div>
                </div>
                <div className="px-4 sm:px-6 md:px-8 flex-grow overflow-y-auto flex items-center justify-center">
                    <CtsEmptyState />
                </div>
            </div>
        </>
    );
};

export default CtsListings;