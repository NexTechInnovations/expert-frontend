import { useState, useRef, useEffect } from 'react';
import { MoreHorizontal, FileText, Trash2, Archive } from 'lucide-react';

const ActionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800"
      >
        <MoreHorizontal size={20} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
          <ul className="py-1">
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <FileText size={16} />
                <span>Create PDF</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                <Trash2 size={16} />
                <span>Delete</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <Archive size={16} />
                <span>Archive</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ActionMenu;