import dramas from '../data/dramas'
import { Link } from 'react-router-dom'

function Drama() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-4">
          Trending Gacha Drama
        </h1>

        <p className="text-slate-400 mb-12">
          Community controversies, backlash, banner drama, and player reactions.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dramas.map((drama) => (
            <Link
              key={drama.id}
              to={`/drama/${drama.id}`}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:scale-105 transition duration-300"
            >
              <img
                src={drama.image}
                alt={drama.title}
                className="w-full h-56 object-cover"
              />
             <div className="p-5">

  <span className="inline-block bg-red-500 text-white text-xs px-3 py-1 rounded-full mb-3">
    {drama.tag}
  </span>

  <p className="text-purple-400 text-sm mb-2">
   {drama.game} • {drama.date} • {drama.time}
  </p>
                <h2 className="text-2xl font-bold mb-3 text-white">
                  {drama.title}
                </h2>

                <p className="text-red-400 text-sm mb-3">
                  Drama Level: {drama.level}
                </p>

                <div className="flex gap-4 text-sm text-slate-500 mb-3">
                  <span>🔥 {drama.likes}</span>
                  <span>💬 {drama.comments}</span>
                </div>

                <p className="text-slate-400">
                  {drama.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Drama