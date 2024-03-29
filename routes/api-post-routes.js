const express=require('express')
const router=express.Router()

const {getPosts,getPost,addPost,editPost,deletePost}=require('../controllers/api-post-controller')

router.get('/api/posts', getPosts)
router.get('/api/post/:id', getPost)
router.post('/api/post', addPost)
router.put('/api/post/:id', editPost)
router.delete('/api/post/:id',deletePost)

module.exports=router
 

 