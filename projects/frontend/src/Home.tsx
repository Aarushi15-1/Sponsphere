// src/components/Home.tsx
import { useState } from "react"
import SponsorDashboard from "./components/SponsorDashboard"
import StudentDashboard from "./components/StudentDashboard"

export default function Home() {
  const [role, setRole] = useState<"student" | "sponsor" | null>(null)

  if (!role) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-6">🎓 Sponsphere</h1>
        <p className="text-gray-400 mb-8">
          Decentralized Student–Sponsor Platform
        </p>

        <div className="space-x-4">
          <button
            onClick={() => setRole("student")}
            className="px-6 py-2 bg-green-600 rounded-lg"
          >
            I am a Student
          </button>

          <button
            onClick={() => setRole("sponsor")}
            className="px-6 py-2 bg-purple-600 rounded-lg"
          >
            I am a Sponsor
          </button>
        </div>
      </div>
    )
  }

  return role === "student" ? <StudentDashboard /> : <SponsorDashboard />
}
