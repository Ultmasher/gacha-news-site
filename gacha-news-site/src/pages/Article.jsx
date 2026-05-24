import { useParams } from 'react-router-dom'
import articles from '../data/articles'

function Article() {
  const { id } = useParams()

  const article = articles.find(
    (article) => article.id === Number(id)
  )

  return (
    <div className="article-page">
      <img src={article.image} alt="" />

      <h1>{article.title}</h1>

      <p>{article.description}</p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  )
}

export default Article