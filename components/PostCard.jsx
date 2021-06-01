import './_postCard.scss'

import { Card } from 'oapack'
import LazyImg from './LazyImg'
import Link from 'next/link'
import React from 'react'
import { removeJdUrl } from '../Helpers'

const PostCard = ({ data, ...props }) => {
  return (
    <Card className={`post ${props.className ? props.className : ''}`}>
      <div className="card-text">
        {data.title &&
          (typeof data.url !== 'undefined' ? (
            <span>
              <a
                target="_blank"
                href={data.url}
                className="post-title oa-underline"
              >
                {data.title}
              </a>
              <span>
                <i className="fas fa-link"></i>
              </span>
            </span>
          ) : (
            <Link href="/post/[id]" as={props.href}>
              <a target="_blank" className="post-title oa-underline">
                {data.title}
              </a>
            </Link>
          ))}
        <span className="post-content">{props.children}</span>
        {data.tags && (
          <div className="tag-list">
            {data.tags.map(tag => (
              <div
                key={tag}
                className={`post-tag ${tag === 'WIP' ? 'tag-wip' : ''} ${
                  tag === 'Mobile' ? 'tag-mob' : ''
                } ${tag === 'Abandoned' ? 'tag-aban' : ''}`}
              >
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>
      {data.coverUrl && (
        <LazyImg
          className="post-img"
          loadingClass="post-img-loading"
          src={require('../public/img/' + removeJdUrl(data.coverUrl)).preSrc}
          realSrc={
            process.env.NODE_ENV !== 'production'
              ? require('../public/img/' + removeJdUrl(data.coverUrl)).src
              : data.coverUrl
          }
          alt=""
        />
      )}
    </Card>
  )
}

export default PostCard
