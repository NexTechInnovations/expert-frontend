import { useState } from 'react';
import { X, Search } from 'lucide-react';
import CustomSelect from '../ui/CustomSelect';
import { cn } from '../../lib/utils';

interface MoreFiltersModalProps {
  onClose: () => void;
}

const MoreFiltersModal = ({ onClose }: MoreFiltersModalProps) => {
  const [filters, setFilters] = useState({
    exposureType: '',
    spotlightStatus: '',
    verificationStatus: '',
    state: '',
    completionStatus: '',
    propertyCategory: '',
    offeringType: '',
    propertyType: '',
    furnishing: '',
    expiryDate: '',
    owner: '',
    bedrooms: '',
  });

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const bedroomOptions = ['Studio', '1', '2', '3', '4', '5+'];
  const exposureOptions = [
      { value: 'featured', label: 'Featured' },
      { value: 'standard', label: 'Standard' },
      { value: 'premium', label: 'Premium' },
  ];

  const Label = ({ children }: { children: React.ReactNode }) => (
    <label className="text-xs font-semibold text-gray-600 block mb-1.5">{children}</label>
  );

  const baseInputStyles = "w-full p-2.5 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 outline-none transition-shadow";
  
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl h-full max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center p-6 border-b border-gray-200 flex-shrink-0">
          <h2 className="text-lg font-bold text-gray-900">More Filters</h2>
          <button onClick={onClose} className="p-2 rounded-full text-gray-500 hover:bg-gray-100"><X size={20} /></button>
        </div>

        <div className="flex-grow p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thumb-rounded-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div><Label>Reference Number</Label><div className="relative"><Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" /><input type="text" placeholder="Enter Reference Number" className={`${baseInputStyles} pl-9`} /></div></div>
            <div><Label>Agents</Label><div className="relative"><Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" /><input type="text" placeholder="Select agent" className={`${baseInputStyles} pl-9`} /></div></div>
            <div><Label>Exposure Type</Label><CustomSelect options={exposureOptions} placeholder="Select exposure type" value={filters.exposureType} onChange={v => handleFilterChange('exposureType', v)} /></div>
            <div><Label>Spotlight Status</Label><CustomSelect options={[]} placeholder="Select Status" value={filters.spotlightStatus} onChange={v => handleFilterChange('spotlightStatus', v)} /></div>
            <div><Label>Verification Status</Label><CustomSelect options={[]} placeholder="Select Status" value={filters.verificationStatus} onChange={v => handleFilterChange('verificationStatus', v)} /></div>
            <div><Label>State</Label><CustomSelect options={[]} placeholder="Select State" value={filters.state} onChange={v => handleFilterChange('state', v)} /></div>
            <div><Label>Completion Status</Label><CustomSelect options={[]} placeholder="Select completion status" value={filters.completionStatus} onChange={v => handleFilterChange('completionStatus', v)} /></div>
            <div><Label>Property category</Label><CustomSelect options={[{value: 'commercial', label: 'Commercial'}]} placeholder="Select property category" value={filters.propertyCategory} onChange={v => handleFilterChange('propertyCategory', v)} /></div>
            <div><Label>Offering type</Label><CustomSelect options={[]} placeholder="Select offering type" value={filters.offeringType} onChange={v => handleFilterChange('offeringType', v)} /></div>
            <div><Label>Property Type</Label><CustomSelect options={[]} placeholder="Select property type" value={filters.propertyType} onChange={v => handleFilterChange('propertyType', v)} /></div>
            <div><Label>Property price (AED)</Label><div className="flex gap-2"><input type="text" placeholder="Min. Price" className={baseInputStyles} /><input type="text" placeholder="Max. Price" className={baseInputStyles} /></div></div>
            <div><Label>Furnishing</Label><CustomSelect options={[]} placeholder="Select furnishing" value={filters.furnishing} onChange={v => handleFilterChange('furnishing', v)} /></div>
            <div><Label>Property size (sqft)</Label><div className="flex gap-2"><input type="text" placeholder="Min. Area" className={baseInputStyles} /><input type="text" placeholder="Max. Area" className={baseInputStyles} /></div></div>
            <div><Label>Apt/Villa/Unit number</Label><div className="relative"><Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" /><input type="text" placeholder="Enter unit number" className={`${baseInputStyles} pl-9`} /></div></div>
            <div><Label>Expiry date</Label><CustomSelect options={[]} placeholder="Expiry date" value={filters.expiryDate} onChange={v => handleFilterChange('expiryDate', v)} /></div>
            <div><Label>Owner</Label><div className="relative"><Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" /><input type="text" placeholder="Select owner" className={`${baseInputStyles} pl-9`} /></div></div>
            <div className="md:col-span-2"><Label>DTCM/RERA Number</Label><div className="relative"><Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" /><input type="text" placeholder="Enter DTCM/RERA Number" className={`${baseInputStyles} pl-9`} /></div></div>
            <div className="md:col-span-2">
                <Label>Bedrooms</Label>
                <div className="flex flex-wrap gap-2">
                    {bedroomOptions.map(opt => (
                        <button key={opt} onClick={() => handleFilterChange('bedrooms', opt)} className={cn("px-5 py-2 border rounded-lg text-sm font-medium transition-colors", filters.bedrooms === opt ? "bg-violet-600 text-white border-violet-600" : "border-gray-300 text-gray-700 hover:bg-gray-100")}>{opt}</button>
                    ))}
                </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center p-6 border-t border-gray-200 bg-gray-50/70 rounded-b-2xl flex-shrink-0">
          <button className="text-sm font-semibold text-gray-700 py-2.5 px-5 rounded-lg hover:bg-gray-200/70 transition-colors">Reset</button>
          <button className="text-sm font-semibold text-white bg-red-600 py-2.5 px-5 rounded-lg hover:bg-red-700 transition-colors ml-3">Show results</button>
        </div>
      </div>
    </div>
  );
};

export default MoreFiltersModal;