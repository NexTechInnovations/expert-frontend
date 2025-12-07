import { BarChart, Plus } from 'lucide-react';
import CreditReturnsEmptyState from '../components/dashboard/credit/CreditReturnsEmptyState';

const CreditReturns = () => {
    return (
        <div className="flex flex-col h-full bg-gray-50">
            {/* Header Section */}
            <div className="p-4 sm:p-6 md:p-8 space-y-4 lg:space-y-6 bg-gray-50 flex-shrink-0 z-10">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">Credit Management</h1>
                    <div className="flex items-center gap-2">
                        <button className="bg-white border text-violet-600 border-violet-600 font-semibold py-2 px-4 rounded-md flex items-center gap-2 text-sm"><BarChart size={16}/>Calculate credits</button>
                        <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md flex items-center gap-2 text-sm"><Plus size={16} />Top up</button>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-4 sm:px-6 md:px-8 flex-grow overflow-y-auto flex items-center justify-center pb-4">
                 <CreditReturnsEmptyState />
            </div>
             
             {/* Mobile Footer */}
             <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t p-4 flex gap-4 z-30">
                <button className="text-sm bg-white border border-violet-600 text-violet-600 font-semibold py-3 px-4 rounded-lg w-full flex items-center justify-center gap-2"><BarChart size={16} />Calculate credits</button>
                <button className="bg-red-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 w-full"><Plus size={16} />Top up</button>
            </div>
        </div>
    );
};

export default CreditReturns;