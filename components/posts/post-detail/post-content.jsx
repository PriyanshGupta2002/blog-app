import React from 'react'
import ReactMarkdown from 'react-markdown'
import classes from './post-content.module.css'
import PostHeader from './post-header'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import  dracula  from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';
import Image from 'next/image'
SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);
const PostContent = (props) => {
  const {singlePost} =props
  const imagePath = `/images/posts/${singlePost.slug}/${singlePost.image}`
  const coustomRenderers={
    p(paragraph){
      const {node} = paragraph
      if (node.children[0].tagName==='img') {
        const image = node.children[0]

        return (
        <div className={classes.image}>
          <Image src={`/images/posts/${singlePost.slug}/${image.properties.src}`} width={500} height={250} alt={image.alt}/>
        </div>
      )}
      return <p>{paragraph.children}</p>
    },
    code(code){
      const {language,children} = code
      return <SyntaxHighlighter language={language} style={dracula} >
        {children}
        </SyntaxHighlighter> 
    }
  }
  return (
   <article className={classes.content}>
    <PostHeader title={singlePost.title} image={imagePath}/>
    <ReactMarkdown components={coustomRenderers}>{singlePost.content}</ReactMarkdown>
   </article>
  )
}

export default PostContent