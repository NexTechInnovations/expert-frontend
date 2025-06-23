import NoData from "./NoData";

const CommunityAnalysis = () => {
    return (
        <div className="mt-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-bold text-gray-800">Community & Market Analysis</h2>
                <button className="mt-2 sm:mt-0 text-sm bg-white border border-gray-300 text-gray-700 font-semibold py-1.5 px-4 rounded-md hover:bg-gray-50 transition-colors">
                    Give feedback
                </button>
            </div>
            <p className="mt-2 text-sm text-gray-500 max-w-4xl">
                Explore your listing performance by community. Click on any community on the map to view detailed performance and market trends.
            </p>
            <div className="mt-4 p-6 bg-white border border-gray-200 rounded-lg min-h-[250px] flex items-center justify-center">
                 <NoData />
            </div>
        </div>
    );
};

export default CommunityAnalysis;