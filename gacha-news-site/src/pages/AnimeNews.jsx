import { useEffect, useState } from 'react'

function AnimeNews() {
  const [anime, setAnime] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function fetchAnime() {

      const response = await fetch(
        'https://api.jikan.moe/v4/top/anime'
      )

      const data = await response.json()

      setAnime(data.data)

      setLoading(false)
    }

    fetchAnime()

  }, [])

  if (loading) {
    return (
      <div className="text-white p-20">
        Loading anime...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-20">

      <h1 className="text-4xl font-bold mb-10">
        Top Anime
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {anime.slice(0, 8).map((item) => (

          <div
            key={item.mal_id}
            className="bg-slate-900 rounded-2xl overflow-hidden"
          >

            <img
              src={item.images.jpg.image_url}
              alt=""
              className="w-full h-80 object-cover"
            />

            <div className="p-4">

              <h2 className="font-bold">
                {item.title}
              </h2>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default AnimeNews