import QualityScoreCircle from '../ui/QualityScoreCircle';
import ArchiveTableActionMenu from '../ui/ArchiveTableActionMenu';

const mockArchivedListings = [
  { ref: 'Sari1', category: 'Residential', offering: 'Rent', type: 'Villa', bedrooms: 12, area: null, location: 'Khalifa City, Abu Dhabi', qualityScore: 36, price: null, status: 'Offline' },
];

const tableHeaders = ["Listing Reference", "Category", "Offering", "Property Type", "Bedrooms", "Area", "Location", "Quality Score", "Price", "Status", "Last Updated", "Action"];

const ArchiveTable = () => {
  return (
    <div className="w-full bg-white border border-gray-200/80 rounded-lg overflow-visible">
      <table className="min-w-full w-full">
        <thead className="bg-gray-50/50">
          <tr className="border-b border-gray-200/80">
            {tableHeaders.map((header) => (
              <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 whitespace-nowrap">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {mockArchivedListings.map((listing, index) => (
            <tr key={index} className="border-b last:border-b-0 border-gray-200/80 hover:bg-gray-50/50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 hover:text-violet-700 cursor-pointer">{listing.ref}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{listing.category}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{listing.offering}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{listing.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{listing.bedrooms || '-'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{listing.area || '-'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{listing.location}</td>
              <td className="px-6 py-4 whitespace-nowrap"><div className="flex justify-start"><QualityScoreCircle score={listing.qualityScore} /></div></td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-medium">{listing.price || '-'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center"><span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-700">{listing.status}</span></td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">-</td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium overflow-visible">
                <ArchiveTableActionMenu />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArchiveTable;