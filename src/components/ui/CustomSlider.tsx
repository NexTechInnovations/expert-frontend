interface CustomSliderProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomSlider = ({ value, onChange }: CustomSliderProps) => {
  return (
    <div className="relative w-full h-5 flex items-center">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={onChange}
        className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
      />
    </div>
  );
};

export default CustomSlider;