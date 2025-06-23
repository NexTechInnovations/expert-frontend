import type { LucideIcon } from "lucide-react";

export interface NavItemType {
  label: string;
  icon: LucideIcon;
  href: string;
  active?: boolean;
  children?: NavItemType[];
}

export interface StatCardType {
  value: string | number;
  label: string;
  description: string;
}

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterType {
  label: string;
  options: FilterOption[];
}

export interface ListingState {
  emirate: string;
  permitType: 'rera' | 'dtcm' | 'none' | null;
  reraPermitNumber: string;
  dtcmPermitNumber: string;
  category: 'residential' | 'commercial' | null;
  offeringType: 'rent' | 'sale' | null;
  propertyType: string;
  propertyLocation: string;
  assignedAgent: string;
  reference: string;
  available: 'immediately' | 'fromDate' | null;
  availableDate: Date | null;
  size: string;
  rooms: string;
  bathrooms: string;
  developer: string;
  unitNumber: string;
  parkingSpaces: string;
  furnishingType: 'unfurnished' | 'semi' | 'furnished' | null;
  propertyAge: string;
  projectStatus: string;
  ownerName: string;
  price: string;
  downPayment: string;
  amenities: string[];
  title: string;
  description: string;
}

export type ListingAction = {
  type: 'UPDATE_FIELD';
  field: keyof ListingState;
  value: any;
};