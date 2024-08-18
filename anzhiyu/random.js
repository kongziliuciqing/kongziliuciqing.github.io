var posts=["undefined这是一篇新的博文2/","undefined这是一篇新的博文/","undefinedTextr-Go-最好用的在线接打电话神奇-免费接打电话/","undefinedhello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };