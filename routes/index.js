const express = require("express");
const router = express.Router();

router.get('/', function(req, res) {
        res.status(200).send('Hello world');
});

 router.get('/posts', function(req, res) {
        res.status(200).send('all posts');
 });


module.exports = router;
