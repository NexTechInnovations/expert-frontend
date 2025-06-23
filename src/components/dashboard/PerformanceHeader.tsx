const PerformanceHeader = () => {
    return (
        <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Performance Overview</h1>
                <button className="mt-2 sm:mt-0 text-sm bg-violet-100 text-violet-700 font-semibold py-1.5 px-4 rounded-md hover:bg-violet-200 transition-colors">
                    What's changed on PF Expert
                </button>
            </div>
            <p className="mt-1 text-sm text-gray-500">
                Monitor how your listings are performing on our platform, from gaining views to generating leads. Click on any metric for detailed insights and track your progress over time.
            </p>
        </div>
    );
};

export default PerformanceHeader;