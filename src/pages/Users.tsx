import { Search, Plus } from 'lucide-react';
import CustomSelect from '../components/ui/CustomSelect';
import UsersTable from '../components/dashboard/users/UsersTable';
import UsageHistoryCards from '../components/dashboard/credit/UsageHistoryCards';
import { Link } from 'react-router-dom';

const Users = () => {
    return (
        <div className="flex flex-col h-full bg-gray-50">
            {/* Header Section */}
            <div className="p-4 sm:p-6 md:p-8 space-y-4 lg:space-y-6 bg-gray-50 flex-shrink-0 z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <h1 className="text-2xl font-bold text-gray-800">Users</h1>
                    <div className="flex items-center gap-2">
                        <button className="hidden lg:inline-flex text-sm bg-violet-100 text-violet-700 font-semibold py-1.5 px-3 rounded-md">What's changed</button>
                        <button className="hidden lg:inline-flex text-sm bg-white border text-gray-700 font-semibold py-1.5 px-3 rounded-md">Watch tutorial</button>
                        <Link to="/add-new-user">
                    <button className="w-full lg:w-auto bg-red-600 text-white font-semibold py-3 lg:py-2.5 px-4 rounded-md flex items-center justify-center gap-2 text-sm"><Plus size={16} />Create a new user</button>
                        </Link>
                    </div>
                </div>
                
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:justify-between">
                    <div className="relative w-full lg:max-w-xs">
                        <input type="text" placeholder="Search by Name, Email, Mobile" className="w-full bg-white pl-4 pr-10 py-2.5 border rounded-lg text-sm" />
                        <button className="absolute inset-y-0 right-0 flex items-center justify-center w-12 border-l bg-gray-50 rounded-r-lg hover:bg-gray-100">
                            <Search size={18} className="text-gray-500" />
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex-1 lg:w-48"><CustomSelect options={[]} placeholder="Any role" value={''} onChange={() => {}} /></div>
                        <div className="flex-1 lg:w-48"><CustomSelect options={[]} placeholder="Active" value={''} onChange={() => {}} /></div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-4 sm:px-6 md:px-8 flex-grow overflow-y-auto pb-4">
                 {/* Desktop View */}
                 <div className="hidden lg:block">
                    <UsersTable />
                 </div>
                 {/* Mobile View */}
                 <div className="block lg:hidden">
                    <UsageHistoryCards />
                 </div>
            </div>
        </div>
    );
};

export default Users;