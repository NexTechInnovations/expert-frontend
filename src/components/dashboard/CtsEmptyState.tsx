import { Star } from 'lucide-react';

const CtsEmptyState = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-16">
            <div className="w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Star size={64} className="text-gray-300" fill="currentColor" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-6">No Eligible Listings</h2>
            <p className="text-sm text-gray-500 mt-2 max-w-sm">
                You currently have no Community Top Spots. Purchase one to place your listings at the top of community search results!
            </p>
            <button className="mt-8 bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors">
                Get Community Top Spot (CTS)
            </button>
        </div>
    );
};

export default CtsEmptyState;