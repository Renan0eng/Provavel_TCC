const postModel = require('../models/postModel');

const posts = async (req, res) => {
  const posts = await postModel.posts();

  return res.status(200).json(posts);
}

const novoPost = async (req, res) => {
  
    const { authorId, nomeProduto, descricao, descricaoDetalhada, categoria, vr_venda, vr_entrega, image, entrega, quantidade } = req.body;
  
    
    const novoPost = await postModel.novoPost(authorId, nomeProduto, descricao, descricaoDetalhada, categoria, vr_venda, vr_entrega, image, entrega, quantidade);

    return res.status(200).json(novoPost);
}


const postImage = async (req, res) => {
  const { id } = req.body;

  const postImage = await postModel.postImage(id);

  return res.status(200).json(postImage);
}

const author = async (req, res) => {

  const id = req.body.id;

  const author = await postModel.author(id);

  return res.status(200).json(author);
}

module.exports = {
  novoPost,
  postImage,
  author,
  posts
}