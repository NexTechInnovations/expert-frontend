import type { ListingAction, ListingState } from "../../../types";
import FormLabel from "../../ui/FormLabel";

interface FormProps { state: ListingState; dispatch: React.Dispatch<ListingAction>; }
const PriceForm = ({ state, dispatch }: FormProps) => {
  const updateField = (field: keyof ListingState, value: any) => dispatch({ type: 'UPDATE_FIELD', field, value });
  return (
    <div className="space-y-6">
      <FormLabel text="Property price" required><div className="relative"><span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium">AED</span><input type="text" placeholder="Enter amount" className="w-full p-2.5 pl-12 border-red-300 ring-red-300 ring-1 rounded-lg" value={state.price} onChange={e => updateField('price', e.target.value)} /></div></FormLabel>
      <FormLabel text="Down payment" required><div className="relative"><span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium">AED</span><input type="text" placeholder="Enter amount" className="w-full p-2.5 pl-12 border rounded-lg" value={state.downPayment} onChange={e => updateField('downPayment', e.target.value)} /></div><p className="text-xs text-gray-500 mt-1">If there is no down payment required, then keep value as 0.</p></FormLabel>
    </div>
  );
};
export default PriceForm;