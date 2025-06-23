import { LeadDetailsForm, LeadTypeAndRequirementsForm, NoteForm } from "../components/dashboard/add-lead/LeadForms";
import FormSection from "../components/ui/FormSection";

const NewLead = () => {
    return (
        <div className="p-4 sm:p-6 md:p-8 space-y-6">
            {/* <h1 className="text-2xl font-bold text-gray-800">New lead</h1> */}
            
            <FormSection title="New Lead">
                <LeadDetailsForm />
            </FormSection>
            
            <LeadTypeAndRequirementsForm />

            <NoteForm />

            <div className="flex items-center justify-end gap-4 pt-4">
                <button className="bg-white border border-gray-300 text-gray-700 font-semibold py-2.5 px-6 rounded-lg hover:bg-gray-100">Cancel</button>
                <button className="bg-gray-300 text-white font-semibold py-2.5 px-6 rounded-lg cursor-not-allowed">Create Lead</button>
            </div>
        </div>
    );
};

export default NewLead;