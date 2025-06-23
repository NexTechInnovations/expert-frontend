import { Search } from 'lucide-react';
import CustomSelect from '../components/ui/CustomSelect';
import ClaimTransactionEmptyState from '../components/dashboard/ClaimTransactionEmptyState';

const ClaimTransaction = () => {
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className="max-w-5xl mx-auto space-y-6">
                <h1 className="text-2xl font-bold text-gray-800">Claim your transaction</h1>
                <div className="bg-white border border-gray-200/80 rounded-lg p-8">
                    <p className="text-sm text-gray-600 mb-6">Select or search any offline listing to claim the property transaction.</p>
                    <div className="space-y-4">
                        <div className="relative w-full">
                            <input type="text" placeholder="Enter Reference Number of the listing" className="w-full bg-white pl-4 pr-10 py-2.5 border rounded-lg text-sm" />
                            <button className="absolute inset-y-0 right-0 flex items-center justify-center w-12 border-l bg-gray-50 rounded-r-lg hover:bg-gray-100">
                                <Search size={18} className="text-gray-500" />
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            <CustomSelect options={[]} placeholder="Location" value="" onChange={() => {}} />
                            <CustomSelect options={[]} placeholder="Category" value="" onChange={() => {}} />
                            <CustomSelect options={[]} placeholder="Property type" value="" onChange={() => {}} />
                            <CustomSelect options={[]} placeholder="Agent" value="" onChange={() => {}} />
                        </div>
                    </div>
                    <div className="mt-8">
                        <ClaimTransactionEmptyState />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClaimTransaction;