interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}
const FormSection = ({ title, children }: FormSectionProps) => (
  <div className="bg-white border border-gray-200/80 rounded-lg">
    <div className="p-6 border-b border-gray-200/80">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    </div>
    <div className="p-6">
      {children}
    </div>
  </div>
);
export default FormSection;