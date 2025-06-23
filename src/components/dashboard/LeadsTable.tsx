import { User, ArrowUp } from 'lucide-react';

const mockLeads = [
  {
    name: 'Saif Alwheibi',
    phone: '+971547538687',
    email: 'hishamazmy2015@gmail.com',
    id: '1799322',
    createdDate: '16 Jun 25, 00:30',
    createdRelative: 'Just now',
    assignedTo: 'Saif Alwheibi',
    type: 'SALE',
    propertyType: 'Villa',
    status: 'NEW',
  }
];

const tableHeaders = ["Lead Details", "Created", "Assigned to", "Type", "Status", ""];

const LeadsTable = () => {
  return (
    <div className="w-full bg-white border border-gray-200/80 rounded-lg overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thumb-rounded-full">
      <table className="min-w-full w-full">
        <thead className="bg-gray-50/50">
          <tr className="border-b border-gray-200/80">
            {tableHeaders.map((header, index) => (
              <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  <span>{header}</span>
                  {index === 1 && <ArrowUp size={14} />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {mockLeads.map((lead, index) => (
            <tr key={index} className="hover:bg-gray-50/50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <User size={16} className="text-gray-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{lead.name}</p>
                    <p className="text-sm text-gray-500">{lead.phone}</p>
                    <p className="text-sm text-gray-500">{lead.email}</p>
                    <p className="text-xs text-gray-400 mt-1">ID: {lead.id}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <p>{lead.createdDate}</p>
                <p className="text-xs text-gray-400">{lead.createdRelative}</p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.assignedTo}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 border border-gray-300 rounded">{lead.type}</span>
                <p className="mt-1">Property type: {lead.propertyType}</p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-600">{lead.status}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right">
                <button className="text-sm bg-white border border-violet-600 text-violet-600 font-semibold py-2 px-4 rounded-md hover:bg-violet-50">
                  Lead Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadsTable;