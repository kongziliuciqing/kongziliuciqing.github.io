var posts=["2024/07/20/这是一篇新的博文2/","2024/07/20/这是一篇新的博文/","2024/07/20/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };