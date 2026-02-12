import CampaignCard from "./CampaignCard"
import { mockCampaigns } from "../utils/mockData"

type Props = {
  goHome: () => void
}

export default function SponsorDashboard({ goHome }: Props) {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">

      {/* Navbar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <h1 className="font-semibold text-lg">Sponsphere</h1>
          <button
            onClick={goHome}
            className="text-gray-400 hover:text-white transition"
          >
            Exit
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16">

        <h2 className="text-4xl font-semibold mb-12 tracking-tight">
          Sponsor Dashboard
        </h2>

        {/* Budget Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <StatCard title="Total Budget" value="5000 ALGO" />
          <StatCard title="Allocated" value="1200 ALGO" />
          <StatCard title="Remaining" value="3800 ALGO" />

        </div>

        {/* Campaign Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {mockCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
      <p className="text-gray-400 text-sm mb-2">{title}</p>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  )
}

