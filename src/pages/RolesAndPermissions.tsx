import { Plus } from 'lucide-react';
import PermissionsTable from '../components/dashboard/permissions/PermissionsTable';
import { Link } from 'react-router-dom';

const RolesAndPermissions = () => {
    return (
        <div className="flex flex-col h-full bg-gray-50">
            {/* Header Section */}
            <div className="p-4 sm:p-6 md:p-8 space-y-4 bg-gray-50 flex-shrink-0 z-20">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">Roles & Permissions</h1>
                    <Link to="/add-new-custom-role">
  <button className="bg-white border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md flex items-center gap-2 text-sm">
                        <Plus size={16} />
                        Add Custom Role
                    </button>
                    </Link>
                  
                </div>
                 <p className="text-sm text-gray-600">
                    Permissions available for default roles. <a href="#" className="text-violet-600 underline">Create a custom role</a> to upgrade the capabilities of a default role. <a href="#" className="text-violet-600 underline">Learn more</a>
                </p>
            </div>

            {/* Content Section */}
            <div className="px-4 sm:px-6 md:px-8 flex-grow overflow-y-auto pb-4">
                 <PermissionsTable />
            </div>
        </div>
    );
};

export default RolesAndPermissions;