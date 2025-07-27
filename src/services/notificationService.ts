import axios from 'axios';
import type { 
  NotificationsResponse, 
  NotificationPreferencesResponse,
  UpdateNotificationPreferenceRequest,
  UpdateNotificationPreferenceResponse
} from '../types';

/**
 * جلب الإشعارات مع إمكانية الصفحات
 * @param page - رقم الصفحة
 * @param perPage - عدد العناصر في الصفحة
 * @returns بيانات الإشعارات مع معلومات الصفحات
 */
export const fetchNotifications = async (
  page: number = 1,
  perPage: number = 10
): Promise<NotificationsResponse> => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/notifications?page=${page}&perPage=${perPage}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw new Error('Failed to fetch notifications');
  }
};

/**
 * تحديث حالة الإشعار إلى مقروء
 * @param notificationId - معرف الإشعار
 * @returns نجح التحديث أم لا
 */
export const markNotificationAsRead = async (notificationId: string): Promise<boolean> => {
  try {
    await axios.patch(
      `${import.meta.env.VITE_BASE_URL}/api/notifications/${notificationId}/read`
    );
    return true;
  } catch (error) {
    console.error('Error marking notification as read:', error);
    throw new Error('Failed to mark notification as read');
  }
};

/**
 * تحديث جميع الإشعارات إلى مقروءة
 * @returns نجح التحديث أم لا
 */
export const markAllNotificationsAsRead = async (): Promise<boolean> => {
  try {
    await axios.patch(`${import.meta.env.VITE_BASE_URL}/api/notifications/mark-all-read`);
    return true;
  } catch (error) {
    console.error('Error marking all notifications as read:', error);
    throw new Error('Failed to mark all notifications as read');
  }
};

/**
 * جلب إعدادات الإشعارات للمستخدم
 * @returns إعدادات الإشعارات
 */
export const fetchNotificationPreferences = async (): Promise<NotificationPreferencesResponse> => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/notification-preferences/my-preferences`);
    return response.data;
  } catch (error) {
    console.error('Error fetching notification preferences:', error);
    throw new Error('Failed to fetch notification preferences');
  }
};

/**
 * تحديث إعدادات الإشعارات
 * @param preferences - إعدادات الإشعارات المحدثة
 * @returns نتيجة التحديث
 */
export const updateNotificationPreferences = async (
  preferences: UpdateNotificationPreferenceRequest
): Promise<UpdateNotificationPreferenceResponse> => {
  try {
    const response = await axios.patch(`${import.meta.env.VITE_BASE_URL}/api/notification-preferences`, preferences);
    return response.data;
  } catch (error) {
    console.error('Error updating notification preferences:', error);
    throw new Error('Failed to update notification preferences');
  }
}; 