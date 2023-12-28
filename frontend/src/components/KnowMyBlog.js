import LastArticleTitle from './blog/LastArticleTitle'
import LastArticleContent from './blog/LastArticleContent'

function KnowMyBlog() {

  return (
    <div>
      <h2> Artigos</h2>
      <h6>Conheça o meu&nbsp;
        <a
          className="App-link"
          href="blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
      </h6>
      <h5>
        Último artigo: 
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
