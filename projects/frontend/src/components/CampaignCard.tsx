interface Campaign {
  id: number
  title: string
  description: string
  goal: number
  raised: number
}

interface Props {
  campaign: Campaign
}

export default function CampaignCard({ campaign }: Props) {
  const percent = (campaign.raised / campaign.goal) * 100

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-2">{campaign.title}</h2>
      <p className="text-gray-400 mb-2">{campaign.description}</p>

      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="text-sm text-gray-400">
        {campaign.raised} / {campaign.goal} ALGO
      </p>

      <button className="mt-4 px-4 py-2 bg-purple-600 rounded-lg">
        Fund Campaign
      </button>
    </div>
  )
}
