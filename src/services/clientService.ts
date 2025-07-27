import axios from 'axios';

export interface ClientData {
  id: number;
  accountNumber: number;
  descriptionEn: string;
  descriptionAr: string;
  name: string;
  email: string;
  phone: string;
  fax: string | null;
  vat: string | null;
  vatStatus: string | null;
  vatDocument: string | null;
  status: string;
  crmId: string | null;
  clientType: string;
  creditLimitType: string;
  creditsEnabled: boolean;
  segments: Array<{
    id: number;
    type: string;
    name: string;
  }>;
  segment: string;
  licenseNumber: string;
  licenseExpiryDate: string;
  broker: {
    id: number;
    name: string;
    email: string;
    phone: string;
    fax: string;
    url: string;
    reraNumber: string;
    reraExpiryDate: string;
    address: string;
    logoToken: string | null;
    logoCdnPath: string | null;
    logoVariants: string | null;
  };
  parentId: number | null;
  isMainBranch: boolean;
  location: {
    id: number;
    namePrimary: string;
    nameSecondary: string;
  };
  accountManager: {
    email: string;
  };
  subscription: unknown | null;
  starRating: number | null;
  exclusivityType: string | null;
  allowWhatsAppContact: boolean;
  isWhatsAppInsights: boolean;
  isExclusive: boolean;
}

/**
 * جلب بيانات العميل بواسطة ID
 * @param clientId - معرف العميل
 * @returns بيانات العميل
 */
export const fetchClientById = async (clientId: number): Promise<ClientData> => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/clients/${clientId}`);
    console.log('API Response:', response.data);
    // البيانات الفعلية موجودة في response.data.data
    return response.data.data;
  } catch (error) {
    console.error('Error fetching client data:', error);
    throw new Error('Failed to fetch client data');
  }
};

/**
 * جلب قائمة العملاء مع إمكانية التصفية
 * @param filters - معايير التصفية (اختياري)
 * @returns قائمة العملاء
 */
export const fetchClients = async (filters?: {
  search?: string;
  clientType?: string;
  city?: string;
  status?: string;
}): Promise<{ data: ClientData[]; pagination?: { page: number; limit: number; total: number; totalPages: number } }> => {
  try {
    const params = new URLSearchParams();
    
    if (filters?.search) params.append('search', filters.search);
    if (filters?.clientType) params.append('clientType', filters.clientType);
    if (filters?.city) params.append('city', filters.city);
    if (filters?.status) params.append('status', filters.status);

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/clients?${params.toString()}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching clients:', error);
    throw new Error('Failed to fetch clients');
  }
};

/**
 * تحديث بيانات العميل
 * @param clientId - معرف العميل
 * @param updateData - البيانات المحدثة
 * @returns بيانات العميل المحدثة
 */
export const updateClient = async (clientId: number, updateData: Partial<ClientData>): Promise<ClientData> => {
  try {
    const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/clients/${clientId}`, updateData);
    return response.data;
  } catch (error) {
    console.error('Error updating client:', error);
    throw new Error('Failed to update client');
  }
};

/**
 * إنشاء عميل جديد
 * @param clientData - بيانات العميل الجديد
 * @returns بيانات العميل المنشأ
 */
export const createClient = async (clientData: Omit<ClientData, 'id'>): Promise<ClientData> => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/clients`, clientData);
    return response.data;
  } catch (error) {
    console.error('Error creating client:', error);
    throw new Error('Failed to create client');
  }
};

/**
 * حذف عميل
 * @param clientId - معرف العميل
 * @returns نجاح العملية
 */
export const deleteClient = async (clientId: number): Promise<boolean> => {
  try {
    await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/clients/${clientId}`);
    return true;
  } catch (error) {
    console.error('Error deleting client:', error);
    throw new Error('Failed to delete client');
  }
}; 