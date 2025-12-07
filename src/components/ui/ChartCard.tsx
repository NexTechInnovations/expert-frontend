import React from 'react';

interface ChartCardProps {
  title?: string;
  children: React.ReactNode;
  tabs?: string[];
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  className?: string;
}

const ChartCard = ({ title, children, tabs, activeTab, onTabChange, className }: ChartCardProps) => {
  return (
    <div className={`bg-white p-6 border border-gray-200 rounded-lg ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        {title && <h3 className="text-lg font-bold text-gray-800">{title}</h3>}
        {tabs && onTabChange && (
          <div className="flex items-center space-x-2 border border-gray-200 rounded-lg p-1 mt-4 sm:mt-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                  activeTab === tab ? 'bg-gray-200 text-gray-800' : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ChartCard;