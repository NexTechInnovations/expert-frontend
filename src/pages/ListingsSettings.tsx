import WatermarkEditor from '../components/dashboard/settings/WatermarkEditor';

const ListingsSettings = () => {
    return (
        <div className="p-4 sm:p-6 md:p-8 space-y-6">
            <div className="flex flex-wrap gap-4 items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Listings Settings</h1>
                <button className="text-sm bg-white border border-gray-300 text-gray-700 font-semibold py-1.5 px-3 rounded-md hover:bg-gray-50">
                    Help article
                </button>
            </div>
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                    <a href="#" className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-violet-600 border-violet-500">
                        Watermark
                    </a>
                </nav>
            </div>
            <WatermarkEditor />
        </div>
    );
};

export default ListingsSettings;