import React, { Fragment } from 'react'
import FeaturedPosts from '../components/home-page/FeaturedPosts'
import Hero from '../components/home-page/Hero'
import {getFeaturedPosts } from '../lib/post-util'
import Head from 'next/head'
const HomePage = (props) => {

  return (
    <Fragment>
      <Head>
        <title>
          Priyansh&apos;s Blog
        </title>
        <meta name='description' content={`Welcome to Priyansh's blog. Here I blog about latest frontend frameworks`}/>
      </Head>
      <Hero/>
      <FeaturedPosts posts={props.posts}/>
    </Fragment>
  )
}
export const getStaticProps=async()=>{
  const posts = getFeaturedPosts()
  return{
    props:{
      posts
    },
    revalidate:10
  }
}

export default HomePage
