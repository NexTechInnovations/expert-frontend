interface FormLabelProps { text: string; required?: boolean; children: React.ReactNode; }
const FormLabel = ({ text, required, children }: FormLabelProps) => (
  <div>
    <label className="block text-sm font-bold text-gray-700 mb-2">
      {text} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
  </div>
);
export default FormLabel;