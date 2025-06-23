import UserActionMenu from './UserActionMenu';
import { User } from 'lucide-react';

const mockUsers = [
  { name: 'Saif Alwheibi', phone: '+971547538687', email: 'hishamazmy2015@gmail.com', role: 'Decision Maker', verification: 'Unverified' },
  { name: 'Saif Alwheibi', phone: '+971547538687', email: 'saidsayed162@gmail.com', role: 'Decision Maker', verification: 'Unverified' },
];

const tableHeaders = ["Users (2)", "Role", "Verification", "Compliance", "Call Tracking", "Status", "Actions"];

const UsersTable = () => {
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
          {mockUsers.map((user, index) => (
            <tr key={index} className="border-b last:border-b-0 border-gray-200/80">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <User size={20} className="text-gray-400" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.phone}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.role}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-600 font-medium">{user.verification}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">-</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">-</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
              </td>
              {/* THE FIX: Added 'relative' to the cell containing the menu */}
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium relative">
                <UserActionMenu />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;