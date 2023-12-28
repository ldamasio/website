import React, { useState, useEffect } from 'react'
const axios = require('axios');

function LastArticleContent() {

  const [content, setContent] = useState(null);
  const endpoint = 'https://public-api.wordpress.com/rest/v1.1/sites/ldamasio.wordpress.com/posts/';

  useEffect(() => {
    axios.get(endpoint)
    .then((response) => {
      var responseContent = response.data.posts[0].content;
      setContent(responseContent);
    });
  }, []);


  return (
    <span>
      { content }
    </span>
  )
}

export default LastArticleContent
