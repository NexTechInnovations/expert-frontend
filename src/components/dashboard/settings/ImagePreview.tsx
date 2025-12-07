import { useState, useEffect } from 'react';
import { cn } from '../../../lib/utils';

type Position = 'top-left' | 'top-center' | 'top-right' | 'middle-left' | 'center' | 'middle-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
const positionClasses: Record<Position, string> = { 'top-left': 'top-4 left-4', 'top-center': 'top-4 left-1/2', 'top-right': 'top-4 right-4', 'middle-left': 'top-1/2 left-4', 'center': 'top-1/2 left-1/2', 'middle-right': 'top-1/2 right-4', 'bottom-left': 'bottom-4 left-4', 'bottom-center': 'bottom-4 left-1/2', 'bottom-right': 'bottom-4 right-4' };

interface ImagePreviewProps { 
    watermarkType: 'image' | 'text'; 
    watermarkText: string; 
    watermarkFont: string; 
    watermarkFontSize?: number;
    opacity: number;
    watermarkImageUrl?: string;
    watermarkRatio?: number;
    watermarkPosition?: string;
}

const ImagePreview = ({ 
    watermarkType, 
    watermarkText, 
    watermarkFont, 
    watermarkFontSize = 48, 
    opacity,
    watermarkImageUrl,
    watermarkRatio = 0.5,
    watermarkPosition = 'center'
}: ImagePreviewProps) => {
    const [activePosition, setActivePosition] = useState<Position>('center');
    const [imageError, setImageError] = useState(false);
    const fontClasses: Record<string, string> = { 'Roboto': 'font-sans', 'Cambria': 'font-serif', 'Open Sans': 'font-sans' };
    
    // تحويل position من API إلى Position type
    const getPositionFromApi = (apiPosition: string): Position => {
        const positionMap: Record<string, Position> = {
            'position-top-left': 'top-left',
            'position-top-center': 'top-center',
            'position-top-right': 'top-right',
            'position-middle-left': 'middle-left',
            'position-center': 'center',
            'position-middle-right': 'middle-right',
            'position-bottom-left': 'bottom-left',
            'position-bottom-center': 'bottom-center',
            'position-bottom-right': 'bottom-right'
        };
        return positionMap[apiPosition] || 'center';
    };

    // تحديث activePosition عند تغيير watermarkPosition
    useEffect(() => {
        setActivePosition(getPositionFromApi(watermarkPosition));
    }, [watermarkPosition]);
    
    return (
        <div className="relative w-full rounded-lg overflow-hidden bg-gray-200 aspect-[16/9]">
            {!imageError ? (
                <img 
                    src="https://app.propertyfinder.ae/069bc5da59495f0e.jpg" 
                    alt="Interior Preview" 
                    className="w-full h-full object-cover"
                    onError={() => {
                        console.error('Error loading background image');
                        setImageError(true);
                    }}
                    onLoad={() => {
                        console.log('Background image loaded successfully');
                    }}
                />
            ) : (
                <div className="relative w-full h-full">
                    <img 
                        src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070" 
                        alt="Interior Preview Fallback" 
                        className="w-full h-full object-cover"
                        onError={() => {
                            console.error('Error loading fallback image');
                        }}
                    />
                    <button 
                        onClick={() => setImageError(false)}
                        className="absolute top-2 right-2 bg-violet-600 text-white px-3 py-1 rounded text-xs hover:bg-violet-700"
                    >
                        Retry Original
                    </button>
                </div>
            )}
            
            {watermarkType === 'text' && watermarkText && (
                 <div className={cn("absolute text-white font-bold pointer-events-none whitespace-nowrap -translate-x-1/2 -translate-y-1/2", positionClasses[activePosition], fontClasses[watermarkFont])} style={{ 
                    fontSize: `${watermarkFontSize}px`,
                    opacity: opacity / 100, 
                    textShadow: '1px 1px 3px rgba(0,0,0,0.5)' 
                }}>
                    {watermarkText}
                </div>
            )}

            {watermarkType === 'image' && watermarkImageUrl && (
                <div className={cn("absolute pointer-events-none -translate-x-1/2 -translate-y-1/2", positionClasses[activePosition])} style={{ 
                    opacity: opacity / 100,
                    width: `${watermarkRatio * 100}%`,
                    maxWidth: '300px'
                }}>
                    <img 
                        src={watermarkImageUrl} 
                        alt="Watermark" 
                        className="w-full h-auto object-contain"
                    />
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