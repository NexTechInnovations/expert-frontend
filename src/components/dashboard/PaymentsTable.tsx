import { Download } from 'lucide-react';

const payments = Array.from({ length: 12 }, (_, i) => ({
    paymentId: `116200-0${i + 1}`,
    contractId: '116200',
    frequency: 'Monthly',
    mode: 'Card',
    dueDate: new Date(2025, 4 + i, 30 + (i === 0 ? 1 : 0)).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
    status: i === 0 ? 'Payment Completed' : 'Payment Pending',
    amount: 231,
}));

const tableHeaders = ["Payment #", "Contract #", "Frequency", "Mode", "Due Date", "Status", "Amount (AED)", "Invoice", "Actions"];

const PaymentsTable = () => {
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
          {payments.map((payment, index) => (
            <tr key={index} className="border-b last:border-b-0 border-gray-200/80 hover:bg-gray-50/50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{payment.paymentId}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{payment.contractId}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{payment.frequency}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-md bg-white border border-[#5745a1] text-[#5745a1]">
                    {payment.mode}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{payment.dueDate}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{payment.status}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">{payment.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                <button className="p-2 rounded-md text-gray-500 hover:bg-gray-100"><Download size={18} /></button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsTable;