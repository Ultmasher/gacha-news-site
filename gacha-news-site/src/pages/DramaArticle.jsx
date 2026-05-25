import { useParams } from 'react-router-dom'
import dramas from '../data/dramas'

function DramaArticle() {
  const { id } = useParams()

  const drama = dramas.find(
    (item) => item.id === Number(id)
  )

  if (!drama) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Drama not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-20">

      <div className="max-w-4xl mx-auto">

        <img
          src={drama.image}
          alt={drama.title}
          className="w-full rounded-2xl mb-8"
        />

        <p className="text-purple-400 mb-4">
          {drama.game}
        </p>

        <h1 className="text-5xl font-bold mb-6">
          {drama.title}
        </h1>

        <p className="text-red-400 mb-6">
          Drama Level: {drama.level}
        </p>

        <p className="text-slate-300 text-lg leading-8">
          {drama.summary}
        </p>

      </div>

    </div>
  )
}

export default DramaArticle