import { User } from 'lucide-react';

const mockUsers = [
  { name: 'Saif Alwheibi', phone: '+971547538687', email: 'hishamazmy2015@gmail.com', role: 'Decision Maker', verification: 'Unverified' },
  { name: 'Saif Alwheibi', phone: '+971547538687', email: 'saidsayed162@gmail.com', role: 'Decision Maker', verification: 'Unverified' },
];

const UserDetailRow = ({ label, value, valueClass = '' }) => (
    <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">{label}:</span>
        <span className={`font-medium text-gray-800 ${valueClass}`}>{value}</span>
    </div>
);

const UserCard = () => {
    return (
        <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Users ({mockUsers.length})</h3>
            {mockUsers.map((user, index) => (
                <div key={index} className="bg-white border border-gray-200/80 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center gap-3 border-b pb-3 mb-3">
                         <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                            <User size={20} className="text-gray-400" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-900">{user.name}</p>
                            <p className="text-xs text-gray-500">{user.phone}</p>
                            <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <UserDetailRow label="Role" value={user.role} />
                        <UserDetailRow label="Verification" value={user.verification} valueClass="text-yellow-600" />
                        <UserDetailRow label="Compliance" value="-" />
                        <UserDetailRow label="Call Tracking" value="-" />
                        <UserDetailRow label="Status" value="Active" valueClass="text-green-600" />
                    </div>
                    <div className="mt-4">
                        <button className="w-full bg-white border border-violet-600 text-violet-600 font-semibold py-2 rounded-lg text-sm hover:bg-violet-50">
                            Actions
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserCard;