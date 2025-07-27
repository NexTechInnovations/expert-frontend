import { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { formatNotificationDate } from '../../../utils/formatDate';
import { fetchNotifications, markAllNotificationsAsRead } from '../../../services/notificationService';
import type { Notification } from '../../../types';

const NotificationList = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalNotifications, setTotalNotifications] = useState(0);

    const loadNotifications = async (page: number = 1) => {
        try {
            setLoading(true);
            const response = await fetchNotifications(page, 10);
            setNotifications(response.data);
            setTotalPages(response.pagination.totalPages);
            setTotalNotifications(response.meta.total);
        } catch (error) {
            console.error('Error loading notifications:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadNotifications(currentPage);
    }, [currentPage]);

    const handleMarkAllAsRead = async () => {
        try {
            await markAllNotificationsAsRead();
            await loadNotifications(currentPage);
        } catch (error) {
            console.error('Error marking all notifications as read:', error);
        }
    };

    const handleRefresh = () => {
        loadNotifications(currentPage);
    };

    const getNotificationCategory = (notification: Notification): string => {
        const categoryMap: { [key: number]: string } = {
            14: 'Community Top Spot',
            20: 'Agent Verification',
            25: 'Agent Holiday Mode',
        };
        
        return categoryMap[notification.notificationTypeId] || 'General';
    };

    const getNotificationSubcategory = (notification: Notification): string => {
        const subcategoryMap: { [key: number]: string } = {
            14: 'CTS won',
            20: 'Verification approved',
            25: 'Upcoming agent holiday reminder',
        };
        
        return subcategoryMap[notification.notificationTypeId] || 'General';
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 "></div>
            </div>
        );
    }

    if (notifications.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center text-center py-16">
                <div className="w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="120" cy="120" r="120" fill="rgba(227,227,227,0.5)" transform="translate(-70 -70) scale(0.83)" />
                        <path d="M62.5 95V47.5L75 42.5V95H62.5Z" fill="#E5E7EB" />
                        <path d="M52.5 95V35L75 25V95H52.5Z" fill="#D1D5DB" />
                        <rect x="75" y="47.5" width="12.5" height="47.5" fill="#F3F4F6" />
                        <rect x="87.5" y="57.5" width="12.5" height="37.5" fill="#F3F4F6" />
                        <path d="M52.5 35L25 25V95H52.5V35Z" fill="#E5E7EB" />
                        <rect x="12.5" y="57.5" width="12.5" height="37.5" fill="#F3F4F6" />
                        <rect x="0" y="67.5" width="12.5" height="27.5" fill="#F3F4F6" />
                        <path d="M45 100H55V0H45V100Z" fill="white"/>
                    </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mt-6">You don't have any notifications yet.</h2>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {/* Action Buttons */}
            <div className="flex items-center gap-3">
                <button
                    onClick={handleMarkAllAsRead}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                    Mark all as read
                </button>
                <button
                    onClick={handleRefresh}
                    className="flex items-center justify-center w-10 h-10 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                    <RefreshCw size={16} />
                </button>
            </div>

            {/* Notifications List */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="divide-y divide-gray-200">
                    {notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className={cn(
                                "p-4 hover:bg-gray-50 transition-colors cursor-pointer",
                                // !notification.seenAt && "bg-blue-50"
                            )}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1 space-y-1">
                                    <p className="text-xs text-gray-500">
                                        {formatNotificationDate(notification.createdAt)} • {getNotificationCategory(notification)} • {getNotificationSubcategory(notification)}
                                    </p>
                                    <h3 className="font-bold text-gray-900">{notification.title}</h3>
                                    <p className="text-sm text-gray-600">{notification.body}</p>
                                </div>
                                {/* {!notification.seenAt && (
                                    <div className="w-2 h-2 bg-blue-500 rounded-full ml-4 mt-2"></div>
                                )} */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-3">
                    <div className="text-sm text-gray-600">
                        Showing {((currentPage - 1) * 10) + 1} to {Math.min(currentPage * 10, totalNotifications)} of {totalNotifications} notifications
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                            className={cn(
                                "flex items-center justify-center w-8 h-8 rounded border transition-colors",
                                currentPage === 1
                                    ? "border-gray-200 text-gray-400 cursor-not-allowed"
                                    : "border-gray-300 text-gray-600 hover:bg-gray-50"
                            )}
                        >
                            ←
                        </button>
                        
                        <span className="text-sm text-gray-600 px-2">
                            Page {currentPage} of {totalPages}
                        </span>
                        
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                            disabled={currentPage === totalPages}
                            className={cn(
                                "flex items-center justify-center w-8 h-8 rounded border transition-colors",
                                currentPage === totalPages
                                    ? "border-gray-200 text-gray-400 cursor-not-allowed"
                                    : "border-gray-300 text-gray-600 hover:bg-gray-50"
                            )}
                        >
                            →
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NotificationList;