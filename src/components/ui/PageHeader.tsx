import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dateOptions = ['Yesterday', 'Last 7 days', 'Last 30 days', 'Last 90 Days', 'Last week'];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <div className="relative mt-4 sm:mt-0">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full sm:w-48 flex items-center justify-between p-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:border-gray-400 transition-colors"
        >
          <span>Last 7 days</span>
          <ChevronDown size={16} className={cn("text-gray-500 transition-transform", isDropdownOpen && "rotate-180")} />
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
            <ul className="p-2 max-h-60 overflow-y-auto">
              {dateOptions.map((option) => (
                <li key={option}>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100">
                    {option}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;