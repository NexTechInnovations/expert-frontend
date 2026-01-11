import { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown, User as UserIcon, Briefcase, Gem, LogOut } from 'lucide-react';
import { useAuth, useLogout } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const navigate = useNavigate();

    const containerRef = useRef<HTMLDivElement>(null);
    const { user } = useAuth(); // جلب بيانات المستخدم
    const logout = useLogout();

    console.log('Sidebar user data:', user);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [containerRef]);

    const handleLogout = async () => {
        setIsLoggingOut(true);
        try {
            await logout();
        } catch (error) {
            console.error("Logout failed", error);
            alert("Could not log out. Please try again.");
            setIsLoggingOut(false);
        }
    };

    return (
        <div ref={containerRef} className="px-4 py-4 relative">
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex w-full items-center justify-between p-3 hover:bg-gray-50 focus:outline-none transition-colors"
                >
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 overflow-hidden shrink-0 border border-gray-100">
                            {user?.profilePhotoUrl ? (
                                <img src={user.profilePhotoUrl} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <UserIcon size={20} />
                            )}
                        </div>
                        <div className="text-left overflow-hidden">
                            <p className="font-semibold text-[13px] text-gray-800 truncate">{user?.firstName} {user?.lastName}</p>
                            <p className="text-[10px] font-bold text-gray-400 tracking-wider">
                                {user?.legacyRole?.replace(/_/g, ' ').toUpperCase() || 'AGENT'}
                            </p>
                        </div>
                    </div>
                    <ChevronDown size={14} className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                    <div className="border-t border-gray-100">
                        <div className="py-1 bg-white">
                            <button
                                onClick={() => {
                                    navigate(`/users/${user?.id}`);
                                    setIsOpen(false);
                                }}
                                className="group flex w-full items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                <UserIcon className="mr-3 h-5 w-5 text-gray-400" />
                                <span className="font-medium text-gray-700">User Profile</span>
                            </button>
                            <button
                                onClick={() => {
                                    navigate('/company-profile');
                                    setIsOpen(false);
                                }}
                                className="group flex w-full items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                <Briefcase className="mr-3 h-5 w-5 text-gray-400" />
                                <span className="font-medium text-gray-700">Company Profile</span>
                            </button>
                            <a href="#" className="group flex w-full items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                                <Gem className="mr-3 h-5 w-5 text-gray-400" />
                                <span className="font-medium text-gray-700">PF Partner Program</span>
                            </a>
                            <div className="border-t border-gray-100" />
                            <button
                                onClick={handleLogout}
                                disabled={isLoggingOut}
                                className="group flex w-full items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
                            >
                                <LogOut className="mr-3 h-5 w-5 text-gray-400 rotate-180" />
                                <span className="font-medium text-gray-700">{isLoggingOut ? 'Logging out...' : 'Logout'}</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserProfile;