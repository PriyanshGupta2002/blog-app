import React from 'react'
import PostGrid from '../posts/post-grid'
import classes from './featuredPost.module.css'
const FeaturedPosts = (props) => {
  const {posts} = props
  return (
    <section className={classes.latest}>
        <h2>Featured Posts</h2>
        <PostGrid posts={posts}/>
    </section>
  )
}

export default FeaturedPosts