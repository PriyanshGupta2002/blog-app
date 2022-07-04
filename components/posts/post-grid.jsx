import React from 'react'
import classes from './post-grid.module.css'
import PostItem from './post-item'
import { motion } from 'framer-motion'
const PostGrid = (props) => {
    const {posts} = props
  return (
    <motion.ul className={classes.grid}
    animate={{
      x:0
    }}
    transition={{
      type:"spring",
      stiffness:"60"
    }}
    initial={{
      x:-600
    }}
    
    >
        {posts.map((postItem)=>{return <PostItem key={postItem.slug} postItem={postItem}/>})}
    </motion.ul>
  )
}

export default PostGrid