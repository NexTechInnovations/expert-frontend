import { useState } from 'react';
import { Search, FileText, Lightbulb } from 'lucide-react';
import PaymentsTable from '../components/dashboard/PaymentsTable';
import { Link } from 'react-router-dom';

const Payments = () => {
    const [hasData, setHasData] = useState(true);

    return (
        <div className="flex flex-col h-full bg-gray-50">
            {/* Header Section */}
            <div className="p-4 sm:p-6 md:p-8 space-y-4 lg:space-y-6 bg-gray-50 flex-shrink-0 z-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <h1 className="text-2xl font-bold text-gray-800">Payments</h1>
                    <div className="flex flex-col lg:items-end gap-2">
                        <button className="w-full lg:w-auto bg-white border border-gray-300 text-violet-600 font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 text-sm">
                            <Lightbulb size={16} />
                            Suggest an improvement
                        </button>
                        <Link to="/request-statement">
                           <button className="w-full lg:w-auto bg-white border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 text-sm">
                            <FileText size={16} />
                            Request statement
                        </button>
                        </Link>
                    </div>
                </div>
                
                <div className="relative w-full lg:max-w-xs">
                    <input type="text" placeholder="Search by contract number" className="w-full bg-white pl-4 pr-10 py-2.5 border rounded-lg text-sm" />
                    <button className="absolute inset-y-0 right-0 flex items-center justify-center w-12 border-l bg-gray-50 rounded-r-lg hover:bg-gray-100">
                      <Search size={18} className="text-gray-500" />
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-4 sm:px-6 md:px-8 flex-grow overflow-y-auto pb-4">
                {hasData ? <PaymentsTable /> : <div>{/* Render empty state here if needed */}</div>}
            </div>
        </div>
    );
};

export default Payments;