import tierlists from '../data/tierlists'

function TierListPreview() {
  return (
    <div className="mt-20">

      <h2 className="text-4xl font-bold mb-8">
        🏆 Trending Tier Lists
      </h2>

      <div className="grid gap-8 md:grid-cols-3">

        {tierlists.map((tier) => (

          <div
            key={tier.id}
            className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800"
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

              <h3 className="text-2xl font-bold mb-3">
                {tier.title}
              </h3>

              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                {tier.rank}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default TierListPreview