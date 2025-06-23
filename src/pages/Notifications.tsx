import { useState } from 'react';
import { cn } from '../lib/utils';
import NotificationsEmptyState from '../components/dashboard/notifications/NotificationsEmptyState';
import NotificationSettingsList from '../components/dashboard/notifications/NotificationSettingsList';

const Notifications = () => {
    const [activeTab, setActiveTab] = useState('notifications');

    return (
        <div className="flex flex-col h-full bg-gray-50">
            {/* Header Section */}
            <div className="p-4 sm:p-6 md:p-8 space-y-4 bg-gray-50 flex-shrink-0 z-10">
                <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        <button onClick={() => setActiveTab('notifications')} className={cn('whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm', activeTab === 'notifications' ? 'border-violet-500 text-violet-600' : 'border-transparent text-gray-500 hover:text-gray-700')}>
                            Notifications
                        </button>
                        <button onClick={() => setActiveTab('settings')} className={cn('whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm', activeTab === 'settings' ? 'border-violet-500 text-violet-600' : 'border-transparent text-gray-500 hover:text-gray-700')}>
                            Settings
                        </button>
                    </nav>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-4 sm:px-6 md:px-8 flex-grow overflow-y-auto pb-4">
                {activeTab === 'notifications' && <NotificationsEmptyState />}
                {activeTab === 'settings' && <NotificationSettingsList />}
            </div>
        </div>
    );
};

export default Notifications;