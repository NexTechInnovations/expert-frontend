
const mockContracts = [
  {
    contractNumber: '116200',
    products: ['Flex Credits', 'Bonus Credits'],
    duration: '30 May, 2025 - 30 May, 2026',
    price: {
      gross: '2,640',
      discount: '0',
      total: '2,772'
    },
    paymentMode: 'Credit/Debit Card',
    signedBy: 'Saif',
    status: 'Active'
  }
];

const tableHeaders = ["Contract # / Product", "Contract Duration", "Contract Price", "Payment Mode", "Signed By", "Status", "Actions"];

const ContractsTable = () => {
  return (
    <div className="w-full bg-white border border-gray-200/80 rounded-lg overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thumb-rounded-full">
      <table className="min-w-full w-full">
        <thead className="bg-gray-50/50">
          <tr className="border-b border-gray-200/80">
            {tableHeaders.map((header) => (
              <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 whitespace-nowrap">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {mockContracts.map((contract, index) => (
            <tr key={index} className="border-b last:border-b-0 border-gray-200/80 hover:bg-gray-50/50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 align-top">
                <div className="flex flex-col">
                  <span>{contract.contractNumber}</span>
                  {contract.products.map(product => (
                    <span key={product} className="font-bold text-gray-800">{product}</span>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 align-top">{contract.duration}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 align-top">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between"><span className="text-xs text-gray-500">Gross Amount (AED)</span><span>{contract.price.gross}</span></div>
                  <div className="flex justify-between"><span className="text-xs text-gray-500">Discount %</span><span>{contract.price.discount}</span></div>
                  <div className="flex justify-between"><span className="text-xs text-gray-500 font-bold">Total Amount (AED)</span><span className="font-bold text-gray-800">{contract.price.total}</span></div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 align-top">{contract.paymentMode}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 align-top">{contract.signedBy}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center align-top">
                <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {contract.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium align-top">
                 <button className="bg-white border border-gray-300 text-gray-700 font-semibold py-1 px-4 rounded-md text-sm hover:bg-gray-100">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContractsTable;