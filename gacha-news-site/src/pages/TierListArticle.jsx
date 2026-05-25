import { useParams } from 'react-router-dom'
import tierlists from '../data/tierlists'

function TierListArticle() {
  const { id } = useParams()

  const tier = tierlists.find(
    (item) => item.id === Number(id)
  )

  if (!tier) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Tier List not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-20">

      <div className="max-w-4xl mx-auto">

        <img
          src={tier.image}
          alt={tier.title}
          className="w-full rounded-2xl mb-8"
        />

        <p className="text-purple-400 mb-4">
          {tier.game}
        </p>

        <h1 className="text-5xl font-bold mb-6">
          {tier.title}
        </h1>

        <span className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full font-bold mb-8">
          {tier.rank}
        </span>

        <p className="text-slate-300 text-lg leading-8">
          This tier list covers the current meta, strongest characters,
          team compositions, and recommended builds for {tier.game}.
        </p>

      </div>

    </div>
  )
}

export default TierListArticle