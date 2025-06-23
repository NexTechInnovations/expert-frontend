const mockHistory = [
  { user: 'System', date: '31 May, 2025, 04:37 pm', credits: '+69', balance: 169, description: 'Credit addition' },
  { user: 'System', date: '31 May, 2025, 04:37 pm', credits: '+100', balance: 100, description: 'Credit addition' },
];

const tableHeaders = ["User", "Date", "Credits", "Credit Balance", "Description", "Web ID", "Reference", "Property Type", "Category", "Location"];

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FEE2E2"/>
    <path d="M16.5 18C16.5 15.5147 14.4853 13.5 12 13.5C9.51472 13.5 7.5 15.5147 7.5 18" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="10" r="2.25" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const UsageHistoryTable = () => {
  return (
    <div className="w-full bg-white border border-gray-200/80 rounded-lg overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thumb-rounded-full">
      <table className="min-w-full w-full">
        <thead className="bg-gray-50/50">
          <tr className="border-b border-gray-200/80">
            {tableHeaders.map((header) => (
              <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 whitespace-nowrap">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {mockHistory.map((item, index) => (
            <tr key={index} className="border-b last:border-b-0 border-gray-200/80">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">
                <div className="flex items-center gap-3">
                  <UserIcon />
                  <span>{item.user}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-bold">{item.credits}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.balance}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.description}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">-</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">-</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">-</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">-</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsageHistoryTable;