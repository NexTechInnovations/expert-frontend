import { useState } from 'react';
import { cn } from '../../../lib/utils';

type Position = 'top-left' | 'top-center' | 'top-right' | 'middle-left' | 'center' | 'middle-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
const positionClasses: Record<Position, string> = { 'top-left': 'top-4 left-4', 'top-center': 'top-4 left-1/2', 'top-right': 'top-4 right-4', 'middle-left': 'top-1/2 left-4', 'center': 'top-1/2 left-1/2', 'middle-right': 'top-1/2 right-4', 'bottom-left': 'bottom-4 left-4', 'bottom-center': 'bottom-4 left-1/2', 'bottom-right': 'bottom-4 right-4' };

interface ImagePreviewProps { watermarkType: 'image' | 'text'; watermarkText: string; watermarkFont: string; opacity: number; }

const ImagePreview = ({ watermarkType, watermarkText, watermarkFont, opacity }: ImagePreviewProps) => {
    const [activePosition, setActivePosition] = useState<Position>('top-left');
    const fontClasses: Record<string, string> = { 'Roboto': 'font-sans', 'Cambria': 'font-serif', 'Open Sans': 'font-sans' };
    
    return (
        <div className="relative w-full rounded-lg overflow-hidden bg-gray-200 aspect-[16/9]">
            <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070" alt="Interior Preview" className="w-full h-full object-cover" />
            
            {watermarkType === 'text' && watermarkText && (
                 <div className={cn("absolute text-white text-3xl font-bold pointer-events-none whitespace-nowrap -translate-x-1/2 -translate-y-1/2", positionClasses[activePosition], fontClasses[watermarkFont])} style={{ opacity: opacity / 100, textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                    {watermarkText}
                </div>
            )}

            {Object.keys(positionClasses).map(key => {
                const pos = key as Position;
                return (<button key={pos} onClick={() => setActivePosition(pos)} className={cn("absolute w-5 h-5 rounded-full border-2 bg-white transition-all -translate-x-1/2 -translate-y-1/2", activePosition === pos ? 'border-violet-600 scale-110' : 'border-gray-400', positionClasses[pos])} />)
            })}
        </div>
    );
};
export default ImagePreview;