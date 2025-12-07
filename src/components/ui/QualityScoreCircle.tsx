interface QualityScoreCircleProps {
  score: number;
}

const QualityScoreCircle = ({ score }: QualityScoreCircleProps) => {
  const circumference = 2 * Math.PI * 18; // 2 * pi * r
  const offset = circumference - (score / 100) * circumference;

  const scoreColor = score < 40 ? 'text-red-500' : score < 70 ? 'text-yellow-500' : 'text-green-500';

  return (
    <div className="relative h-12 w-12 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 40 40">
        <circle
          className="text-gray-200"
          strokeWidth="3"
          stroke="currentColor"
          fill="transparent"
          r="18"
          cx="20"
          cy="20"
        />
        <circle
          className={scoreColor}
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="18"
          cx="20"
          cy="20"
          transform="rotate(-90 20 20)"
        />
      </svg>
      <span className={`absolute text-xs font-bold ${scoreColor}`}>
        {score}%
      </span>
    </div>
  );
};

export default QualityScoreCircle;