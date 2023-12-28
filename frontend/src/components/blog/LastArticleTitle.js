import React, { useState, useEffect } from 'react'
const axios = require('axios');

function LastArticleTitle() {

  const [title, setTitle] = useState(null);
  const endpoint = 'https://public-api.wordpress.com/rest/v1.1/sites/ldamasio.wordpress.com/posts/';

  useEffect(() => {
    axios.get(endpoint)
    .then((response) => {
      var responseTitle = response.data.posts[0].title;
      setTitle(responseTitle);
    });
  }, []);


  return (
    <span>
      { title }
    </span>
  )
}

export default LastArticleTitle
