import axios from 'axios';
import type { DevelopersResponse } from '../types';

export const fetchDevelopers = async (): Promise<DevelopersResponse> => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/developers/developers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching developers:', error);
    throw new Error('Failed to fetch developers');
  }
}; 