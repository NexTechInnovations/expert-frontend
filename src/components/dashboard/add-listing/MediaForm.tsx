import FormLabel from "../../ui/FormLabel";

const MediaForm = () => {
    return (
        <div className="space-y-6">
            <FormLabel text="Photos of property"><p className="text-sm text-gray-500 font-normal mb-2">To rearrange, press and hold then drag the image.</p><div className="border-2 border-dashed rounded-lg p-10 text-center text-gray-500">Tap to upload photos</div><p className="text-xs text-gray-400 mt-1">JPG, PNG, BMP</p></FormLabel>
            <FormLabel text="360 URL link"><input type="text" className="w-full p-2.5 border rounded-lg" /></FormLabel>
            <FormLabel text="Video tour URL"><input type="text" className="w-full p-2.5 border rounded-lg" /></FormLabel>
        </div>
    );
};
export default MediaForm;