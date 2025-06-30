// import React, { useState } from 'react';
// import CustomSelect from '../ui/CustomSelect';
// import { useFilters } from '../../context/FiltersContext';

// interface ReassignModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     onReassign: (agentId: string) => void;
//     selectedCount: number;
//     isReassigning: boolean;
// }

// const ReassignModal = ({ isOpen, onClose, onReassign, selectedCount, isReassigning }: ReassignModalProps) => {
//     const { agents, loading: loadingAgents } = useFilters();
//     const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);

//     if (!isOpen) return null;

//     const handleSubmit = () => {
//         if (selectedAgentId) {
//             onReassign(selectedAgentId);
//         }
//     };

//     return (
//         <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
//             <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6" onClick={e => e.stopPropagation()}>
//                 <h2 className="text-lg font-bold">Reassign Listings</h2>
//                 <p className="text-sm text-gray-600 mt-2">
//                     You are about to reassign {selectedCount} listing(s). Please select the new agent.
//                 </p>
//                 <div className="mt-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Select Agent</label>
//                     <CustomSelect 
//                         options={agents}
//                         placeholder="Choose an agent"
//                         value={selectedAgentId || ''}
//                         onChange={setSelectedAgentId}
//                         isLoading={loadingAgents}
//                     />
//                 </div>
//                 <div className="mt-6 flex justify-end gap-3">
//                     <button onClick={onClose} disabled={isReassigning} className="bg-white border border-gray-300 px-4 py-2 rounded-md text-sm font-semibold">Cancel</button>
//                     <button 
//                         onClick={handleSubmit} 
//                         disabled={!selectedAgentId || isReassigning}
//                         className="bg-violet-600 text-white px-4 py-2 rounded-md text-sm font-semibold disabled:bg-gray-300"
//                     >
//                         {isReassigning ? 'Reassigning...' : 'Reassign'}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ReassignModal;