import { ShieldCheck, Mail } from 'lucide-react';
import { useState } from 'react';
import ToggleButton from '../ToggleButton';

const AuthMethod = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
            {icon}
            <div>
                <h4 className="font-bold text-gray-800">{title}</h4>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
        </div>
        <button className="text-sm bg-white border border-gray-300 text-gray-700 font-semibold py-1.5 px-4 rounded-md hover:bg-gray-50">
            Set up
        </button>
    </div>
);


const TwoFactorAuthCard = () => {
    const [isMandatory, setIsMandatory] = useState(false);

    return (
        <div className="space-y-8 max-w-4xl">
            {/* My Company Section */}
            <div className="bg-white border border-gray-200/80 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-800">2-Factor Authentication (My Company)</h2>
                <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-gray-600">Enable mandatory 2FA for all users in my company.</p>
                    <ToggleButton isOn={isMandatory} handleToggle={() => setIsMandatory(!isMandatory)} />
                </div>
            </div>

            {/* Personal Section */}
            <div className="bg-white border border-gray-200/80 rounded-lg p-6">
                 <h2 className="text-xl font-bold text-gray-800">2-Factor Authentication</h2>
                 <p className="mt-1 text-sm text-gray-500">
                    2-factor authentication adds an extra layer of security to your account.
                </p>
                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                    <h3 className="text-md font-bold text-gray-800">2-factor authentication methods</h3>
                    <div className="divide-y divide-gray-200">
                        <AuthMethod 
                            icon={<ShieldCheck size={24} className="text-violet-600" />}
                            title="Authenticator App"
                            description="Use an authenticator app to get the OTP code"
                        />
                        <AuthMethod 
                            icon={<Mail size={24} className="text-violet-600" />}
                            title="Email & SMS"
                            description="Use your email and SMS to get the OTP code"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoFactorAuthCard;