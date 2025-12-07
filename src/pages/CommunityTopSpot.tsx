import TimelinesCard from '../components/dashboard/cts/TimelinesCard';
import HowCtsHelps from '../components/dashboard/cts/HowCtsHelps';
import PurchaseSteps from '../components/dashboard/cts/PurchaseSteps';

const CommunityTopSpot = () => {
    return (
        <div className="p-4 sm:p-6 md:p-8 space-y-6">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Community Top Spot</h1>
                <button className="w-full lg:w-auto bg-red-600 text-white font-semibold py-3 lg:py-2 px-4 rounded-md text-sm hover:bg-red-700">
                    View availability list
                </button>
            </div>
            
            <TimelinesCard />
            
            {/* Main Content Area */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
                <div className="xl:col-span-2">
                    <HowCtsHelps />
                </div>
                <div className="xl:col-span-1">
                    <PurchaseSteps />
                </div>
            </div>
        </div>
    );
};

export default CommunityTopSpot;