const connection = require('./connection');

const posts = async () => {
  const posts = await connection.execute('SELECT * FROM posts');

  return posts[0];
}

const novoPost = async (authorId, nomeProduto, descricao, descricaoDetalhada, categoria, vr_venda, vr_entrega, image, entrega, quantidade) => {

      console.log("image",image);

      quantidade ? quantidade : quantidade = 0;
      entrega ? entrega : vr_entrega = 0;

      log
    
      const novoPost = await connection.execute('INSERT INTO posts (authorId, nome_produto, description, descriptionDetalhada, categoria, vr_venda, vr_entrega, image, entrega, quantidade, venda, nota) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, 0)', [authorId, nomeProduto, descricao, descricaoDetalhada, categoria, vr_venda, vr_entrega, image, entrega, quantidade]);
  
      return novoPost[0];
}

const postImage = async (id) => {
  const postImage = await connection.execute('SELECT * FROM imagens_post WHERE id_post = ?', [id]);

  return postImage[0];
}

const author = async (id) => {

  const author = await connection.execute('SELECT avatar, logado, name FROM users WHERE id = ?', [id]);

  return author[0];
}

module.exports = {
  novoPost,
  postImage,
  author,
  posts
}
