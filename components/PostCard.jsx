import React from 'react'
import {Card} from 'oapack'

const PostCard = props => {
  return (
    <Card
      {...props}
      className={`post ${props.className ? props.className : ''}`}>
      <div>
        <span className='post-title oa-underline'>{props.title}</span>
        <span className='post-content'>{props.children}</span>
      </div>
      <img className='post-img' src='/me2.jpg' alt='' />
    </Card>
  )
}

export default PostCard
