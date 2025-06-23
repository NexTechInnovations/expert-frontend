import { useState } from 'react';
import { Bell, ShieldCheck } from 'lucide-react';
import { cn } from '../../../lib/utils';

const NotificationToggle = () => {
    const [bellActive, setBellActive] = useState(true);
    const [shieldActive, setShieldActive] = useState(true);

    return (
        <div className="flex items-center gap-3">
            <button onClick={() => setBellActive(!bellActive)}>
                <Bell size={20} className={cn("transition-colors", bellActive ? 'text-violet-600' : 'text-gray-400')} />
            </button>
            <button onClick={() => setShieldActive(!shieldActive)}>
                <ShieldCheck size={20} className={cn("transition-colors", shieldActive ? 'text-violet-600' : 'text-gray-400')} />
            </button>
        </div>
    );
};

export default NotificationToggle;