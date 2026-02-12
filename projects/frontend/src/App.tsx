import { useState } from "react"
import Home from "./Home"
import StudentDashboard from "./components/StudentDashboard"
import SponsorDashboard from "./components/SponsorDashboard"

type Page = "home" | "student" | "sponsor"

function App() {
  const [page, setPage] = useState<Page>("home")

  if (page === "student") {
    return <StudentDashboard goHome={() => setPage("home")} />
  }

  if (page === "sponsor") {
    return <SponsorDashboard goHome={() => setPage("home")} />
  }

  return (
    <Home
      goStudent={() => setPage("student")}
      goSponsor={() => setPage("sponsor")}
    />
  )
}

export default App
