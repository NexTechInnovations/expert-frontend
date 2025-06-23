import type { ListingAction, ListingState } from "../../../types";
import CustomSelect from "../../ui/CustomSelect";
import FormLabel from "../../ui/FormLabel";
import SegmentedControl from "../../ui/SegmentedControl";


interface FormProps { state: ListingState; dispatch: React.Dispatch<ListingAction>; }
const SpecificationsForm = ({ state, dispatch }: FormProps) => {
  const updateField = (field: keyof ListingState, value: any) => dispatch({ type: 'UPDATE_FIELD', field, value });

  return (
    <div className="space-y-6">
      <FormLabel text="Size (sqft)" required><div className="relative"><input type="text" className="w-full p-2.5 border rounded-lg" value={state.size} onChange={e => updateField('size', e.target.value)} /><span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">sqft</span></div></FormLabel>
      <FormLabel text="Rooms" required><CustomSelect placeholder="Select an option" options={[{value: 'studio', label:'Studio'},{value: '1', label:'1'},{value: '2', label:'2'}]} value={state.rooms} onChange={(val) => updateField('rooms', val)}/></FormLabel>
      <FormLabel text="Bathrooms" required><CustomSelect placeholder="Select an option" options={[{value: '1', label:'1'},{value: '2', label:'2'},{value: '3', label:'3'}]} value={state.bathrooms} onChange={(val) => updateField('bathrooms', val)}/></FormLabel>
      <FormLabel text="Developer"><input type="text" className="w-full p-2.5 border rounded-lg" value={state.developer} onChange={e => updateField('developer', e.target.value)} /></FormLabel>
      <FormLabel text="Unit number"><input type="text" className="w-full p-2.5 border rounded-lg" value={state.unitNumber} onChange={e => updateField('unitNumber', e.target.value)} /><p className="text-xs text-gray-500 mt-1">This data is for internal use only. We won't display it to consumers.</p></FormLabel>
      <FormLabel text="No of parking spaces"><input type="text" className="w-full p-2.5 border rounded-lg" value={state.parkingSpaces} onChange={e => updateField('parkingSpaces', e.target.value)} /></FormLabel>
      <FormLabel text="Furnishing type" required><SegmentedControl options={[{label: 'Unfurnished', value: 'unfurnished'}, {label: 'Semi furnished', value: 'semi'}, {label: 'Furnished', value: 'furnished'}]} value={state.furnishingType} onChange={(val) => updateField('furnishingType', val)} /></FormLabel>
      <FormLabel text="Property age"><input type="text" className="w-full p-2.5 border rounded-lg" value={state.propertyAge} onChange={e => updateField('propertyAge', e.target.value)} /></FormLabel>
      <FormLabel text="Project status" required><CustomSelect placeholder="Select an option" options={[{value:'resale-ready', label:'Resale - Ready to move'}, {value:'resale-off-plan', label:'Resale - Off-plan'}]} value={state.projectStatus} onChange={(val) => updateField('projectStatus', val)}/></FormLabel>
      <FormLabel text="Owner Name"><input type="text" className="w-full p-2.5 border rounded-lg" value={state.ownerName} onChange={e => updateField('ownerName', e.target.value)} /></FormLabel>
    </div>
  );
};
export default SpecificationsForm;