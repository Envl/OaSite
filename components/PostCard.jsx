import { Card } from 'oapack'
// import LazyImg from './LazyImg'
import Link from 'next/link'
import React from 'react'
import { removeJdUrl } from '../Helpers'
import Image from 'next/image'

const PostCard = ({ data, ...props }) => {
  return (
    <Card className={`post ${props.className ? props.className : ''}`}>
      <div className="card-text">
        {data.title &&
          (typeof data.url !== 'undefined' ? (
            <a
              target="_blank"
              href={data.url}
              className="post-title oa-underline"
            >
              {data.title}
            </a>
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
        <Image
          className="post-img"
          width={100}
          height={100}
          src={
            process.env.NODE_ENV !== 'production'
              ? '/../public/img/' + removeJdUrl(data.coverUrl)
              : data.coverUrl
          }
          alt=""
        />
      )}
    </Card>
  )
}

export default PostCard
