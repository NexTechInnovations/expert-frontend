import { useEffect, useReducer, useState } from 'react';
import type { ListingAction, ListingState } from '../types';
import AddListingHeader from '../components/dashboard/add-listing/AddListingHeader';
import CoreDetailsForm from '../components/dashboard/add-listing/CoreDetailsForm';
import ListingPreview from '../components/dashboard/add-listing/ListingPreview';
import SpecificationsForm from '../components/dashboard/add-listing/SpecificationsForm';
import MediaForm from '../components/dashboard/add-listing/MediaForm';
import PriceForm from '../components/dashboard/add-listing/PriceForm';
import AmenitiesForm from '../components/dashboard/add-listing/AmenitiesForm';
import DescriptionForm from '../components/dashboard/add-listing/DescriptionForm';
import AccordionSection from '../components/dashboard/add-listing/AccordionSection';

const initialState: ListingState = {
  emirate: '', permitType: null, reraPermitNumber: '', dtcmPermitNumber: '', category: null, offeringType: null, propertyType: '', propertyLocation: '', assignedAgent: '', reference: '', available: null, availableDate: null, size: '', rooms: '', bathrooms: '', developer: '', unitNumber: '', parkingSpaces: '', furnishingType: null, propertyAge: '', projectStatus: '', ownerName: '', price: '', downPayment: '', amenities: [], title: '', description: '',
};

function listingReducer(state: ListingState, action: ListingAction): ListingState {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}

const AddListingPage = () => {
  const [formData, dispatch] = useReducer(listingReducer, initialState);
  const [activeSection, setActiveSection] = useState('core');
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [qualityScore, setQualityScore] = useState(0);

  useEffect(() => {
    let score = 0;
    if (formData.emirate && formData.category && formData.offeringType && formData.propertyType && formData.propertyLocation) score += 20;
    if (formData.size && formData.rooms && formData.bathrooms) score += 15;
    if (formData.price) score += 10;
    if (formData.amenities.length > 3) score += 10;
    if (formData.title && formData.description) score += 5;
    setQualityScore(score);
  }, [formData]);

  const sections = [
    { id: 'core', title: 'Core details', component: <CoreDetailsForm state={formData} dispatch={dispatch} onComplete={() => !completedSteps.includes('core') && setCompletedSteps(prev => [...prev, 'core'])} /> },
    { id: 'specs', title: 'Specifications', component: <SpecificationsForm state={formData} dispatch={dispatch} /> },
    { id: 'media', title: 'Media', component: <MediaForm /> },
    { id: 'price', title: 'Price', component: <PriceForm state={formData} dispatch={dispatch} /> },
    { id: 'amenities', title: 'Amenities', component: <AmenitiesForm state={formData} dispatch={dispatch} /> },
    { id: 'description', title: 'Description', component: <DescriptionForm state={formData} dispatch={dispatch} /> },
  ];

  const handleToggle = (id: string) => {
    if (completedSteps.includes('core') || id === 'core') {
      setActiveSection(id === activeSection ? '' : id);
    }
  };

  return (
    <div className="bg-white lg:bg-gray-50 min-h-screen flex flex-col">
      <AddListingHeader qualityScore={qualityScore} />
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 sm:p-6 lg:p-8">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">Add a listing</h1>
          {sections.map(section => (
            <AccordionSection 
              key={section.id}
              title={section.title}
              isCompleted={completedSteps.includes(section.id)}
              isLocked={section.id !== 'core' && !completedSteps.includes('core')}
              isOpen={activeSection === section.id} 
              onToggle={() => handleToggle(section.id)}
            >
              {section.component}
            </AccordionSection>
          ))}
        </div>
        <div className="hidden lg:block">
            <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto scrollbar-thin">
                 <ListingPreview state={formData} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AddListingPage;