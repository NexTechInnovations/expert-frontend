import { LineChart } from 'lucide-react';

const NoData = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 py-16">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <LineChart size={32} className="text-gray-400" />
      </div>
      <p className="font-semibold text-gray-700">No data available</p>
    </div>
  );
};

export default NoData;