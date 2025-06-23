import { Search } from 'lucide-react';
import AgentListEmptyState from '../components/dashboard/AgentListEmptyState';

const AgentInsights = () => {
    const tableHeaders = [
        "Agent", "Verified", "Non-Compliant Properties", "Attended Enquiries",
        "Live Properties", "Leads", "Transactions", "Avg. Rating", "Response Rate"
    ];

    return (
        <div className="p-4 sm:p-6 md:p-8 space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Agent Insights</h1>

            <div className="bg-gray-100 p-3 rounded-md text-sm">
                <p className="text-gray-700">
                    <strong>SuperAgent Report</strong>{' '}
                    <a href="#" className="text-blue-600 underline hover:text-blue-800">
                        Learn more about SuperAgent criteria
                    </a>
                </p>
                <p className="text-xs text-gray-500 mt-1">Data for the previous day</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-4 flex justify-end border-b border-gray-200">
                    <div className="relative w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-violet-300 focus:border-violet-500 outline-none"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center justify-center w-10 text-gray-400">
                           <Search size={18} />
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <div className="grid grid-cols-9 min-w-[1000px]">
                        {tableHeaders.map((header, index) => (
                            <div
                                key={header}
                                className={`py-3 px-4 text-xs font-semibold text-gray-500 uppercase ${index === 0 ? 'col-span-1 text-left' : 'text-center'}`}
                            >
                                {header}
                            </div>
                        ))}
                    </div>
                </div>

                <AgentListEmptyState />
            </div>
        </div>
    );
};

export default AgentInsights;