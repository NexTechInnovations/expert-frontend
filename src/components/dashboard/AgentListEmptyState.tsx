const AgentListEmptyState = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-24">
            <div className="w-40 h-40 relative">
                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 240 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="120" cy="120" r="120" fill="#F3F4F6" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                        width="140"
                        height="140"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M62.5 95V47.5L75 42.5V95H62.5Z" fill="#D1D5DB" />
                        <path d="M52.5 95V35L75 25V95H52.5Z" fill="#9CA3AF" />
                        <rect x="75" y="47.5" width="12.5" height="47.5" fill="#E5E7EB" />
                        <rect x="87.5" y="57.5" width="12.5" height="37.5" fill="#E5E7EB" />
                        <path d="M52.5 35L25 25V95H52.5V35Z" fill="#D1D5DB" />
                        <rect x="12.5" y="57.5" width="12.5" height="37.5" fill="#E5E7EB" />
                        <rect x="0" y="67.5" width="12.5" height="27.5" fill="#E5E7EB" />
                    </svg>
                </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-6">
                Your agents' list will be here
            </h2>
            <p className="text-sm text-gray-500 mt-2">
                You can add your first users, and they will be here.
            </p>
        </div>
    );
};

export default AgentListEmptyState;