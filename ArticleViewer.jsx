"use client"

import { useState } from "react"
import "./App.css"

const articles = [
  {
    id: 1,
    title: "Introduction to Niche Content Subscription Networks",
    content:
      "Niche content subscription networks are platforms that cater to specific interests or industries. They provide curated content to subscribers who are passionate about particular topics. These networks offer a more focused and in-depth experience compared to general content platforms.Niche content subscription networks are platforms that cater to specific interests or industries. They provide curated content to subscribers who are passionate about particular topics. These networks offer a more focused and in-depth experience compared to general content platforms.",
  },
  {
    id: 2,
    title: "Benefits of Nicheflare for Content Creators",
    content:
      "Nicheflare offers content creators a unique opportunity to monetize their expertise. By focusing on niche topics, creators can build a dedicated audience willing to pay for high-quality, specialized content. The platform provides tools for easy content management, subscriber analytics, and secure payment processing.Nicheflare offers content creators a unique opportunity to monetize their expertise. By focusing on niche topics, creators can build a dedicated audience willing to pay for high-quality, specialized content. The platform provides tools for easy content management, subscriber analytics, and secure payment processing.",
  },
  {
    id: 3,
    title: "How Nicheflare Enhances User Experience",
    content:
      "Nicheflare is designed with the user in mind, offering a seamless and intuitive interface for discovering and consuming niche content. Features such as personalized recommendations, bookmarking, and cross-device synchronization ensure that subscribers can easily access the content they love, anytime and anywhere.Nicheflare is designed with the user in mind, offering a seamless and intuitive interface for discovering and consuming niche content. Features such as personalized recommendations, bookmarking, and cross-device synchronization ensure that subscribers can easily access the content they love, anytime and anywhere.",
  },
]

const ArticleViewer = () => {
  const [selectedArticle, setSelectedArticle] = useState(null)

  const handleArticleClick = (article) => {
    setSelectedArticle(selectedArticle?.id === article.id ? null : article)
  }

  return (
    <div className="article-viewer">
      <h1>Nicheflare Articles</h1>
      <div className="article-list">
        {articles.map((article) => (
          <div
            key={article.id}
            className={`article-item ${selectedArticle?.id === article.id ? "active" : ""}`}
            onClick={() => handleArticleClick(article)}
          >
            <h2>{article.title}</h2>
            {selectedArticle?.id === article.id && (
              <div className="article-content">
                <p>{article.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArticleViewer

