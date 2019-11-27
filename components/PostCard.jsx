import React from 'react'
import {Card} from 'oapack'
import Link from 'next/link'

const PostCard = props => {
  return (
    <Card
      // {...props}
      className={`post ${props.className ? props.className : ''}`}>
      <div>
        {props.title &&
          (typeof props.url !== 'undefined' ? (
            <a href={props.url} className='post-title oa-underline'>
              {props.title}
            </a>
          ) : (
            <Link href={props.href}>
              <span className='post-title oa-underline'>{props.title}</span>
            </Link>
          ))}
        <span className='post-content'>{props.children}</span>
      </div>
      {props.coverUrl && (
        <img className='post-img' src={props.coverUrl} alt='' />
      )}
    </Card>
  )
}

export default PostCard
