import { ChevronLeft, ChevronRight, Home, Building, Building2, Tag } from 'lucide-react';
import type { ListingAction, ListingState } from "../../../types";
import CustomSelect from "../../ui/CustomSelect";
import InfoTooltip from "../../ui/InfoTooltip";
import SegmentedControl from "../../ui/SegmentedControl";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import 'react-day-picker/dist/style.css';
import FormLabel from '../../ui/FormLabel';

interface FormProps { state: ListingState; dispatch: React.Dispatch<ListingAction>; onComplete: () => void; }

const CoreDetailsForm = ({ state, dispatch, onComplete }: FormProps) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const updateField = (field: keyof ListingState, value: any) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
    // A simple check to "complete" the step
    const { emirate, category, offeringType, propertyType, propertyLocation } = { ...state, [field]: value };
    if (emirate && category && offeringType && propertyType && propertyLocation) {
        onComplete();
    }
  };

  return (
    <div className="space-y-6">
      <FormLabel text="Emirate" required><CustomSelect placeholder="Select an option" options={[{value: 'dubai', label: 'Dubai'}, {value: 'abu_dhabi', label: 'Abu Dhabi'}]} value={state.emirate} onChange={(val) => updateField('emirate', val)} /></FormLabel>
      {state.emirate === 'dubai' && (<FormLabel text="Permit type" required><div className="flex items-center absolute -top-1 -right-1"><InfoTooltip content="Permit type info"/></div><SegmentedControl options={[{label: 'RERA', value: 'rera'}, {label: 'DTCM', value: 'dtcm'}, {label: 'None (DIFC only)', value: 'none'}]} value={state.permitType} onChange={(val) => updateField('permitType', val)} /></FormLabel>)}
      {state.permitType === 'rera' && (<FormLabel text="RERA permit number" required><div className="flex items-center gap-2"><input type="text" className="w-full p-2.5 border rounded-lg" value={state.reraPermitNumber} onChange={e => updateField('reraPermitNumber', e.target.value)} /><button className="bg-white border text-gray-700 font-semibold py-2.5 px-4 rounded-lg">Verify</button></div></FormLabel>)}
       
      <FormLabel text="Category" required><SegmentedControl options={[{label: 'Residential', value: 'residential', icon: <Home size={16}/>}, {label: 'Commercial', value: 'commercial', icon: <Building size={16}/>}]} value={state.category} onChange={(val) => updateField('category', val)} /></FormLabel>
      <FormLabel text="Offering type" required><SegmentedControl options={[{label: 'Rent', value: 'rent', icon: <Building2 size={16}/>}, {label: 'Sale', value: 'sale', icon: <Tag size={16}/>}]} value={state.offeringType} onChange={(val) => updateField('offeringType', val)} /></FormLabel>
      
      <FormLabel text="Property type" required><CustomSelect placeholder="Select an option" options={[{value: 'Apartment', label: 'Apartment'}, {value: 'Villa', label: 'Villa'}]} value={state.propertyType} onChange={(val) => updateField('propertyType', val)} /></FormLabel>
      <FormLabel text="Property location" required><input type="text" placeholder="City, community or building" className="w-full p-2.5 border rounded-lg" value={state.propertyLocation} onChange={e => updateField('propertyLocation', e.target.value)} /></FormLabel>
      <FormLabel text="Assigned agent" required><input type="text" className="w-full p-2.5 border rounded-lg" value={state.assignedAgent} onChange={e => updateField('assignedAgent', e.target.value)} /></FormLabel>
      
      <FormLabel text="Reference" required>
        <div className="relative">
          <input type="text" className="w-full p-2.5 border rounded-lg pr-12" value={state.reference} onChange={e => updateField('reference', e.target.value)} />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">0/50</span>
        </div>
      </FormLabel>

      <FormLabel text="Available">
        <div className="flex items-center gap-2">
          <button onClick={() => { updateField('available', 'immediately'); setShowCalendar(false); }} className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-colors border ${state.available === 'immediately' ? 'bg-violet-600 text-white border-violet-600' : 'bg-white border-gray-300'}`}>Immediately</button>
          <button onClick={() => { updateField('available', 'fromDate'); setShowCalendar(true); }} className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-colors border ${state.available === 'fromDate' ? 'bg-violet-600 text-white border-violet-600' : 'bg-white border-gray-300'}`}>From date</button>
        </div>
        {showCalendar && state.available === 'fromDate' && (
          <div className="mt-2 border rounded-lg p-2">
            <DayPicker 
              mode="single" 
              selected={state.availableDate || undefined} 
              onSelect={(date) => updateField('availableDate', date)} 
              components={{ IconLeft: () => <ChevronLeft size={16}/>, IconRight: () => <ChevronRight size={16}/> }}
            />
          </div>
        )}
      </FormLabel>
    </div>
  );
};

export default CoreDetailsForm;