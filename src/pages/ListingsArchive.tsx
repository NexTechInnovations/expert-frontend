import { useState } from 'react';
import { Search, X, SlidersHorizontal, ArrowUpDown, LayoutGrid, List } from 'lucide-react';
import MoreFiltersModal from '../components/dashboard/MoreFiltersModal';
import ArchiveEmptyState from '../components/dashboard/ArchiveEmptyState';
import ArchiveTable from '../components/dashboard/ArchiveTable';

const sortOptions = ["Listing Created: Newest", "Listing Created: Oldest", "Price: Highest", "Price: Lowest"];

const ListingsArchive = () => {
    // تم تغيير الحالة الافتراضية إلى true لعرض الجدول مباشرة
    const [isDataAvailable, setDataAvailable] = useState(true); 
    const [isFiltersModalOpen, setFiltersModalOpen] = useState(false);
    const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
    const [isSortOpen, setSortOpen] = useState(false);
    const listingCount = isDataAvailable ? 1 : 0;

    return (
        <>
            {isFiltersModalOpen && <MoreFiltersModal onClose={() => setFiltersModalOpen(false)} />}
            <div className="flex flex-col h-full bg-gray-50">
                <div className="p-4 sm:p-6 md:p-8 space-y-4 lg:space-y-6 bg-gray-50 flex-shrink-0 z-10">
                    <h1 className="text-2xl font-bold text-gray-800">Listings Archive {listingCount > 0 && `(${listingCount})`}</h1>
                    <div className="space-y-4">
                        <div className="relative w-full">
                            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input type="text" placeholder="City, community or building" className="w-full bg-white pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg text-sm" />
                            <X size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                        <div className="flex flex-wrap gap-2 items-center">
                            <button onClick={() => setFiltersModalOpen(true)} className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg p-2.5 lg:px-3">
                                <SlidersHorizontal size={16} />
                                <span className="hidden lg:inline">All Filters</span>
                            </button>
                            <div className="relative">
                                <button onClick={() => setSortOpen(!isSortOpen)} className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg p-2.5 lg:px-3">
                                    <ArrowUpDown size={16} />
                                    <span className="hidden lg:inline">Listing Created: Newest</span>
                                </button>
                                {isSortOpen && <div className="absolute top-full mt-2 w-56 bg-white rounded-md shadow-lg border z-20"><ul className="py-1">{sortOptions.map(opt => <li key={opt}><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{opt}</a></li>)}</ul></div>}
                            </div>
                            <button onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')} className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg p-2.5 lg:px-3">
                                {viewMode === 'list' ? <LayoutGrid size={16} /> : <List size={16} />}
                                <span className="hidden lg:inline">{viewMode === 'list' ? 'Grid' : 'List'}</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-4 sm:px-6 md:px-8 flex-grow overflow-y-auto pb-4">
                    {!isDataAvailable ? <div className="flex items-center justify-center h-full"><ArchiveEmptyState /></div> : <ArchiveTable />}
                </div>
            </div>
        </>
    );
};

export default ListingsArchive;