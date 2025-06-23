const FactorsSection = () => {
  return (
    <div className="mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-bold text-gray-800">Factors that impact your performance</h2>
        <button className="mt-2 sm:mt-0 text-sm bg-white border border-gray-300 text-gray-700 font-semibold py-1.5 px-4 rounded-md hover:bg-gray-50 transition-colors">
          Give feedback
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-500 max-w-4xl">
        To improve, focus on these 4 factors: highest quality score, listing is verified, represented by a SuperAgent, and is featured or premium. Improving these factors across your listings will raise your LPL and improve how quickly your listings appear in search.
      </p>
    </div>
  );
};

export default FactorsSection;