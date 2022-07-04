import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
const postsDirectory=path.join(process.cwd(),'posts')

export const getPostData=(postIdentifier)=>{
    const postSlug= postIdentifier.replace(/\.md$/,'')
    const filePath = path.join(postsDirectory, `${postSlug}.md`)
    const fileContent=fs.readFileSync(filePath, 'utf-8')
    const {data,content}= matter(fileContent)

    const postData={
        slug:postSlug,
        ...data,
        content
    }
    return postData
}
export const getAllPosts=()=>{
    const postFiles=fs.readdirSync(postsDirectory)
    const postData = postFiles.map((postFile)=>{return getPostData(postFile)})
    return postData.sort((postA,postB)=>postA.date>postB.date?-1:1)
}
export const getFeaturedPosts=()=>{
    const postFiles=fs.readdirSync(postsDirectory)
    const postData = postFiles.map((postFile)=>{return getPostData(postFile)})
    const featuredPosts = postData.filter((posts)=>{return posts.isFeatured})
    if (featuredPosts.length===0) {
        return
    }
    else{
        return featuredPosts.sort((postA,postB)=>postA.date>postB.date?-1:1) 
    }
}