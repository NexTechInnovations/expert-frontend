import { Check, X } from 'lucide-react';
import { permissionsData, roles } from '../permissionsData';

const Checkmark = () => <Check size={20} className="text-green-600 mx-auto" />;
const Crossmark = () => <X size={20} className="text-red-500 mx-auto" />;

const PermissionsTable = () => {
    return (
        <div className="w-full bg-white border border-gray-200/80 rounded-lg overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thumb-rounded-full">
            <table className="min-w-full w-full border-collapse">
                <thead className="sticky top-0 bg-gray-50/95 backdrop-blur-sm z-20">
                    <tr className="border-b border-gray-200/80">
                        <th scope="col" className="sticky left-0 bg-gray-50/95 px-6 py-4 text-left text-sm font-bold text-gray-800 z-30 w-64">
                            List of Permissions
                        </th>
                        {roles.map((role) => (
                            <th key={role} scope="col" className="px-6 py-4 text-center text-sm font-bold text-gray-800 whitespace-nowrap">
                                {role}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {permissionsData.map((section, sectionIndex) => (
                        <>
                            {/* Category Row */}
                            <tr key={section.category} className="bg-gray-100/60">
                                {/* This cell needs to be sticky as well and span all columns */}
                                <td colSpan={roles.length + 1} className="sticky left-0 bg-gray-100/60 px-6 py-3 text-left text-sm font-bold text-gray-900 z-10">
                                    {section.category}
                                </td>
                            </tr>
                            {/* Permission Rows */}
                            {section.permissions.map((permission, permIndex) => (
                                <tr key={`${section.category}-${permission.name}`} className="border-b last:border-b-0 border-gray-200/80">
                                    <td className="sticky left-0 bg-white px-6 py-4 whitespace-nowrap text-sm text-gray-600 z-10 hover:bg-gray-50">
                                        {permission.name}
                                    </td>
                                    {permission.access.map((hasAccess, accessIndex) => (
                                        <td key={`${permission.name}-${accessIndex}`} className="px-6 py-4 text-center">
                                            {hasAccess ? <Checkmark /> : <Crossmark />}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PermissionsTable;