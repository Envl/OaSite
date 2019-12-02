import React from 'react'
import {Card} from 'oapack'
import Link from 'next/link'
import './_postCard.scss'

const PostCard = ({data, ...props}) => {
  return (
    <Card
      // {...props}
      className={`post ${props.className ? props.className : ''}`}>
      <div className='card-text'>
        {data.title &&
          (typeof data.url !== 'undefined' ? (
            <a
              target='_blank'
              href={data.url}
              className='post-title oa-underline'>
              {data.title}
            </a>
          ) : (
            <Link href={props.href}>
              <a target='_blank' className='post-title oa-underline'>
                {data.title}
              </a>
            </Link>
          ))}
        <span className='post-content'>{props.children}</span>
        {data.tags && (
          <div className='tag-list'>
            {data.tags.map(tag => (
              <div
                key={tag}
                className={`post-tag ${tag === 'WIP' ? 'tag-wip' : ''}`}>
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>
      {data.coverUrl && <img className='post-img' src={data.coverUrl} alt='' />}
    </Card>
  )
}

export default PostCard
