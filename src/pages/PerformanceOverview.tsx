import { useState } from 'react';
import PerformanceHeader from '../components/dashboard/PerformanceHeader';
import FilterDropdown from '../components/dashboard/FilterDropdown';
import StatCard from '../components/dashboard/StatCard';
import NoData from '../components/dashboard/NoData';
import ChartLegend from '../components/dashboard/ChartLegend';
import FactorsSection from '../components/dashboard/FactorsSection';
import CommunityAnalysis from '../components/dashboard/CommunityAnalysis';
import type { StatCardType, FilterType } from '../types';

const PerformanceOverview = () => {
  const [activeStatLabel, setActiveStatLabel] = useState<string>('Published Listings');
  const [openFilterIndex, setOpenFilterIndex] = useState<number | null>(null);

  const stats: StatCardType[] = [
    { value: 0, label: 'Credits Spent', description: "View the total number of credits you've used on our platform during the selected time period and specific filters you chose. Credits are utilized for publishing and upgrading your listings." },
    { value: 0, label: 'Published Listings', description: "See the number of listings you have published on our platform during the selected time period and specific filters you chose. Publishing more high-quality listings can help you generate more leads and increase your chances of making successful transactions." },
    { value: 0, label: 'Live Listings', description: "Track the number of listings you have online on our platform during the selected time period and specific filters. Published listings reflect all listings posted, while live listings show only those visible to consumers. These numbers may differ, which is normal." },
    { value: 0, label: 'Impressions', description: "See how many times your listings have been exposed to home-seekers on our search pages during the selected time period and specific filters you chose. A higher number of impressions means greater visibility for your listings." },
    { value: 0, label: 'Listing Clicks', description: "This metric shows the total number of clicks your listings received from the search results page. Higher clicks indicate strong interest from potential buyers or renters." },
    { value: 0, label: 'Leads', description: "Leads are the number of inquiries (calls, messages, emails) you received through the platform. This is a direct measure of consumer interest in your properties." },
    { value: 0, label: 'Leads per Listing', description: "This calculates the average number of leads generated per listing, helping you understand the effectiveness of individual properties. (LPL = Total Leads / Total Live Listings)." }
  ];

  const filters: FilterType[] = [
    { label: "Residential", options: [{ label: 'All', value: 'all' }, { label: 'Commercial', value: 'commercial' }, { label: 'Residential', value: 'residential' }] },
    { label: "Property type", options: [{ label: 'All types', value: 'all' }, { label: 'Apartment', value: 'apartment' }, { label: 'Villa', value: 'villa' }] },
    { label: "Rent and Sale", options: [{ label: 'Rent and Sale', value: 'both' }, { label: 'Rent', value: 'rent' }, { label: 'Sale', value: 'sale' }] },
    { label: "All locations", options: [{ label: 'Dubai', value: 'dubai' }, { label: 'Abu Dhabi', value: 'abu_dhabi' }] },
    { label: "12 May 2025 - 12 Jun 2025", options: [{ label: 'Last 7 days', value: '7d' }, { label: 'Last 30 days', value: '30d' }] }
  ];

  const activeStat = stats.find(stat => stat.label === activeStatLabel);

  const handleFilterClick = (index: number) => {
    setOpenFilterIndex(openFilterIndex === index ? null : index);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <PerformanceHeader />

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filters.map((filter, index) => (
          <FilterDropdown
            key={index}
            label={filter.label}
            options={filter.options}
            isOpen={openFilterIndex === index}
            onClick={() => handleFilterClick(index)}
          />
        ))}
      </div>
      
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
            isActive={activeStatLabel === stat.label}
            onClick={() => {
              setActiveStatLabel(stat.label);
              setOpenFilterIndex(null);
            }}
          />
        ))}
      </div>

      <div className="mt-6 p-6 bg-white border border-gray-200 rounded-lg">
        <h2 className="font-semibold text-gray-800">{activeStat?.label}</h2>
        <p className="text-sm text-gray-500 mt-1">
          {activeStat?.description}
        </p>
        <div className="mt-4 flex flex-col lg:flex-row gap-6">
          <div className="flex-grow">
            <NoData />
          </div>
          <div className="flex-shrink-0">
            <ChartLegend />
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <FactorsSection />
        <div className="mt-4 min-h-[200px] flex items-center justify-center">
          <NoData />
        </div>
      </div>

      <CommunityAnalysis />
    </div>
  );
};

export default PerformanceOverview;