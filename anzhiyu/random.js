var posts=["undefined这是一篇新的博文2/","undefined这是一篇新的博文/","undefinedhello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };