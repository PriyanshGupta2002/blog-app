import React, { Fragment } from 'react'
import AllPosts from '../../components/posts/AllPosts'
import { getAllPosts } from '../../lib/post-util'
import Head from 'next/head'
const CompletePost = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All Blogs by Priyansh</title>
        <meta name='description' content='Welcome to the all blog page here you can see all the frontend blogs' />
      </Head>
       <AllPosts posts={props.posts}/>
    </Fragment>
  )
}
export const getStaticProps=async()=>{
  const posts = getAllPosts()
  return{
    props:{
      posts
    },
    revalidate:10
  }
}

export default CompletePost