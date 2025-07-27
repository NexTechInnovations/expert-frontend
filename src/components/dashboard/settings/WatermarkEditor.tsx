import { useState, useEffect, useRef } from 'react';
import { Image as ImageIcon, Type, CheckCircle, X } from 'lucide-react';
import CustomSlider from '../../ui/CustomSlider';
import CustomSelect from '../../ui/CustomSelect';
import ImagePreview from './ImagePreview';
import { cn } from '../../../lib/utils';
import { fetchWatermark, deleteWatermark, applyWatermark } from '../../../services/watermarkService';
import type { Watermark } from '../../../types';

type EditorMode = 'image' | 'text';

interface Option {
    value: string;
    label: string;
}

const WatermarkEditor = () => {
    const [mode, setMode] = useState<EditorMode>('image');
    const [textSettings, setTextSettings] = useState({ text: '', font: 'Roboto', fontSize: 10, opacity: 50 });
    const [imageSettings, setImageSettings] = useState({ opacity: 50, proportions: 50 });
    const [watermarkData, setWatermarkData] = useState<Watermark | null>(null);
    const [loading, setLoading] = useState(true);
    const [watermarkImageUrl, setWatermarkImageUrl] = useState<string>('');
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [modalAction, setModalAction] = useState<'apply' | 'remove'>('apply');
    const [applyToExisting, setApplyToExisting] = useState(false);
    const fontOptions: Option[] = [{value: 'Roboto', label: 'Roboto'}, {value: 'Cambria', label: 'Cambria'}, {value: 'Open Sans', label: 'Open Sans'}];
    const fileInputRef = useRef<HTMLInputElement>(null);

    // جلب بيانات الـ watermark عند تحميل المكون
    useEffect(() => {
        loadWatermark();
    }, []);

    const loadWatermark = async () => {
        try {
            setLoading(true);
            const response = await fetchWatermark('11441'); // يمكن تغيير هذا ليكون ديناميكي
            const watermark = response.data.watermark;
            setWatermarkData(watermark);
            
            // تحديث الحالة بناءً على البيانات من الـ API
            setMode(watermark.type);
            setImageSettings({
                opacity: watermark.opacity,
                proportions: Math.round(watermark.ratio * 100)
            });
            
            if (watermark.type === 'text') {
                setTextSettings({
                    text: watermark.text.text,
                    font: watermark.text.fontFamily || 'Roboto',
                    fontSize: Math.round(watermark.text.fontRatio * 100),
                    opacity: watermark.opacity
                });
            }
            
            if (watermark.image?.url) {
                setWatermarkImageUrl(watermark.image.url);
            }
        } catch (error) {
            console.error('Error loading watermark:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleApplyWatermark = async () => {
        try {
            setLoading(true);
            
            const applyData = {
                isDisabled: false,
                applyToExistingImages: applyToExisting,
                watermark: {
                    opacity: mode === 'text' ? textSettings.opacity : imageSettings.opacity,
                    ratio: mode === 'text' ? 0.5 : imageSettings.proportions / 100,
                    position: watermarkData?.position || 'position-center',
                    type: mode,
                    ...(mode === 'text' && {
                        text: {
                            fontRatio: textSettings.fontSize / 100,
                            fontFamily: textSettings.font.toLowerCase().replace(' ', '-') + '-regular',
                            text: textSettings.text
                        }
                    }),
                    ...(mode === 'image' && watermarkImageUrl && {
                        image: {
                            url: watermarkImageUrl
                        }
                    })
                }
            };
            
            await applyWatermark('11441', applyData);
            await loadWatermark(); // إعادة تحميل البيانات
            setShowConfirmModal(false);
            
            console.log('Watermark applied successfully');
        } catch (error) {
            console.error('Error applying watermark:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveWatermark = async () => {
        try {
            setLoading(true);
            await deleteWatermark('11441'); // يمكن تغيير هذا ليكون ديناميكي
            
            // إعادة تعيين الحالة بعد الحذف
            setWatermarkData(null);
            setWatermarkImageUrl('');
            setMode('image');
            setImageSettings({ opacity: 50, proportions: 50 });
            setTextSettings({ text: '', font: 'Roboto', fontSize: 10, opacity: 50 });
            setShowConfirmModal(false);
            
            console.log('Watermark removed successfully');
        } catch (error) {
            console.error('Error removing watermark:', error);
        } finally {
            setLoading(false);
        }
    };

    const openApplyModal = () => {
        setModalAction('apply');
        setShowConfirmModal(true);
    };

    const openRemoveModal = () => {
        setModalAction('remove');
        setShowConfirmModal(true);
    };

    const handleConfirm = () => {
        if (modalAction === 'apply') {
            handleApplyWatermark();
        } else {
            handleRemoveWatermark();
        }
    };

    const handleImageUpload = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // التحقق من نوع الملف
            if (!file.type.match(/^image\/(png|jpg|jpeg)$/)) {
                alert('Please upload PNG, JPG, or JPEG files only');
                return;
            }
            
            // التحقق من حجم الملف (2MB = 2 * 1024 * 1024 bytes)
            if (file.size > 2 * 1024 * 1024) {
                alert('File size must be less than 2MB');
                return;
            }

            // إنشاء URL مؤقت للمعاينة
            const imageUrl = URL.createObjectURL(file);
            setWatermarkImageUrl(imageUrl);
            
            // TODO: هنا يمكن إضافة رفع الملف إلى الخادم
            console.log('File selected:', file);
        }
    };

    const hasWatermark = watermarkData && (
        (watermarkData.type === 'image' && watermarkData.image?.url) || 
        (watermarkData.type === 'text' && watermarkData.text?.text)
    );

    if (loading) {
        return (
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-600"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-6">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setMode('image')} className="flex items-center gap-2 text-sm font-semibold"><span className={cn("w-5 h-5 rounded-full border-2 flex items-center justify-center", mode === 'image' ? "border-violet-600 bg-violet-600" : "border-gray-400")}>{mode === 'image' && <CheckCircle size={16} className="text-white bg-violet-600 rounded-full" />}</span><ImageIcon size={20} className={mode === 'image' ? "text-violet-600" : "text-gray-500"}/><span className={mode === 'image' ? "text-violet-700" : "text-gray-600"}>Image</span></button>
                        <button onClick={() => setMode('text')} className="flex items-center gap-2 text-sm font-semibold"><span className={cn("w-5 h-5 rounded-full border-2 flex items-center justify-center", mode === 'text' ? "border-violet-600 bg-violet-600" : "border-gray-400")}>{mode === 'text' && <CheckCircle size={16} className="text-white bg-violet-600 rounded-full" />}</span><Type size={20} className={mode === 'text' ? "text-violet-600" : "text-gray-500"}/><span className={mode === 'text' ? "text-violet-700" : "text-gray-600"}>Text</span></button>
                    </div>
                    {mode === 'image' ? (
                        <div className="space-y-6">
                            {watermarkImageUrl ? (
                                <div className="relative border-2 border-gray-300 rounded-lg p-4">
                                    <img src={watermarkImageUrl} alt="Watermark Preview" className="w-full h-20 object-contain" />
                                    <button 
                                        onClick={() => setWatermarkImageUrl('')}
                                        className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700"
                                    >
                                        <X size={14} />
                                    </button>
                                </div>
                            ) : (
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                    <p className="text-sm text-gray-600">Upload your watermark in PNG, JPG, JPEG format</p>
                                    <button 
                                        onClick={handleImageUpload}
                                        className="mt-4 bg-white border border-violet-600 text-violet-600 font-semibold py-2 px-4 rounded-md text-sm hover:bg-violet-50"
                                    >
                                        Add Image
                                    </button>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept=".png,.jpg,.jpeg"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                    <p className="text-xs text-gray-400 mt-2">PNG, JPG, JPEG file. No more than 2 MB.</p>
                                </div>
                            )}
                            <div><label className="text-sm font-medium text-gray-700">Opacity</label><div className="flex items-center gap-4"><CustomSlider value={imageSettings.opacity} onChange={(e) => setImageSettings(s => ({...s, opacity: +e.target.value}))} /><span className="text-sm font-medium text-gray-600">{imageSettings.opacity}%</span></div></div>
                            <div><label className="text-sm font-medium text-gray-700">Proportions</label><div className="flex items-center gap-4"><CustomSlider value={imageSettings.proportions} onChange={(e) => setImageSettings(s => ({...s, proportions: +e.target.value}))} /><span className="text-sm font-medium text-gray-600">{imageSettings.proportions}%</span></div></div>
                        </div>
                    ) : (
                         <div className="space-y-6">
                            <div><label className="text-sm font-medium text-gray-700">Text</label><input type="text" value={textSettings.text} onChange={e => setTextSettings(s => ({...s, text: e.target.value}))} className="w-full mt-1 p-2 border border-gray-300 rounded-md" /></div>
                            <div><label className="text-sm font-medium text-gray-700">Font</label><CustomSelect options={fontOptions} value={fontOptions.find(f => f.value === textSettings.font) || null} onChange={v => setTextSettings(s => ({...s, font: String(v?.value || 'Roboto')}))} placeholder="Select Font"/></div>
                            <div><label className="text-sm font-medium text-gray-700">Font Size</label><div className="flex items-center gap-4"><CustomSlider value={textSettings.fontSize} onChange={e => setTextSettings(s => ({...s, fontSize: +e.target.value}))} /><span className="text-sm font-medium text-gray-600">{textSettings.fontSize}px</span></div></div>
                            <div><label className="text-sm font-medium text-gray-700">Opacity</label><div className="flex items-center gap-4"><CustomSlider value={textSettings.opacity} onChange={e => setTextSettings(s => ({...s, opacity: +e.target.value}))} /><span className="text-sm font-medium text-gray-600">{textSettings.opacity}%</span></div></div>
                         </div>
                    )}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                        <button className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-2.5 rounded-lg hover:bg-gray-100">Cancel</button>
                        {hasWatermark ? (
                            <button 
                                onClick={openRemoveModal}
                                disabled={loading}
                                className="w-full bg-red-600 text-white font-semibold py-2.5 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Remove watermark
                            </button>
                        ) : (
                            <button 
                                onClick={openApplyModal}
                                disabled={loading}
                                className="w-full bg-red-600 text-white font-semibold py-2.5 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Apply changes
                            </button>
                        )}
                    </div>
                </div>
                <div className="lg:col-span-2">
                    <ImagePreview 
                        watermarkType={mode} 
                        watermarkText={textSettings.text} 
                        watermarkFont={textSettings.font} 
                        watermarkFontSize={textSettings.fontSize} 
                        opacity={mode === 'text' ? textSettings.opacity : imageSettings.opacity}
                        watermarkImageUrl={watermarkImageUrl}
                        watermarkRatio={imageSettings.proportions / 100}
                        watermarkPosition={watermarkData?.position || 'position-center'}
                    />
                </div>
            </div>

            {/* Confirmation Modal */}
            {showConfirmModal && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setShowConfirmModal(false)}>
                    <div 
                        className="bg-white rounded-2xl shadow-xl w-full max-w-md flex flex-col p-8 text-center"
                        onClick={e => e.stopPropagation()}
                    >
                        <h2 className="text-lg font-bold text-gray-900">
                            {modalAction === 'apply' ? 'Watermarks will be applied to all new listings' : 'Removing Watermark'}
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            {modalAction === 'apply'
                                ? 'If any of your listings were previously watermarked on PF Expert, both the old and new watermarks will appear. This may take up to 1 hour to apply.'
                                : 'You are about to remove the watermark image. If you proceed, your new listings will no longer have a watermark.'
                            }
                        </p>
                        
                        {modalAction === 'apply' && (
                            <div className="mt-4 flex items-center">
                                <input
                                    type="checkbox"
                                    id="applyToExisting"
                                    checked={applyToExisting}
                                    onChange={(e) => setApplyToExisting(e.target.checked)}
                                    className="mr-2"
                                />
                                <label htmlFor="applyToExisting" className="text-sm text-gray-600">
                                    Also apply to existing listings
                                </label>
                            </div>
                        )}
                        
                        <div className="mt-8 flex justify-center gap-4">
                            <button
                                onClick={() => setShowConfirmModal(false)}
                                disabled={loading}
                                className="bg-white border border-gray-300 text-gray-700 font-semibold py-2.5 px-6 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirm}
                                disabled={loading}
                                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors disabled:bg-gray-300"
                            >
                                {loading ? (modalAction === 'apply' ? 'Applying...' : 'Removing...') : 'Confirm'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default WatermarkEditor;