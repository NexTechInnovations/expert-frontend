import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HowItWorksCard = () => (
    <div className="bg-white border border-gray-200/80 rounded-lg p-6 space-y-4 w-full lg:w-96">
        <h3 className="font-bold text-gray-800">How it works?</h3>
        <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2">
            <li>Send a request to our team.</li>
            <li>Our team will review your request.</li>
            <li>Email with your Statement of Account will be sent in 3-4 business days.</li>
        </ol>
    </div>
);

const RequestStatementForm = () => (
    <div className="bg-white border border-gray-200/80 rounded-lg p-6 flex-grow">
        <h3 className="font-bold text-gray-800">Initiate a request</h3>
        <div className="mt-6 space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Enter an email address you would like us to send the Statement of Account.
                </label>
                <input 
                    type="email"
                    placeholder="Enter email address"
                    className="w-full lg:max-w-md p-2.5 border border-gray-300 rounded-lg text-sm"
                />
            </div>
            <button className="bg-red-600 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-red-700">
                Send request
            </button>
        </div>
    </div>
);


const RequestStatement = () => {
    const navigate = useNavigate();

    return (
        <div className="p-4 sm:p-6 md:p-8 space-y-6">
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900">
                <ArrowLeft size={16} />
                Back
            </button>

            <h1 className="text-2xl font-bold text-gray-800">Request statement</h1>
            <p className="text-sm text-gray-600">
                Initiate a request for your statement of account and receive it directly in your inbox.
            </p>

            <div className="flex flex-col lg:flex-row gap-8 items-start pt-4">
                <RequestStatementForm />
                <HowItWorksCard />
            </div>
        </div>
    );
};

export default RequestStatement;