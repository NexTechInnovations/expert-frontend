import { ChevronDown, User } from 'lucide-react';

const UserProfile = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
          <User size={20} />
        </div>
        <div>
          <p className="font-semibold text-sm text-gray-800">Saif Alwheibi</p>
          <p className="text-xs text-gray-500">DECISION MAKER</p>
        </div>
      </div>
      <button className="text-gray-400 hover:text-gray-600">
        <ChevronDown size={20} />
      </button>
    </div>
  );
};

export default UserProfile;