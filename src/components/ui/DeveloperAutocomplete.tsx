import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { fetchDevelopers } from '../../services/developerService';
import type { Developer } from '../../types';

interface DeveloperAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const DeveloperAutocomplete = ({ 
  value, 
  onChange, 
  placeholder = "Search developers...",
  className 
}: DeveloperAutocompleteProps) => {
  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [filteredDevelopers, setFilteredDevelopers] = useState<Developer[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedDeveloper, setSelectedDeveloper] = useState<Developer | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // جلب البيانات عند تحميل المكون
  useEffect(() => {
    loadDevelopers();
  }, []);

  // تحديد المطور المحدد بناءً على الـ value
  useEffect(() => {
    if (value && developers.length > 0) {
      const developer = developers.find(d => d.id.toString() === value);
      if (developer) {
        setSelectedDeveloper(developer);
        setSearchTerm(developer.name);
      }
    }
  }, [value, developers]);

  // إغلاق الـ dropdown عند الضغط خارج المكون
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const loadDevelopers = async () => {
    try {
      setLoading(true);
      const response = await fetchDevelopers();
      setDevelopers(response.data);
      setFilteredDevelopers(response.data);
    } catch (error) {
      console.error('Error loading developers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim() === '') {
      setFilteredDevelopers(developers);
    } else {
      const filtered = developers.filter(developer =>
        developer.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredDevelopers(filtered);
    }
  };

  const handleSelectDeveloper = (developer: Developer) => {
    console.log('Selected developer:', developer);
    setSelectedDeveloper(developer);
    onChange(developer.id.toString());
    setSearchTerm(developer.name);
    setIsOpen(false);
  };



  const handleClear = () => {
    setSelectedDeveloper(null);
    setSearchTerm('');
    onChange('');
    setIsOpen(false);
  };

  // تحديث searchTerm عند تغيير value من الخارج
  useEffect(() => {
    if (!value) {
      setSearchTerm('');
      setSelectedDeveloper(null);
    }
  }, [value]);

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={handleInputFocus}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          {selectedDeveloper && (
            <button
              onClick={handleClear}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <ChevronDown className={cn(
              "h-4 w-4 text-gray-400 transition-transform",
              isOpen && "rotate-180"
            )} />
          </button>
        </div>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {loading ? (
            <div className="p-4 text-center text-gray-500">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-violet-600 mx-auto"></div>
              <p className="mt-2 text-sm">Loading developers...</p>
            </div>
          ) : filteredDevelopers.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              <p className="text-sm">No developers found</p>
            </div>
          ) : (
            <div className="py-1">
              {filteredDevelopers.map((developer) => (
                <button
                  key={developer.id}
                  onClick={() => handleSelectDeveloper(developer)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3"
                >
                  {developer.logo_url && (
                    <img
                      src={developer.logo_url}
                      alt={developer.name}
                      className="w-6 h-6 object-contain rounded"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  )}
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{developer.name}</div>
                    <div className="text-sm text-gray-500">{developer.description}</div>
                  </div>
                  <div className="text-xs text-gray-400">
                    {developer.properties_count} properties
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DeveloperAutocomplete; 