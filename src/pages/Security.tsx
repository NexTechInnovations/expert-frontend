import TwoFactorAuthCard from "../components/dashboard/security/TwoFactorAuthCard";

const Security = () => {
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-8">Security</h1>
            <TwoFactorAuthCard />
        </div>
    );
};

export default Security;