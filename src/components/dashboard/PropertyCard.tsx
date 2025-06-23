import { MoreHorizontal, MapPin, BedDouble, Bath, Ruler, User, Tag } from 'lucide-react';

interface PropertyCardProps {
    listing: {
        location: string;
        price: string | null;
        bedrooms: number | null;
        status: string;
        lastUpdated: string;
        agent: string;
        ref: string;
        qualityScore: number;
    }
}

const PropertyCard = ({ listing }: PropertyCardProps) => {
    return (
        <div className="bg-white border border-gray-200/80 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="relative h-40 bg-gray-200 flex items-center justify-center">
                {/* Placeholder for image */}
                <svg className="w-16 h-16 text-gray-300" viewBox="0 0 24 24" fill="currentColor"><path d="M20 18h2v2h-2v-2zm-2-2h2v2h-2v-2zm2-2h-2v2h2v-2zm-2-2h2v2h-2v-2zm-14 4h2v2H6v-2zm-2-2h2v2H4v-2zm2-2H4v2h2v-2zm-2-2h2v2H4v-2zM18 6h-2V4h-2v2h-2V4h-2v2h-2V4H8v2H6v12h12V6zM8 2h8v2H8V2z"/></svg>
                <button className="absolute top-2 right-2 p-1.5 bg-black/40 text-white rounded-full hover:bg-black/60">
                    <MoreHorizontal size={20} />
                </button>
            </div>
            <div className="p-4">
                <p className="flex items-center text-sm text-gray-600 truncate">
                    <MapPin size={14} className="mr-2 flex-shrink-0" />
                    {listing.location}
                </p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center"><BedDouble size={14} className="mr-1.5" />{listing.bedrooms || '-'}</span>
                    <span className="flex items-center"><Bath size={14} className="mr-1.5" />-</span>
                    <span className="flex items-center"><Ruler size={14} className="mr-1.5" />-</span>
                </div>
                <div className="mt-3">
                    <p className="font-bold text-gray-800">{listing.price || 'Price on Application'}</p>
                </div>
                <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
                    <span className="flex items-center"><User size={14} className="mr-1" />{listing.agent}</span>
                    <span>{listing.lastUpdated}</span>
                </div>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                     <Tag size={14} className="mr-1" />
                     <span>Ref: {listing.ref}</span>
                </div>
            </div>
            <div className="border-t border-gray-200/80 px-4 py-2 flex items-center">
                 <span className="text-sm font-semibold text-red-600">{listing.qualityScore}/100</span>
            </div>
        </div>
    );
};

export default PropertyCard;