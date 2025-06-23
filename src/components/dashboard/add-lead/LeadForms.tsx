import { useState } from 'react';
import { Home, Building, DollarSign, Bed, Bath, Armchair, MapPin, Calendar, Clock, CheckSquare } from 'lucide-react';

import * as LeadData from '../../../data/newLeadData';
import FormLabel from '../../ui/FormLabel';
import MultiSelectButtonGroup from '../../ui/MultiSelectButtonGroup';
import CustomSelect from '../../ui/CustomSelect';
import SegmentedControl from '../../ui/SegmentedControl';
import FormSection from '../../ui/FormSection';

const FormRow = ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">{children}</div>
);

const ResidentialBuyerRequirements = ({ formState, setFormState }: any) => (
    <div className="space-y-6">
        <FormRow><FormLabel text="Purpose of buying" icon={<CheckSquare size={16} />} /><MultiSelectButtonGroup options={LeadData.purposeOfBuyingOptions} selected={formState.purpose} onToggle={(opt) => setFormState('purpose', opt)} isMultiSelect /></FormRow>
        <FormRow><FormLabel text="Property type" icon={<Home size={16} />} /><MultiSelectButtonGroup options={LeadData.propertyTypeOptions} selected={formState.propertyType} onToggle={(opt) => setFormState('propertyType', opt)} isMultiSelect /></FormRow>
        <FormRow><FormLabel text="Property size, sqft" icon={<Home size={16} />} /><div className="flex-grow flex items-center gap-2"><input placeholder="From" className="w-full p-2.5 border rounded-lg" /><span className="text-gray-400">-</span><input placeholder="To" className="w-full p-2.5 border rounded-lg" /></div></FormRow>
        <FormRow><FormLabel text="Property price (AED)" icon={<DollarSign size={16} />} /><div className="flex-grow flex items-center gap-2"><input placeholder="From" className="w-full p-2.5 border rounded-lg" /><span className="text-gray-400">-</span><input placeholder="To" className="w-full p-2.5 border rounded-lg" /></div></FormRow>
        <FormRow><FormLabel text="Number of bedrooms" icon={<Bed size={16} />} /><MultiSelectButtonGroup options={LeadData.bedroomsOptions} selected={formState.bedrooms} onToggle={(opt) => setFormState('bedrooms', opt)} /></FormRow>
        <FormRow><FormLabel text="Number of bathrooms" icon={<Bath size={16} />} /><MultiSelectButtonGroup options={LeadData.bathroomsOptions} selected={formState.bathrooms} onToggle={(opt) => setFormState('bathrooms', opt)} /></FormRow>
        <FormRow><FormLabel text="Furnishing type:" icon={<Armchair size={16} />} /><MultiSelectButtonGroup options={LeadData.furnishingOptions} selected={formState.furnishing} onToggle={(opt) => setFormState('furnishing', opt)} /></FormRow>
        <FormRow><FormLabel text="Preferred locations" icon={<MapPin size={16} />} /><input placeholder="Location" className="flex-grow w-full p-2.5 border rounded-lg" /></FormRow>
        <FormRow><FormLabel text="Readiness to buy" icon={<Calendar size={16} />} /><MultiSelectButtonGroup options={LeadData.readinessOptions} selected={formState.readiness} onToggle={(opt) => setFormState('readiness', opt)} isMultiSelect /></FormRow>
        <FormRow><FormLabel text="Purchase period" icon={<Clock size={16} />} /><MultiSelectButtonGroup options={LeadData.purchasePeriodOptions} selected={formState.purchasePeriod} onToggle={(opt) => setFormState('purchasePeriod', opt)} /></FormRow>
    </div>
);

const CommercialBuyerRequirements = ({ formState, setFormState }: any) => {
    const commercialPropertyTypes = ["Office Space", "Retail", "Shop", "Show Room", "Short Term & Hotel Apartment", "Bulk Units", "Others"];
    return (
        <div className="space-y-6">
            <FormRow><FormLabel text="Purpose of buying" icon={<CheckSquare size={16} />} /><MultiSelectButtonGroup options={["Resell", "For renting", "Investment"]} selected={formState.purpose} onToggle={(opt) => setFormState('purpose', opt)} isMultiSelect /></FormRow>
            <FormRow><FormLabel text="Property type" icon={<Building size={16} />} /><MultiSelectButtonGroup options={commercialPropertyTypes} selected={formState.propertyType} onToggle={(opt) => setFormState('propertyType', opt)} isMultiSelect /></FormRow>
            <FormRow><FormLabel text="Property size, sqft" icon={<Home size={16} />} /><div className="flex-grow flex items-center gap-2"><input placeholder="From" className="w-full p-2.5 border rounded-lg" /><span className="text-gray-400">-</span><input placeholder="To" className="w-full p-2.5 border rounded-lg" /></div></FormRow>
            <FormRow><FormLabel text="Property price (AED)" icon={<DollarSign size={16} />} /><div className="flex-grow flex items-center gap-2"><input placeholder="From" className="w-full p-2.5 border rounded-lg" /><span className="text-gray-400">-</span><input placeholder="To" className="w-full p-2.5 border rounded-lg" /></div></FormRow>
            <FormRow><FormLabel text="Preferred locations" icon={<MapPin size={16} />} /><input placeholder="Location" className="flex-grow w-full p-2.5 border rounded-lg" /></FormRow>
            <FormRow><FormLabel text="Readiness to buy" icon={<Calendar size={16} />} /><MultiSelectButtonGroup options={LeadData.readinessOptions} selected={formState.readiness} onToggle={(opt) => setFormState('readiness', opt)} isMultiSelect /></FormRow>
            <FormRow><FormLabel text="Purchase period" icon={<Clock size={16} />} /><MultiSelectButtonGroup options={LeadData.purchasePeriodOptions} selected={formState.purchasePeriod} onToggle={(opt) => setFormState('purchasePeriod', opt)} /></FormRow>
        </div>
    );
};

export const LeadDetailsForm = () => (
    <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div><label className="text-sm font-medium text-gray-700 block mb-2">Full name</label><input type="text" className="w-full p-2.5 border rounded-lg" /></div>
            <div></div>
            <div><label className="text-sm font-medium text-gray-700 block mb-2">Phone number</label><div className="flex"><span className="inline-flex items-center px-3 text-sm border border-r-0 rounded-l-lg bg-gray-50">+971</span><input type="text" className="w-full p-2.5 border rounded-r-lg" /></div></div>
            <div><label className="text-sm font-medium text-gray-700 block mb-2">Email</label><input type="email" className="w-full p-2.5 border rounded-lg" /></div>
            <div><label className="text-sm font-medium text-gray-700 block mb-2">Status</label><input type="text" value="New Lead" className="w-full p-2.5 border rounded-lg bg-gray-100 text-gray-500" disabled /></div>
            <div><label className="text-sm font-medium text-gray-700 block mb-2">Assigned to</label><CustomSelect options={[]} placeholder="Assigned to" value="" onChange={() => {}} /></div>
        </div>
    </div>
);

export const LeadTypeAndRequirementsForm = () => {
    const [formState, setFormState] = useState({ leadType: '', propertyCategory: '', purpose: [], propertyType: [], bedrooms: '', bathrooms: '', furnishing: '', readiness: [], purchasePeriod: '' });

    const handleStateUpdate = (key: keyof typeof formState, value: string) => {
        setFormState(prev => {
            const currentVal = prev[key];
            if (Array.isArray(currentVal)) {
                const newVal = currentVal.includes(value) ? currentVal.filter(v => v !== value) : [...currentVal, value];
                return { ...prev, [key]: newVal };
            }
            return { ...prev, [key]: value };
        });
    };

    return (
        <div className="space-y-8">
            <FormSection title="Lead Type"><SegmentedControl options={[{label: 'Buyer', value: 'buyer'}, {label: 'Tenant', value: 'tenant'}]} value={formState.leadType} onChange={(v) => handleStateUpdate('leadType', v)} className=""/></FormSection>
            <FormSection title="Requirements">
                <div className="space-y-6">
                    <FormRow><FormLabel text="Property category" icon={<Home size={16} />} /><SegmentedControl options={[{label: 'Residential', value: 'residential'}, {label: 'Commercial', value: 'commercial'}]} value={formState.propertyCategory} onChange={(v) => handleStateUpdate('propertyCategory', v)} className="w-full md:w-auto" /></FormRow>
                    <div className="pt-6 border-t border-gray-100">
                        {formState.propertyCategory === 'residential' ? <ResidentialBuyerRequirements formState={formState} setFormState={handleStateUpdate} /> : <CommercialBuyerRequirements formState={formState} setFormState={handleStateUpdate} />}
                    </div>
                </div>
            </FormSection>
        </div>
    );
};

export const NoteForm = () => (
    <FormSection title="Note"><div className="w-full"><label className="text-sm font-medium text-gray-700 block mb-2">Add note</label><textarea placeholder="Your note" rows={4} className="w-full p-2.5 border rounded-lg" /></div></FormSection>
);
