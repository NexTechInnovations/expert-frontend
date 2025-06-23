import QualityScoreCircle from '../ui/QualityScoreCircle';
import ActionMenu from '../ui/ActionMenu';
import { FileText } from 'lucide-react';

const mockListings = [
  { ref: '5', category: 'Residential', offering: 'Sale', type: 'Villa', bedrooms: null, area: null, location: 'Nad Al Dhabi, Al Jubail island, Abu Dhabi', qualityScore: 29, price: '899,999 AED', status: 'Offline', lastUpdated: '21 hours ago' },
  { ref: 'Sari1', category: 'Residential', offering: 'Rent', type: 'Villa', bedrooms: 12, area: null, location: 'Khalifa City, Abu Dhabi', qualityScore: 36, price: null, status: 'Offline', lastUpdated: '10 days ago' },
];

const tableHeaders = ["Listing Reference", "Category", "Offering", "Property Type", "Bedrooms", "Area", "Location", "Quality Score", "Price", "Status", "Last Updated", "Action"];

const ListingsTable = () => {
  return (
    // THE FIX: Added overflow-y-visible to allow the dropdown to appear on top
    <div className="w-full bg-white border border-gray-200/80 rounded-lg overflow-x-auto overflow-y-visible scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thumb-rounded-full">
      <table className="min-w-full w-full">
        <thead className="bg-gray-50/50">
          <tr className="border-b border-gray-200/80">
            <th scope="col" className="w-12 px-4 py-3">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500" />
            </th>
            {tableHeaders.map((header) => (
              <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 whitespace-nowrap">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {mockListings.map((listing, index) => (
            <tr key={index} className="border-b last:border-b-0 border-gray-200/80 hover:bg-gray-50/50">
              <td className="px-4 py-4">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 hover:text-violet-700 cursor-pointer">
                <span className="flex items-center gap-2">
                    <FileText size={16} className="text-gray-400 lg:hidden" />
                    {listing.ref}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{listing.category}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{listing.offering}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{listing.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{listing.bedrooms || '-'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{listing.area || '-'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{listing.location}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex justify-start"><QualityScoreCircle score={listing.qualityScore} /></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-medium">{listing.price || '-'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-700">{listing.status}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{listing.lastUpdated}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                <ActionMenu />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListingsTable;