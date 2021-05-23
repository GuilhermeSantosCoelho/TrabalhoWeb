const express = require('express')
const MongoDB = require('mongodb');
const router = express.Router()
const uri = "mongodb+srv://new_pass:mongodbweb@cluster0.vhdw6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoDB.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

router.get('/', async (req, res) => {
    const posts = await loadPostCollections();
    res.send(await posts.find({}).toArray())
})

//Criar Post
router.post('/', async (req, res) => {
    const posts = await loadPostCollections();

    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
})

//Criar Delete
router.delete('/:id', async (req, res) => {
    const posts = await loadPostCollections();
    await posts.deleteOne({
        _id: new MongoDB.ObjectID(req.params.id)
    });
    res.status(200).send();
})

async function loadPostCollections() {
    await client.connect();
    return client.db('view_express').collection('posts');
}

module.exports = router;