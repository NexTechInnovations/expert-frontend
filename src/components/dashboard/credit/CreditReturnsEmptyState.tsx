const CreditReturnsEmptyState = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-16">
            <div className="w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                 {/* This is a simplified SVG placeholder. Creating the exact illustration is complex. */}
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M85 45L50 25L15 45V85H35V65H65V85H85V45Z" fill="#E5E7EB"/>
                    <path d="M90 40L50 15L10 40" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="60" cy="30" r="5" fill="#D1D5DB"/>
                    <circle cx="70" cy="25" r="7" fill="#D1D5DB"/>
                </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-6">Eligible listings will appear here</h2>
            <p className="text-sm text-gray-500 mt-2 max-w-md">
                There are no listings eligible for credit return at the moment. When they become available, they will be displayed here.
            </p>
        </div>
    );
};

export default CreditReturnsEmptyState;