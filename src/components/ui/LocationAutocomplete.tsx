import axios from 'axios';
import AsyncSelect from 'react-select/async';
import type { SelectOption } from '../../types';

interface LocationAutocompleteProps {
    value: SelectOption | null;
    onChange: (value: SelectOption | null) => void;
}

const LocationAutocomplete = ({ value, onChange }: LocationAutocompleteProps) => {

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
                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/api/location-tree/search/autocomplete?keyword=${inputValue}&limit_by_city=50`
                );
                
                // Check if response has data
                if (response.data && response.data.data) {
                    const options = response.data.data.map((loc: { id: number; title: string }) => ({
                        value: loc.id,
                        label: loc.title,
                    }));
                    callback(options);
                } else {
                    // Fallback to static locations if API returns no data
                    const staticLocations = [
                        { value: 1, label: "Dubai" },
                        { value: 2, label: "Abu Dhabi" },
                        { value: 3, label: "Sharjah" },
                        { value: 4, label: "Ajman" },
                        { value: 5, label: "Fujairah" },
                        { value: 6, label: "Ras Al Khaimah" },
                        { value: 7, label: "Umm Al Quwain" }
                    ].filter(loc => loc.label.toLowerCase().includes(inputValue.toLowerCase()));
                    callback(staticLocations);
                }
            } catch (error) {
                console.error("Failed to fetch locations", error);
                // Fallback to static locations if API fails
                const staticLocations = [
                    { value: 1, label: "Dubai" },
                    { value: 2, label: "Abu Dhabi" },
                    { value: 3, label: "Sharjah" },
                    { value: 4, label: "Ajman" },
                    { value: 5, label: "Fujairah" },
                    { value: 6, label: "Ras Al Khaimah" },
                    { value: 7, label: "Umm Al Quwain" }
                ].filter(loc => loc.label.toLowerCase().includes(inputValue.toLowerCase()));
                callback(staticLocations);
            }
        }, 500); // تأخير 500ms
    };

    const handleChange = (selectedOptions: SelectOption | null) => {
        onChange(selectedOptions || null);
    };

    return (
        <AsyncSelect
      isMulti={false}
            cacheOptions
            loadOptions={loadOptions}
            defaultOptions
            value={value}
            onChange={handleChange}
            placeholder="Search and select locations..."
            className="react-select-container"
            classNamePrefix="react-select"
        />
    );
};

export default LocationAutocomplete;