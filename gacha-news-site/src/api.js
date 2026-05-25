import articles from './data/articles'

export function getArticles() {
  return new Promise((resolve) => {

    setTimeout(() => {
      resolve(articles)
    }, 1000)

  })
}