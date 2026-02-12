type Props = {
  goHome: () => void
}

export default function StudentDashboard({ goHome }: Props) {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">
      
      <button
        onClick={goHome}
        className="mb-8 text-gray-400 hover:text-white"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-8">
        Student Dashboard
      </h1>

      <div className="bg-gray-800 p-6 rounded-xl">
        <h2 className="text-xl mb-4">Create Campaign</h2>

        <input
          placeholder="Campaign Title"
          className="w-full p-2 mb-3 bg-gray-700 rounded"
        />

        <textarea
          placeholder="Description"
          className="w-full p-2 mb-3 bg-gray-700 rounded"
        />

        <input
          placeholder="Funding Goal (ALGO)"
          type="number"
          className="w-full p-2 mb-3 bg-gray-700 rounded"
        />

        <button className="px-4 py-2 bg-green-600 rounded">
          Create Campaign
        </button>
      </div>
    </div>
  )
}
