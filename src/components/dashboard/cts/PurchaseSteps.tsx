import { Lightbulb } from 'lucide-react';

const Step = ({ num, title, description, children }: { num: number, title: string, description: string, children?: React.ReactNode }) => (
    <div className="relative pl-10">
        <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 bg-violet-600 text-white font-bold text-sm rounded-full">
            {num}
        </div>
        <h4 className="font-bold text-gray-800">{title}</h4>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
        {children}
    </div>
);

const PurchaseSteps = () => {
    return (
        <div className="mt-8 bg-white border border-gray-200/80 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-8">How to purchase CTS?</h3>
            <div className="relative space-y-10">
                {/* Dotted line */}
                <div className="absolute left-3 top-2 bottom-2 w-0.5 border-l-2 border-dotted border-gray-300"></div>

                <Step num={1} title="Planning Phase" description="One week before the booking window opens, you’ll receive a notification to start planning your offer.">
                    <button className="mt-4 bg-red-600 text-white font-semibold py-2 px-4 rounded-md text-sm hover:bg-red-700">View availability list</button>
                </Step>

                <Step num={2} title="Booking Window" description="Once the booking window opens, you’ll have 3 days to submit your offer.">
                    <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                        <div className="flex">
                            <div className="flex-shrink-0"><Lightbulb className="h-5 w-5 text-yellow-500" /></div>
                            <div className="ml-3"><p className="text-sm text-yellow-800"><strong>Tip:</strong> Set an auto offer to increase your chances of making the winning offer.</p></div>
                        </div>
                    </div>
                </Step>
                
                <Step num={3} title="Winner Announcement" description="At 5:30 pm on the third day, the winning (highest) offer is announced, and the winner is notified by email." />
                
                <Step num={4} title="Payment Process" description="After the announcement, your Business Consultant will contact you to assist with the payment process, which must be completed within 24 hours." />
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200 flex items-center justify-center gap-8">
                <button className="text-sm font-semibold text-violet-600 hover:underline">Send your feedback</button>
                <button className="text-sm font-semibold text-violet-600 hover:underline">FAQ</button>
            </div>
        </div>
    );
};

export default PurchaseSteps;