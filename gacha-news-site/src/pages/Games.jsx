import games from '../data/games'

function Games() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-20">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-12">
          Gacha Games
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {games.map((game) => (

            <div
              key={game.id}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:scale-105 transition duration-300"
            >

              <img
                src={game.image}
                alt={game.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-5">

                <h2 className="text-2xl font-bold mb-3">
                  {game.name}
                </h2>

                <p className="text-slate-400">
                  {game.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Games