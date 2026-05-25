import tierlists from '../data/tierlists'
import { Link } from 'react-router-dom'

function TierLists() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-4">
          Gacha Tier Lists
        </h1>

        <p className="text-slate-400 mb-12">
          Meta rankings, strongest characters, best teams, and updated tier lists.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {tierlists.map((tier) => (

            <Link
              key={tier.id}
              to={`/tier-lists/${tier.id}`}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:scale-105 transition duration-300"
            >

              <img
                src={tier.image}
                alt={tier.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">

                <p className="text-purple-400 text-sm mb-2">
                  {tier.game}
                </p>

                <h2 className="text-2xl font-bold mb-3">
                  {tier.title}
                </h2>

                <span className="inline-block bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {tier.rank}
                </span>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </div>
  )
}

export default TierLists