import { notificationSettingsData } from '../../../data/notificationSettingsData';
import NotificationToggle from './NotificationToggle';

const NotificationSettingsList = () => {
    return (
        <div className="space-y-8">
            {notificationSettingsData.map(section => (
                <div key={section.category} className="bg-white border border-gray-200/80 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-800">{section.category}</h3>
                    <div className="mt-2 divide-y divide-gray-200/80">
                        {section.settings.map(setting => (
                            <div key={setting.label} className="flex justify-between items-center py-3">
                                <span className="text-sm text-gray-600">{setting.label}</span>
                                <NotificationToggle />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NotificationSettingsList;