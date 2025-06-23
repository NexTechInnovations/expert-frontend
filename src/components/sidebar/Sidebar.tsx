import SidebarContent from './SidebarContent';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex-col fixed inset-y-0 hidden lg:flex">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">expert</div>
        <button className="text-sm bg-gray-100 text-gray-700 font-semibold py-1 px-3 rounded-md hover:bg-gray-200">
          Rate us
        </button>
      </div>
      <SidebarContent />
    </aside>
  );
};

export default Sidebar;