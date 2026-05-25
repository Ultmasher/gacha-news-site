import dramas from '../data/dramas'
import { Link } from 'react-router-dom'

function LatestDrama() {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-6">
        Latest Drama
      </h2>

      <div className="flex flex-col gap-6">

        {dramas.map((drama) => (

          <Link
            key={drama.id}
            to={`/drama/${drama.id}`}
            className="flex gap-4 hover:opacity-80 transition"
          >

            <img
              src={drama.image}
              alt={drama.title}
              className="w-24 h-24 object-cover rounded-xl"
            />

            <div>

              <p className="text-red-400 text-sm mb-1">
                {drama.tag}
              </p>

              <h3 className="font-bold">
                {drama.title}
              </h3>

              <p className="text-slate-500 text-sm mt-1">
                💬 {drama.comments}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </div>
  )
}

export default LatestDrama