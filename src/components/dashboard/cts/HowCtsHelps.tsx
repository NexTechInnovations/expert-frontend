const FeatureCard = ({ title, description }: { title: string, description: string }) => (
    <div className="bg-white border border-gray-200/80 rounded-lg p-6">
        <h4 className="font-bold text-gray-800">{title}</h4>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
);

const HowCtsHelps = () => {
    return (
        <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">How CTS helps you standout</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left Side: Image */}
                <div className="relative pb-16 pr-16 lg:pb-0 lg:pr-0">
                    <img 
                        src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071"
                        alt="Living Room"
                        className="rounded-lg shadow-lg w-full"
                    />
                    <div className="absolute -bottom-0 -right-0 lg:-bottom-8 lg:-right-8 w-40 h-40 bg-violet-800 rounded-full flex flex-col items-center justify-center text-white shadow-xl">
                        <span className="text-4xl font-bold">x30</span>
                        <span className="text-lg">Leads</span>
                        <span className="text-xs mt-1 text-violet-300 text-center leading-tight">as compared to a Premium listing</span>
                    </div>
                </div>
                {/* Right Side: Features */}
                <div className="space-y-6">
                    <FeatureCard
                        title="Rotate your high priority listings"
                        description="Prioritize and promote as many listings as you need to the top search result within the same community"
                    />
                    <FeatureCard
                        title="Get 10-30x* more leads vs Premium"
                        description="Drive the highest number of impressions to your listing, getting more leads than any other exposure product."
                    />
                    <FeatureCard
                        title="Set & Forget: Max ROI"
                        description="Guaranteed top search spot for any listing you choose (including standard) for 3 full months."
                    />
                </div>
            </div>
             <div className="mt-16 bg-white border border-gray-200/80 rounded-lg p-6">
                <h4 className="font-bold text-gray-800">Be seen as a market leader</h4>
                <p className="mt-1 text-sm text-gray-500">Showcase your brand at the top of search results with 3x larger listings and unmatched visibility.</p>
            </div>
        </div>
    );
};

export default HowCtsHelps;