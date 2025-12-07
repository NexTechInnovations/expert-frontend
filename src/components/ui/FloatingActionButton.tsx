import { MessageSquare } from 'lucide-react';

const FloatingActionButton = () => {
  return (
    <button className="fixed bottom-6 right-6 bg-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors z-50">
      <MessageSquare size={28} />
      <span className="absolute -top-1 -right-1 bg-red-700 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-gray-50">
        1
      </span>
    </button>
  );
};

export default FloatingActionButton;