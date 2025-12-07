import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Info } from 'lucide-react';

const InfoTooltip = ({ content }: { content: string }) => {
    return (
        <Tippy content={content}>
            <button type="button" className="ml-1 text-gray-400 hover:text-gray-600">
                <Info size={14} />
            </button>
        </Tippy>
    );
};
export default InfoTooltip;