import LastArticleTitle from './blog/LastArticleTitle'
import LastArticleContent from './blog/LastArticleContent'

function KnowMyBlog() {

  return (
    <div>
      <h2> Articles</h2>
      <h6>Know&nbsp;
        <a
          className="App-link"
          href="blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          my blog
        </a>
      </h6>
      <h5>
        Last article: 
      </h5>
      <h1>
        <LastArticleTitle />
      </h1>
      <h6>
        <LastArticleContent />
      </h6>
    </div>
  )
}

export default KnowMyBlog
