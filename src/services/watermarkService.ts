import axios from 'axios';
import type { WatermarkResponse, Watermark } from '../types';

/**
 * جلب إعدادات الـ watermark للعميل
 * @param clientId - معرف العميل
 * @returns بيانات الـ watermark
 */
export const fetchWatermark = async (clientId: string): Promise<WatermarkResponse> => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/watermarks/${clientId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching watermark:', error);
    throw new Error('Failed to fetch watermark');
  }
};

/**
 * تحديث إعدادات الـ watermark
 * @param clientId - معرف العميل
 * @param watermarkData - بيانات الـ watermark المحدثة
 * @returns نتيجة التحديث
 */
export const updateWatermark = async (
  clientId: string,
  watermarkData: Partial<Watermark>
): Promise<WatermarkResponse> => {
  try {
    const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/watermarks/${clientId}`, watermarkData);
    return response.data;
  } catch (error) {
    console.error('Error updating watermark:', error);
    throw new Error('Failed to update watermark');
  }
};

/**
 * إضافة أو تحديث إعدادات الـ watermark
 * @param clientId - معرف العميل
 * @param applyData - بيانات الـ watermark مع إعدادات التطبيق
 * @returns نتيجة التطبيق
 */
export const applyWatermark = async (
  clientId: string,
  applyData: {
    isDisabled: boolean;
    applyToExistingImages: boolean;
    watermark: {
      text?: {
        fontRatio: number;
        fontFamily: string;
        text: string;
      };
      image?: {
        url: string;
      };
      opacity: number;
      ratio: number;
      position: string;
      type: 'text' | 'image';
    };
  }
): Promise<WatermarkResponse> => {
  try {
    const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/watermarks/${clientId}`, applyData);
    return response.data;
  } catch (error) {
    console.error('Error applying watermark:', error);
    throw new Error('Failed to apply watermark');
  }
};

/**
 * حذف الـ watermark
 * @param clientId - معرف العميل
 * @returns نجح الحذف أم لا
 */
export const deleteWatermark = async (clientId: string): Promise<boolean> => {
  try {
    await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/watermarks/${clientId}`);
    return true;
  } catch (error) {
    console.error('Error deleting watermark:', error);
    throw new Error('Failed to delete watermark');
  }
}; 