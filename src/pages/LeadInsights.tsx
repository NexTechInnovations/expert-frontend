import { useState } from 'react';
import { ArrowRight, Phone, MessageSquare, Info } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import ChartCard from '../components/ui/ChartCard';
import DonutChart from '../components/ui/DonutChart';
import NoData from '../components/dashboard/NoData';
import TabButton from '../components/ui/TabButton';
import NoDataWithMessage from '../components/dashboard/NoDataWithMessage';

const LeadInsights = () => {
    const [directLeadsTab, setDirectLeadsTab] = useState('All leads');
    const [callInsightsTab, setCallInsightsTab] = useState('Total calls');
    const [whatsAppTab, setWhatsAppTab] = useState('WhatsApp Leads');

    return (
        <div className="p-4 sm:p-6 md:p-8 space-y-8">
            <PageHeader title="Leads insights" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <ChartCard title="Direct leads source">
                        <DonutChart value={0} label="Total" />
                        <div className="text-center mt-4">
                            <a href="#" className="text-sm font-semibold text-blue-600 hover:underline flex items-center justify-center gap-1">
                                View all <ArrowRight size={14} />
                            </a>
                        </div>
                    </ChartCard>
                </div>
                <div className="lg:col-span-2">
                    <ChartCard title="Direct leads over time" tabs={['All leads', 'WhatsApp', 'Calls', 'Email']} activeTab={directLeadsTab} onTabChange={setDirectLeadsTab}>
                        <div className="h-64 flex items-center justify-center">
                            <NoData />
                        </div>
                    </ChartCard>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Call insights</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-1 bg-white p-6 border border-gray-200 rounded-lg">
                        <NoDataWithMessage 
                            icon={<Phone size={32} className="text-violet-500" />}
                            title="No data available"
                            message="You haven't received any calls yet."
                            actionLink={{ href: '#', text: 'View per agent' }}
                        />
                    </div>
                    <div className="lg:col-span-2">
                        <ChartCard>
                            <div className="border-b border-gray-200">
                                <TabButton label="Total calls" isActive={callInsightsTab === 'Total calls'} onClick={() => setCallInsightsTab('Total calls')} />
                                <TabButton label="Answering rate" isActive={callInsightsTab === 'Answering rate'} onClick={() => setCallInsightsTab('Answering rate')} />
                            </div>
                            <div className="h-64 flex items-center justify-center">
                                <NoData />
                            </div>
                        </ChartCard>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <ChartCard title="Calls per day of the week">
                        <NoDataWithMessage icon={<Info size={32} className="text-gray-400" />} title="No data available" message="You require at least 4 weeks for data insights." />
                    </ChartCard>
                     <ChartCard title="Calls per hour">
                        <NoDataWithMessage icon={<Info size={32} className="text-gray-400" />} title="No data available" message="You require at least 4 weeks for data insights." />
                    </ChartCard>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">WhatsApp insights</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-1 bg-white p-6 border border-gray-200 rounded-lg">
                        <div className="flex justify-between items-start">
                             <h3 className="text-lg font-bold text-gray-800">WhatsApp leads</h3>
                             <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                                <MessageSquare size={24} className="text-violet-500" />
                            </div>
                        </div>
                        <p className="text-4xl font-bold mt-4">0</p>
                        <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                            <div>
                                <p className="text-gray-500">Response rate</p>
                                <p className="font-bold text-lg">0%</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Response time</p>
                                <p className="font-bold text-lg">0m</p>
                            </div>
                             <div>
                                <p className="text-gray-500">Replied</p>
                                <p className="font-bold text-lg">0</p>
                            </div>
                             <div>
                                <p className="text-gray-500">Not replied</p>
                                <p className="font-bold text-lg">0</p>
                            </div>
                        </div>
                        <a href="#" className="text-sm font-semibold text-blue-600 hover:underline mt-6 block">
                            View per agent →
                        </a>
                    </div>
                     <div className="lg:col-span-2">
                        <ChartCard>
                             <div className="border-b border-gray-200">
                                <TabButton label="WhatsApp Leads" isActive={whatsAppTab === 'WhatsApp Leads'} onClick={() => setWhatsAppTab('WhatsApp Leads')} />
                                <TabButton label="Response rate" isActive={whatsAppTab === 'Response rate'} onClick={() => setWhatsAppTab('Response rate')} />
                                <TabButton label="Response time" isActive={whatsAppTab === 'Response time'} onClick={() => setWhatsAppTab('Response time')} />
                            </div>
                            <div className="h-64 flex items-center justify-center">
                                <NoData />
                            </div>
                        </ChartCard>
                    </div>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <ChartCard title="WhatsApp leads per day of week">
                        <NoDataWithMessage icon={<Info size={32} className="text-gray-400" />} title="No data available" message="You require at least 4 weeks for data insights." />
                    </ChartCard>
                     <ChartCard title="WhatsApp leads per hour">
                        <NoDataWithMessage icon={<Info size={32} className="text-gray-400" />} title="No data available" message="You require at least 4 weeks for data insights." />
                    </ChartCard>
                </div>
            </div>

        </div>
    );
};

export default LeadInsights;