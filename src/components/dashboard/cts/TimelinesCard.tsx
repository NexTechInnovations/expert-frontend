import { Clock } from 'lucide-react';

const TimelinesCard = () => {
    return (
        <div className="bg-white border border-gray-200/80 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800">Timelines</h2>
            <p className="mt-1 text-sm text-gray-500">
                All CTS purchases made in June 2025 will remain activated for three months, covering July, August, and September 2025.
            </p>
            <div className="mt-6 flex items-center justify-between">
                <div className="text-center">
                    <p className="text-xs text-gray-500">Window open</p>
                    <p className="font-semibold text-gray-800">Jun 16, 2025</p>
                </div>
                <div className="flex-grow mx-4">
                    <div className="relative h-1 w-full bg-gray-200 rounded-full">
                        <div className="absolute top-0 left-0 h-1 bg-violet-600 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-xs text-gray-500">Window closes</p>
                    <p className="font-semibold text-gray-800">Jun 18, 2025</p>
                </div>
            </div>
            <div className="mt-2 text-center">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full px-3 py-1">
                    <Clock size={16} />
                    Window opens <span className="font-bold">today in 6h 45m 19s</span>
                </span>
            </div>
        </div>
    );
};

export default TimelinesCard;