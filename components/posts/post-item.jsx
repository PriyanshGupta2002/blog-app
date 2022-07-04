import React from 'react'
import classes from './post-item.module.css'
import Link from 'next/link'
import Image from 'next/image'
const PostItem = (props) => {
    const {title,date,excerpt,image,slug} = props.postItem
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate=new Date(date).toLocaleString('en-Us',options)
    const imagePath=`/images/posts/${slug}/${image}`
  return (
    <li className={classes.post}>
        <Link href={`/posts/${slug}`}>
            <a >
                <div className={classes.image}>
                    <Image src={imagePath} alt={title} width={300} height={200} layout='responsive'/>
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </a>
        </Link>
    </li>
  )
}

export default PostItem