const mockHistory = [
  { user: 'System', date: '31 May, 2025, 04:37 pm', credits: '+69', balance: 169, description: 'Credit addition' },
  { user: 'System', date: '31 May, 2025, 04:37 pm', credits: '+100', balance: 100, description: 'Credit addition' },
];

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FEE2E2"/>
    <path d="M16.5 18C16.5 15.5147 14.4853 13.5 12 13.5C9.51472 13.5 7.5 15.5147 7.5 18" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="10" r="2.25" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);


const UsageHistoryCards = () => {
    return (
        <div className="space-y-4">
            {mockHistory.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200/80 rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <UserIcon />
                            <div>
                                <p className="font-semibold text-gray-800 text-sm">{item.user}</p>
                                <p className="text-xs text-gray-500">{item.date}</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-200/80"></div>
                     <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-800">{item.description}</p>
                        <p className="text-lg font-bold text-green-600">{item.credits}</p>
                    </div>
                    <div className="border-b border-gray-200/80"></div>
                     <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">Credit Balance</p>
                        <p className="text-sm font-medium text-gray-800">{item.balance}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UsageHistoryCards;