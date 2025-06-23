const CreditsStatus = () => {
  return (
    <div className="px-4 py-5">
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="font-medium text-gray-700">Remaining Credits</span>
        <span className="text-gray-500">expires in 16d</span>
      </div>
      <p className="text-3xl font-bold text-gray-800 mb-2">169</p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-violet-600 h-2 rounded-full" style={{ width: '75%' }}></div>
      </div>
    </div>
  );
};

export default CreditsStatus;