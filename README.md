# Blog App with Express.js Backend

## Overview
Welcome to my Blog App backend built with Express.js! This application provides the backend functionality for a blog, allowing users to create, retrieve, and delete posts. Users can also engage with posts through comments and likes.

## Features
- **Create Post**: Users can create new blog posts.
- **Retrieve Post**: Get a list of all posts or retrieve a specific post.
- **Delete Post**: Remove unwanted posts.
- **Comments**: Users can leave comments on posts.
- **Likes**: Show appreciation for posts by adding likes.

## Technologies Used
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **Node.js**: JavaScript runtime for server-side development.
- **MongoDB**: Database for storing blog data.

## Setup
1. Clone the repository.
2. 
   git clone https://github.com/Manpreet3033/BlogApp-Backend.git
   
3. Install Dependancies.
   npm install
   
4. Configure MongoDB connection
  
5. Run the Application
   npm start
   

API Endpoints
1. GET /post: retrieve all Posts
2. POST /post/create: create new Post
3. DELETE /post/delete: delete specific post by passing object id of that post in form of json using postman
4. GET /comment: get comments of Specific post by passing Post ID
5. POST /comment/create: create comment on post
6. DELETE /comment/delete: delete comment from post
7. POST /likes/like: create a like on post
8. GET /likes: get likes on a specific post
9. DELETE /likes/unlike: remove like from the post

