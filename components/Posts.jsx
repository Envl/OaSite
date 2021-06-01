import './_posts.scss'

import { Card } from 'oapack'
import Link from 'next/link'
import React from 'react'

export function ZMDPosts({ zmd }) {
  return (
    <Card className="async-article-posts">
      {Object.values(zmd.slice(-7, zmd.length)).map((v, i) => {
        const url = '/' + v.id.split('-').join('')
        return (
          <Link href={url} key={'post' + i} as={url}>
            <a className="async-article-posts__link" target="_blank">
              {v.Name}
            </a>
          </Link>
        )
      })}
      <h3>芝麻地 - 关于设计与编程的Newsletter</h3>
    </Card>
  )
}

export function BlogPosts({ posts }) {
  return (
    <div className="blog-posts">
      <h2>随便写点什么</h2>

      {Object.values(posts).map((v, i) => {
        const url = '/' + v.id.split('-').join('')
        return (
          <Link href={url} key={'post' + i} as={url}>
            <a className="blog-post__link" target="_blank">
              {v.Name}
            </a>
          </Link>
        )
      })}
    </div>
  )
}
