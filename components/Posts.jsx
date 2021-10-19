import { Card } from 'oapack'
import Link from 'next/link'
import React from 'react'

function renderPostLink(post) {
  return (
    <Link href={post.url} key={post.url} as={post.id}>
      <a className="notion-post-link" target="_blank">
        {post.properties.Name.title[0].plain_text}
      </a>
    </Link>
  )
}

export function ZMDPosts({ zmd }) {
  console.log('zmd', zmd)
  return (
    <Card className="zmd-posts">
      <h3>芝麻地 - 关于设计与编程的Newsletter</h3>
      {zmd.map(renderPostLink)}
    </Card>
  )
}

export function BlogPosts({ posts }) {
  return (
    <div className="blog-posts">
      <h2>随便写点什么</h2>
      {posts.map(renderPostLink)}
    </div>
  )
}
