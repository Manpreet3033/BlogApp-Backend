const express = require('express')
const router = express.Router()
const { createPost, deletePost , retrievePost } = require('../Controllers/createPost')
const { createComment,deleteComment,retrieveComments } = require('../Controllers/createComment')
const { createLike, removeLike, retrieveLikes } = require('../Controllers/createLike')

router.post('/post/create',createPost)
router.post('/post/delete',deletePost)
router.get('/post',retrievePost)
router.get('/comment',retrieveComments)
router.post('/comment/create',createComment)
router.post('/comment/delete',deleteComment)
router.post('/likes/like',createLike)
router.get('/likes',retrieveLikes)
router.post('/likes/unlike',removeLike)

module.exports = router