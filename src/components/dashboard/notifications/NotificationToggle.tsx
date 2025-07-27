import { useState, useEffect } from 'react';
import { CheckSquare, Settings } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { updateNotificationPreferences } from '../../../services/notificationService';

interface NotificationToggleProps {
    typeId: number;
    initialInApp?: boolean;
    initialEmail?: boolean;
    onUpdate?: (typeId: number, inApp: boolean, email: boolean) => void;
}

const NotificationToggle = ({ typeId, initialInApp = true, initialEmail = true, onUpdate }: NotificationToggleProps) => {
    const [inAppActive, setInAppActive] = useState(initialInApp);
    const [emailActive, setEmailActive] = useState(initialEmail);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setInAppActive(initialInApp);
        setEmailActive(initialEmail);
    }, [initialInApp, initialEmail]);

    const handleToggle = async (type: 'inApp' | 'email') => {
        try {
            setLoading(true);
            
            const newInApp = type === 'inApp' ? !inAppActive : inAppActive;
            const newEmail = type === 'email' ? !emailActive : emailActive;

            const updateData = {
                data: [{
                    typeId,
                    receiveInApp: newInApp,
                    receiveEmail: newEmail,
                    receiveSMS: false, // Default to false for now
                    receivePush: false  // Default to false for now
                }]
            };

            await updateNotificationPreferences(updateData);
            
            setInAppActive(newInApp);
            setEmailActive(newEmail);
            
            if (onUpdate) {
                onUpdate(typeId, newInApp, newEmail);
            }
        } catch (error) {
            console.error('Error updating notification preference:', error);
            // Revert the state on error
            if (type === 'inApp') {
                setInAppActive(inAppActive);
            } else {
                setEmailActive(emailActive);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center gap-2">
            <button 
                onClick={() => handleToggle('inApp')}
                disabled={loading}
                className="p-1 hover:bg-gray-100 rounded transition-colors disabled:opacity-50"
            >
                <CheckSquare 
                    size={18} 
                    className={cn(
                        "transition-colors", 
                        inAppActive ? 'text-violet-600' : 'text-gray-400'
                    )} 
                />
            </button>
            <button 
                onClick={() => handleToggle('email')}
                disabled={loading}
                className="p-1 hover:bg-gray-100 rounded transition-colors disabled:opacity-50"
            >
                <Settings 
                    size={18} 
                    className={cn(
                        "transition-colors", 
                        emailActive ? 'text-violet-600' : 'text-gray-400'
                    )} 
                />
            </button>
        </div>
    );
};

export default NotificationToggle;