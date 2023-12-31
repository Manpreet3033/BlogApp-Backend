const Comment = require('../Models/commentModel')
const Post = require('../Models/postModel')

exports.createComment = async(req,res) => {
    try{
        const {post,user,body} = req.body;
        const comment = await new Comment({
            post,
            user,
            body
        })
        const savedComment = await comment.save()
        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {comments: savedComment._id}},{new: true})
        res.json({
            success: true,
            comment: savedComment,
            post: updatedPost
        })
    }catch(err){
        res.status(500).json({
            success: false,
            error: err.message,
        })
    }
}

exports.deleteComment = async(req,res) => {
    try{
        const { post, comment } = req.body
        const deletedComment = await Comment.findOneAndDelete({post:post,_id:comment})
        const updatedPost = await Post.findByIdAndUpdate(post,{$pull: {comments: deletedComment._id}},{new: true})
        res.json({
            post: updatedPost
        })
    }catch(err){
        res.status(500).json({
            success: false,
            error: err.message,
        })
    }
}

exports.retrieveComments = async(req,res) => {
    try{
        const {post} = req.body;
        const comment = await Post.findById(post).select("comments").populate("comments")
        res.json({
            comments: comment
        })
    }catch(err){
        res.status(500).json({
            success: false,
            error: err.message,
        })
    }
}