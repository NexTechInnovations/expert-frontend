const LeadsEmptyState = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-16">
            <div className="w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="120" cy="120" r="120" fill="rgba(227,227,227,0.5)" transform="translate(-70 -70) scale(0.83)" />
                    <path d="M62.5 95V47.5L75 42.5V95H62.5Z" fill="#E5E7EB" />
                    <path d="M52.5 95V35L75 25V95H52.5Z" fill="#D1D5DB" />
                    <rect x="75" y="47.5" width="12.5" height="47.5" fill="#F3F4F6" />
                    <rect x="87.5" y="57.5" width="12.5" height="37.5" fill="#F3F4F6" />
                    <path d="M52.5 35L25 25V95H52.5V35Z" fill="#E5E7EB" />
                    <rect x="12.5" y="57.5" width="12.5" height="37.5" fill="#F3F4F6" />
                    <rect x="0" y="67.5" width="12.5" height="27.5" fill="#F3F4F6" />
                    <path d="M45 100H55V0H45V100Z" fill="white"/>
                </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-6">Your leads live here</h2>
            <p className="text-sm text-gray-500 mt-2">Your first leads from your listings will be here.</p>
        </div>
    );
};

export default LeadsEmptyState;