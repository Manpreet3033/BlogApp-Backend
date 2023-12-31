const Like = require('../Models/likeModel')
const Post = require('../Models/postModel')

exports.createLike = async(req,res) => {
    try{
        const {post,user} = req.body;
        const like = new Like({
            post,
            user
        })
        const savedLike = await like.save();
        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {likes: savedLike._id}},{new: true}).populate(
            "comments"
        ).populate("likes").exec()
        res.json({
            like: savedLike,
            post: updatedPost
        })
    }catch(err){
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

exports.removeLike = async(req,res) => {
    try{
        const {post,like} = req.body;
        const deleteLike = await Like.findOneAndDelete({post: post,_id: like});
        const updatedPost = await Post.findByIdAndUpdate(post,{$pull: {likes: deleteLike._id}},{new:true}).populate("comments")
        .populate("likes").exec()
        res.json({
            success: true,
            like: deleteLike,
            post: updatedPost
        })
    }catch(err){
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

exports.retrieveLikes = async(req,res) => {
    try{
        const {post} = req.body
        const retrievedLikes = await Post.findById(post).select("likes").populate("likes")
        res.json({
            retrievedLikes: retrievedLikes,
        })
    }catch(err){
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}