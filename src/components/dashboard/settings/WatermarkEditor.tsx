import { useState } from 'react';
import { Image as ImageIcon, Type, CheckCircle } from 'lucide-react';
import CustomSlider from '../../ui/CustomSlider';
import CustomSelect from '../../ui/CustomSelect';
import ImagePreview from './ImagePreview';
import { cn } from '../../../lib/utils'; // المسار الصحيح

type EditorMode = 'image' | 'text';

const WatermarkEditor = () => {
    const [mode, setMode] = useState<EditorMode>('image');
    const [textSettings, setTextSettings] = useState({ text: '', font: 'Roboto', fontSize: 10, opacity: 50 });
    const [imageSettings, setImageSettings] = useState({ opacity: 50, proportions: 50 });
    const fontOptions = [{value: 'Roboto', label: 'Roboto'}, {value: 'Cambria', label: 'Cambria'}, {value: 'Open Sans', label: 'Open Sans'}];

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
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"><p className="text-sm text-gray-600">Upload your watermark in PNG, JPG, JPEG format</p><button className="mt-4 bg-white border border-violet-600 text-violet-600 font-semibold py-2 px-4 rounded-md text-sm hover:bg-violet-50">Add Image</button><p className="text-xs text-gray-400 mt-2">PNG, JPG, JPEG file. No more than 2 MB.</p></div>
                            <div><label className="text-sm font-medium text-gray-700">Opacity</label><div className="flex items-center gap-4"><CustomSlider value={imageSettings.opacity} onChange={(e) => setImageSettings(s => ({...s, opacity: +e.target.value}))} /><span className="text-sm font-medium text-gray-600">{imageSettings.opacity}%</span></div></div>
                            <div><label className="text-sm font-medium text-gray-700">Proportions</label><div className="flex items-center gap-4"><CustomSlider value={imageSettings.proportions} onChange={(e) => setImageSettings(s => ({...s, proportions: +e.target.value}))} /><span className="text-sm font-medium text-gray-600">{imageSettings.proportions}%</span></div></div>
                        </div>
                    ) : (
                         <div className="space-y-6">
                            <div><label className="text-sm font-medium text-gray-700">Text</label><input type="text" value={textSettings.text} onChange={e => setTextSettings(s => ({...s, text: e.target.value}))} className="w-full mt-1 p-2 border border-gray-300 rounded-md" /></div>
                            <div><label className="text-sm font-medium text-gray-700">Font</label><CustomSelect options={fontOptions} value={textSettings.font} onChange={v => setTextSettings(s => ({...s, font: v}))} placeholder="Select Font"/></div>
                            <div><label className="text-sm font-medium text-gray-700">Font Size</label><div className="flex items-center gap-4"><CustomSlider value={textSettings.fontSize} onChange={e => setTextSettings(s => ({...s, fontSize: +e.target.value}))} /><span className="text-sm font-medium text-gray-600">{textSettings.fontSize / 100}</span></div></div>
                            <div><label className="text-sm font-medium text-gray-700">Opacity</label><div className="flex items-center gap-4"><CustomSlider value={textSettings.opacity} onChange={e => setTextSettings(s => ({...s, opacity: +e.target.value}))} /><span className="text-sm font-medium text-gray-600">{textSettings.opacity}%</span></div></div>
                         </div>
                    )}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-200"><button className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-2.5 rounded-lg hover:bg-gray-100">Cancel</button><button className="w-full bg-red-600 text-white font-semibold py-2.5 rounded-lg hover:bg-red-700">Apply changes</button></div>
                </div>
                <div className="lg:col-span-2"><ImagePreview watermarkType={mode} watermarkText={textSettings.text} watermarkFont={textSettings.font} opacity={mode === 'text' ? textSettings.opacity : imageSettings.opacity} /></div>
            </div>
        </div>
    );
};
export default WatermarkEditor;