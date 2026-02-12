import CampaignCard from "./CampaignCard"
import { mockCampaigns } from "../utils/mockData"

export default function SponsorDashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-3xl font-bold mb-8">
        Sponsor Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {mockCampaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
  )
}
