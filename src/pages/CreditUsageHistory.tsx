import { useState } from 'react';
import { Search, ChevronDown, Plus, BarChart } from 'lucide-react';
import UsageHistoryTable from '../components/dashboard/credit/UsageHistoryTable';
import UsageHistoryCards from '../components/dashboard/credit/UsageHistoryCards';
import DateRangePicker from '../components/ui/DateRangePicker';
import CreditsTopUpModal from '../components/dashboard/credit/CreditsTopUpModal';
import CreditCalculatorModal from '../components/dashboard/credit/CreditCalculatorModal'; // <-- استيراد المكون الجديد

const CreditUsageHistory = () => {
    const [isExportOpen, setExportOpen] = useState(false);
    const [isTopUpModalOpen, setTopUpModalOpen] = useState(false);
    const [isCalculatorModalOpen, setCalculatorModalOpen] = useState(false); // <-- حالة جديدة للتحكم في الـ Modal

    return (
        <>
            {isTopUpModalOpen && <CreditsTopUpModal onClose={() => setTopUpModalOpen(false)} />}
            {isCalculatorModalOpen && <CreditCalculatorModal onClose={() => setCalculatorModalOpen(false)} />}
            
            <div className="flex flex-col h-full bg-gray-50">
                {/* Header Section */}
                <div className="p-4 sm:p-6 md:p-8 space-y-4 lg:space-y-6 bg-gray-50 flex-shrink-0 z-10">
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-800">Credit Management</h1>
                        <div className="flex items-center gap-2">
                            <button onClick={() => setCalculatorModalOpen(true)} className="bg-white border text-violet-600 border-violet-600 font-semibold py-2 px-4 rounded-md flex items-center gap-2 text-sm"><BarChart size={16}/>Calculate credits</button>
                            <button onClick={() => setTopUpModalOpen(true)} className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md flex items-center gap-2 text-sm"><Plus size={16} />Top up</button>
                        </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-800">Usage History</h2>

                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                        <div className="relative">
                            <button onClick={() => setExportOpen(!isExportOpen)} className="w-full lg:w-48 flex items-center justify-between p-2.5 bg-white border rounded-lg text-sm"><span className="font-medium">Export to .CSV</span><ChevronDown size={16}/></button>
                            {isExportOpen && (
                                <div className="absolute top-full mt-2 w-48 bg-white rounded-md shadow-lg border z-10"><ul className="py-1"><li className="px-4 py-2 text-sm">1 month</li><li className="px-4 py-2 text-sm">2 months</li><li className="px-4 py-2 text-sm">3 months</li><li className="px-4 py-2 text-sm font-semibold">Selected date range</li></ul></div>
                            )}
                        </div>
                        <div className="relative w-full lg:w-auto flex-grow lg:flex-grow-0"><input type="text" placeholder="Search by Web ID" className="w-full bg-white pl-4 pr-10 py-2.5 border rounded-lg"/><button className="absolute inset-y-0 right-0 w-12 border-l bg-gray-50 rounded-r-lg"><Search size={18} className="text-gray-500 mx-auto" /></button></div>
                        <DateRangePicker />
                        <button className="bg-violet-100 text-violet-700 font-semibold text-sm px-3 py-2.5 rounded-lg whitespace-nowrap">Not enough leads?</button>
                    </div>
                </div>

                {/* Content Section */}
                <div className="px-4 sm:px-6 md:px-8 flex-grow overflow-y-auto pb-28 lg:pb-4">
                     <div className="hidden lg:block"><UsageHistoryTable /></div>
                     <div className="block lg:hidden"><UsageHistoryCards /></div>
                </div>

                {/* Mobile Footer */}
                <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t p-4 flex gap-4 z-30">
                    <button onClick={() => setCalculatorModalOpen(true)} className="text-sm bg-white border border-violet-600 text-violet-600 font-semibold py-3 px-4 rounded-lg w-full flex items-center justify-center gap-2"><BarChart size={16} />Calculate credits</button>
                    <button onClick={() => setTopUpModalOpen(true)} className="bg-red-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 w-full"><Plus size={16} />Top up</button>
                </div>
            </div>
        </>
    );
};

export default CreditUsageHistory;