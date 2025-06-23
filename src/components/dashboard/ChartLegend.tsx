import { Info } from 'lucide-react';

const ChartLegend = () => {
    return (
        <div className="w-full lg:w-64 bg-gray-50 p-4 rounded-lg border border-dashed border-gray-300">
            <div className="flex justify-between items-center text-xs text-gray-600 mb-4">
                <span>0</span>
                <span>0</span>
                <span>0</span>
            </div>
            <div className="space-y-2 text-sm">
                <div className="flex items-center">
                    <span className="w-3 h-3 bg-yellow-400 rounded-sm mr-2"></span>
                    <span className="text-gray-700">Standard</span>
                </div>
                <div className="flex items-center">
                    <span className="w-3 h-3 bg-yellow-600 rounded-sm mr-2"></span>
                    <span className="text-gray-700">Featured</span>
                </div>
                <div className="flex items-center">
                    <span className="w-3 h-3 bg-violet-600 rounded-sm mr-2"></span>
                    <span className="text-gray-700">Premium</span>
                </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
                <a href="#" className="flex items-center text-xs text-gray-600 hover:text-blue-600">
                    <span>What is this breakdown?</span>
                    <Info size={12} className="ml-1" />
                </a>
            </div>
        </div>
    );
};

export default ChartLegend;