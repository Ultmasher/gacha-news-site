import { useParams } from 'react-router-dom'
import articles from '../data/articles'
import Sidebar from '../components/Sidebar'

function Article() {
  const { id } = useParams()

  const article = articles.find(
    (article) => article.id === Number(id)
  )

 return (
  <div className="min-h-screen bg-slate-950 text-white px-6 py-20">

    <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-4">

      {/* Main Article */}
      <div className="lg:col-span-3">

        <img
          src={article.image}
          alt={article.title}
          className="w-full rounded-2xl mb-8"
        />

        <p className="text-purple-400 mb-4">
          {article.game}
        </p>

        <h1 className="text-5xl font-bold mb-6">
          {article.title}
        </h1>

        <p className="text-slate-300 text-lg leading-8 whitespace-pre-line">
          {article.content}
        </p>

      </div>

      {/* Sidebar */}
      <Sidebar />

    </div>

  </div>
)
}

export default Article