const Post = require('../Models/postModel')

exports.createPost = async(req,res) => {
    try{
        const {title,description} = req.body
        const post = await new Post({
            title,
            description,
        })
        const savedPost = await post.save()
        res.json({
            post: savedPost,
        })
    }catch(err){
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

exports.deletePost = async(req,res) => {
    try{
        const {post} = req.body
        const deletedPost = await Post.findOneAndDelete({_id: post})
        res.json({
            deletedPost: deletedPost
        })
    }catch(err){
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

exports.retrievePost = async(req,res) => {
    try{
        const retrievedPost = await Post.find({}).populate("comments").populate("likes")
        res.json({
            post: retrievedPost,
        })
    }catch(err){
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

