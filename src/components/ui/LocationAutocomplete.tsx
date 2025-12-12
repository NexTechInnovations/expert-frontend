import axios from 'axios';
import AsyncSelect from 'react-select/async';
import type { SelectOption } from '../../types';
import { useAuth } from '../../context/AuthContext';

interface LocationAutocompleteProps {
    value: SelectOption | null;
    onChange: (value: SelectOption | null) => void;
}

const LocationAutocomplete = ({ value, onChange }: LocationAutocompleteProps) => {
    const { token } = useAuth();

    const loadOptions = (
        inputValue: string,
        callback: (options: SelectOption[]) => void
    ) => {
        if (!inputValue || inputValue.length < 2) {
            callback([]);
            return;
        }

        // استخدام setTimeout لتأخير الطلب (debounce)
        setTimeout(async () => {
            try {
                const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:4000';
                console.log(`Fetching locations from: ${baseUrl}/api/location-tree/search/autocomplete?keyword=${inputValue}&limit_by_city=50`);
                
                const headers: Record<string, string> = {};
                if (token) {
                    headers['Authorization'] = `Bearer ${token}`;
                }
                
                const response = await axios.get(
                    `${baseUrl}/api/location-tree/search/autocomplete?keyword=${inputValue}&limit_by_city=50`,
                    { headers }
                );

                console.log('Location API response:', response.data);

                if (!response.data || !response.data.data) {
                    console.warn("Location API returned unexpected structure:", response.data);
                    callback([]);
                    return;
                }

                const options = response.data.data.map((loc: { id: number; title: string }) => ({
                    value: loc.id,
                    label: loc.title,
                }));
                console.log('Mapped location options:', options);
                callback(options);
            } catch (error: unknown) {
                const err = error as { response?: { data?: unknown }; message?: string };
                console.error("Failed to fetch locations:", error);
                console.error("Error details:", err.response?.data || err.message);
                callback([]);
            }
        }, 300); // تأخير 300ms
    };

    const handleChange = (selectedOptions: SelectOption | null) => {
        onChange(selectedOptions || null);
    };

    return (
        <AsyncSelect
            isMulti={false}
            cacheOptions
            loadOptions={loadOptions}
            defaultOptions={false}
            value={value}
            onChange={handleChange}
            placeholder="Search and select locations..."
            className="react-select-container"
            classNamePrefix="react-select"
            noOptionsMessage={({ inputValue }) => 
                inputValue.length < 2 
                    ? "Type at least 2 characters to search" 
                    : "No locations found"
            }
            loadingMessage={() => "Searching locations..."}
            styles={{
                control: (base) => ({
                    ...base,
                    minHeight: '42px',
                    borderColor: '#d1d5db',
                    '&:hover': {
                        borderColor: '#9ca3af',
                    },
                }),
                option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isSelected
                        ? '#8b5cf6'
                        : state.isFocused
                        ? '#f3f4f6'
                        : 'white',
                    color: state.isSelected ? 'white' : '#374151',
                }),
            }}
        />
    );
};

export default LocationAutocomplete;