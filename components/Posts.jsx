import './_posts.scss'

import { Card } from 'oapack'
import Link from 'next/link'
import React from 'react'

export default function Posts({ zmd }) {
  return (
    <Card className='async-article-posts'>
      {Object.values(zmd.slice(-7, zmd.length)).map((v, i) => {
        const url = '/' + v.id.split('-').join('')
        return (
          <Link href={url} key={'post' + i} as={url}>
            <a className='async-article-posts__link' target='_blank'>
              {v.Name}
            </a>
          </Link>
        )
      })}
      <h3>芝麻地 - 关于设计与编程的Newsletter</h3>
    </Card>
  )
}
