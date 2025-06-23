import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CustomSelect from '../components/ui/CustomSelect';

const FormField = ({ label, children, required = false }: { label: string, children: React.ReactNode, required?: boolean }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        {children}
    </div>
);

const AddNewUser = () => {
    const navigate = useNavigate();

    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className=" space-y-6">
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 mb-4">
                    <ArrowLeft size={16} />
                    Back
                </button>

                {/* <h1 className="text-2xl font-bold text-gray-800">Add a New User</h1> */}

                <div className="bg-white border border-gray-200/80 rounded-lg p-8">
                    <h2 className="text-lg font-bold text-gray-800 mb-6">Add a New User</h2>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <FormField label="First Name" required>
                                <input type="text" placeholder="First Name" className="w-full p-2.5 border rounded-lg text-sm" />
                            </FormField>
                            <FormField label="Last Name">
                                <input type="text" placeholder="Last Name" className="w-full p-2.5 border rounded-lg text-sm" />
                            </FormField>
                            <FormField label="Mobile Phone" required>
                                <div className="flex">
                                    <CustomSelect 
                                        options={[{value: '971', label: '+971'}]}
                                        value="971"
                                        onChange={() => {}}
                                        placeholder="+971"
                                        className="w-24 rounded-r-none"
                                    />
                                    <input type="text" placeholder="Mobile Phone" className="w-full p-2.5 border border-l-0 rounded-r-lg text-sm" />
                                </div>
                            </FormField>
                            <FormField label="Login Email" required>
                                <input type="email" placeholder="Login Email" className="w-full p-2.5 border rounded-lg text-sm" />
                            </FormField>
                        </div>
                        <FormField label="Role" required>
                            <CustomSelect options={[]} placeholder="Role" value="" onChange={()=>{}} />
                        </FormField>
                        <div>
                            <button className="bg-gray-300 text-white font-semibold py-2.5 px-6 rounded-lg cursor-not-allowed">
                                Send invitation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewUser;

// We need a slight variation of the CustomSelect to handle the phone code dropdown
const PhoneCodeSelect = () => {
    // This is a placeholder. A real implementation would use a proper dropdown library.
    return (
        <div className="relative">
            <select className="w-24 appearance-none p-2.5 border border-r-0 rounded-l-lg bg-gray-50 text-sm">
                <option>+971</option>
            </select>
        </div>
    )
}