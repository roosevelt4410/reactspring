console.log("Promesas");


interface Post {
    quote: string;
    author: string;
  }
  
  async function obtenerPosts(): Promise<Post[]> {
    try {
      const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes', {
        method: 'GET',
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const posts: Post[] = await response.json();
      console.log(posts);
      return posts; 
    } catch (error) {
      console.error('Error al obtener los posts:', error);
      
      return []; 
    }
  }

  obtenerPosts().then((posts) => {
    posts.forEach((post) => {
      console.log(post.quote);
      console.log(post.author);
    });
  })
  .catch((error) => {
    console.error('Error al procesar los posts:', error);
  });



  function obtenerPosts2(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch('https://api.breakingbadquotes.xyz/v1/quotes', {
          method: 'GET',
        })
          .then((response) => {
            if (!response.ok) {
              reject(new Error(`HTTP error! status: ${response.status}`));
              return; // Opcional para salir del bloque `then`
            }
            return response.json();
          })
          .then((data) => {
            if (!Array.isArray(data) || !data.every((post) => typeof post.quote === 'string' && typeof post.author === 'string')) {
              reject(new Error('Unexpected response format from API'));
              return; // Opcional para salir del bloque `then`
            }
            const posts: Post[] = data as Post[];
            resolve(posts);
          })
          .catch((error) => {
            reject(error); // Manejar errores de la API o parsing
          });
      }, 2500);
    });
  }
  
  obtenerPosts()
    .then((posts) => {
      posts.forEach((post) => {
        console.log(post.quote);
        console.log(post.author);
      });
    })
    .catch((error) => {
      console.error('Error al obtener los posts:', error);
    });