
import React from 'react'
import PostContent from '../../components/posts/post-detail/post-content'
import { getAllPosts, getPostData } from '../../lib/post-util'
import Head from 'next/head'
const AllPostDetail = (props) => {
  return (
    <>
    <Head>
      <title>{props.getPostBySlug.title}</title>
      <meta name='description' content={props.getPostBySlug.excerpt} />
    </Head>
    <PostContent singlePost={props.getPostBySlug}/>
    </>
  )
}
export async function getStaticPaths() {
  const getPosts = getAllPosts()
  const id = getPosts.map((post)=>{return {params:{slug:post.slug}}})
  return {
    paths: id,
    fallback: false// See the "fallback" section below
  };
}
export const getStaticProps=async(context)=>{
  const {params}=context
  const slug=params.slug
  const getPost = getPostData(slug)
return {
  props:{
    getPostBySlug:getPost
  }
}
}
export default AllPostDetail