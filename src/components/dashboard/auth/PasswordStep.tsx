import { ArrowLeft } from 'lucide-react';

interface PasswordStepProps {
  email: string;
  onBack: () => void;
}

const PasswordStep = ({ email, onBack }: PasswordStepProps) => {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">Enter password</h2>
            </div>
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" value={email} className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500" readOnly />
                </div>
                <div>
                    <div className="flex justify-between items-center mb-1">
                         <label className="block text-sm font-medium text-gray-700">Password</label>
                         <a href="#" className="text-sm text-violet-600 hover:underline">Forgot Password</a>
                    </div>
                    <input type="password" className="w-full p-3 border border-gray-300 rounded-lg" required />
                </div>
                <div className="flex items-center gap-4 pt-2">
                    <button type="button" onClick={onBack} className="p-3 text-gray-600 hover:text-gray-900"><ArrowLeft /></button>
                    <button type="submit" className="w-full bg-red-500 text-white font-semibold py-3 rounded-lg">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PasswordStep;