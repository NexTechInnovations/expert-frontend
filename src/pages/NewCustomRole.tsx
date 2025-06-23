import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CustomSelect from '../components/ui/CustomSelect';

const FormField = ({ label, children }: { label: string, children: React.ReactNode }) => (
    <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
        </label>
        {children}
    </div>
);

const NewCustomRole = () => {
    const navigate = useNavigate();

    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className=" space-y-6">
                 <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 mb-4">
                    <ArrowLeft size={16} />
                    Back
                </button>
                <h1 className="text-2xl font-bold text-gray-800">New custom role</h1>

                <div className="bg-white border border-gray-200/80 rounded-lg p-8">
                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-8">
                            <FormField label="Role name">
                                <input type="text" placeholder="e.g. Senior Agent" className="w-full p-2.5 border rounded-lg text-sm" />
                            </FormField>
                            <FormField label="Base role">
                                <CustomSelect options={[]} placeholder="Choose base role" value="" onChange={()=>{}} />
                            </FormField>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <p className="text-sm text-gray-600">Name your role and select a Base role. Custom role will be based on the Base role you select.</p>
                        </div>
                        <div className="flex items-center gap-4 pt-4 border-t border-gray-200/80">
                            <button className="bg-white border border-gray-300 text-gray-700 font-semibold py-2.5 px-6 rounded-lg hover:bg-gray-100">Cancel</button>
                            <button className="bg-gray-300 text-white font-semibold py-2.5 px-6 rounded-lg cursor-not-allowed">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCustomRole;