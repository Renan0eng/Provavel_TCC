const express = require('express');

const loginController = require('./controllers/loginController');

const postController = require('./controllers/postController');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Hello World!');
    res.send('Hello World!');
});

router.post('/novopost', postController.novoPost);

router.post('/posts', postController.posts);

router.post('/postImage', postController.postImage);

router.post('/author', postController.author);

router.post('/login', loginController.login);

router.post('/cadastro', loginController.create);

router.post('/validaEmail', loginController.validaEmail);

module.exports = router;

