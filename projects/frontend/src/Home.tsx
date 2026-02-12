import { motion } from "framer-motion"

type Props = {
  goStudent: () => void
  goSponsor: () => void
}

export default function Home({ goStudent, goSponsor }: Props) {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white scroll-smooth">

      {/* Navbar */}
      <div className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <h1 className="text-lg font-semibold tracking-wide">
            🎓 Sponsphere
          </h1>
          <div className="space-x-6 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#stats" className="hover:text-white transition">Stats</a>
            <a href="#cta" className="hover:text-white transition">Join</a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Web3 Campus Sponsorship <br />
          Built on Algorand
        </motion.h1>

        <p className="text-gray-400 max-w-2xl mb-10">
          Connecting student creators with sponsors transparently using
          blockchain technology. Secure. Fast. Trustless.
        </p>

        <div className="space-x-6">
          <button
            onClick={goStudent}
            className="px-6 py-3 bg-green-600 rounded-xl hover:scale-105 transition"
          >
            I’m a Student
          </button>

          <button
            onClick={goSponsor}
            className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition"
          >
            I’m a Sponsor
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-24 bg-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-semibold mb-16">
            Growing Web3 Ecosystem
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <StatCard number="1,250+" label="Registered Students" />
            <StatCard number="320+" label="Active Sponsors" />
            <StatCard number="480+" label="Campaigns Funded" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-semibold text-center mb-20">
            Why Sponsphere?
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            <FeatureCard
              title="On-Chain Transparency"
              description="All sponsorship transactions are verified on Algorand blockchain."
            />

            <FeatureCard
              title="Secure Wallet Integration"
              description="Connect with Pera & Defly wallets securely and instantly."
            />

            <FeatureCard
              title="Direct Student Access"
              description="Sponsors connect directly with verified campus campaigns."
            />

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className="py-32 bg-gradient-to-r from-green-600/20 to-blue-600/20 text-center"
      >
        <h2 className="text-4xl font-semibold mb-6">
          Ready to Launch Your Campaign?
        </h2>

        <p className="text-gray-400 mb-10">
          Join the future of decentralized campus sponsorship.
        </p>

        <button
          onClick={goStudent}
          className="px-8 py-4 bg-green-600 rounded-2xl text-lg hover:scale-105 transition"
        >
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 border-t border-white/10">
        © 2026 Sponsphere • Built on Algorand
      </footer>

    </div>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-md">
      <p className="text-4xl font-bold mb-3">{number}</p>
      <p className="text-gray-400">{label}</p>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/10 transition">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
