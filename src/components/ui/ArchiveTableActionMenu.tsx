import { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { MoreHorizontal, Edit2, Eye, Trash2 } from 'lucide-react';

const ArchiveTableActionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Component has mounted, so the portal root is available
  }, []);

  useEffect(() => {
    if (isOpen && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setMenuPosition({
            top: rect.bottom + window.scrollY + 5,
            left: rect.left + window.scrollX - 150,
        });
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const MenuPortal = () => (
    <div 
        style={{ top: `${menuPosition.top}px`, left: `${menuPosition.left}px` }}
        className="fixed w-48 bg-white rounded-md shadow-lg border z-50"
    >
      <ul className="py-1">
        <li><a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><Edit2 size={16} /><span>Edit</span></a></li>
        <li><a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><Eye size={16} /><span>Unarchive</span></a></li>
        <li><a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50"><Trash2 size={16} /><span>Delete</span></a></li>
      </ul>
    </div>
  );

  return (
    <>
      <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
        <MoreHorizontal size={20} />
      </button>
      {isMounted && isOpen ? ReactDOM.createPortal(<MenuPortal />, document.getElementById('portal-root')!) : null}
    </>
  );
};

export default ArchiveTableActionMenu;