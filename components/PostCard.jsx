import React from 'react'
import {Card} from 'oapack'

const PostCard = props => {
  return (
    <Card
      {...props}
      className={`post ${props.className ? props.className : ''}`}>
      <div>
        {props.title && (
          <span className='post-title oa-underline'>{props.title}</span>
        )}
        <span className='post-content'>{props.children}</span>
      </div>
      {props.coverUrl && (
        <img className='post-img' src={props.coverUrl} alt='' />
      )}
    </Card>
  )
}

export default PostCard
