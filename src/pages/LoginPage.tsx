import { useState } from 'react';
import AuthLayout from '../layouts/AuthLayout';
import EmailStep from '../components/dashboard/auth/EmailStep';
import PasswordStep from '../components/dashboard/auth/PasswordStep';

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
                <EmailStep onNext={handleEmailSubmit} />
            ) : (
                <PasswordStep email={email} onBack={handleBack} />
            )}
        </AuthLayout>
    );
};

export default LoginPage;