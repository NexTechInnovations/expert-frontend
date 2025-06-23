interface DonutChartProps {
    value: number;
    label: string;
}

const DonutChart = ({ value, label }: DonutChartProps) => {
    return (
        <div className="relative w-40 h-40 mx-auto">
            <div className="absolute inset-0 bg-gray-100 rounded-full"></div>
            <div className="absolute inset-2 bg-white rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-4xl font-bold text-gray-800">{value}</p>
                    <p className="text-sm text-gray-500">{label}</p>
                </div>
            </div>
        </div>
    );
};

export default DonutChart;