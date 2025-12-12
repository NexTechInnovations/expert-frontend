import { useState } from 'react';
import AuthLayout from '../layouts/AuthLayout';
import EmailStep from '../components/dashboard/auth/EmailStep';
import PasswordStep from '../components/dashboard/auth/PasswordStep';
import GoogleLoginButton from '../components/dashboard/auth/GoogleLoginButton';

const LoginPage = () => {
    const [step, setStep] = useState<'email' | 'password'>('email');
    const [email, setEmail] = useState('');

    const handleEmailSubmit = (submittedEmail: string) => {
        setEmail(submittedEmail);
        setStep('password');
    };

    const handleBack = () => {
        setStep('email');
    };

    return (
        <AuthLayout>
            {step === 'email' ? (
                <div className="space-y-4">
                    <EmailStep onNext={handleEmailSubmit} />
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or continue with</span>
                        </div>
                    </div>
                    <GoogleLoginButton />
                </div>
            ) : (
                <PasswordStep email={email} onBack={handleBack} />
            )}
        </AuthLayout>
    );
};

export default LoginPage;