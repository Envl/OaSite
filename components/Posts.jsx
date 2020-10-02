import React from 'react'
import {Card} from 'oapack'
import Link from 'next/link'

import './_posts.scss'

export default function Posts({zmd}) {
  return (
    <Card className='async-article-posts'>
      {Object.values(zmd.slice(-7, zmd.length)).map((v, i) => (
        <Link href={'/' + v.id.split('-').join('')} key={'post' + i}>
          <a className='async-article-posts__link' target='_blank'>
            {v.fields.Name}
          </a>
        </Link>
      ))}
      <h3>芝麻地 - 关于设计与编程的Newsletter</h3>
    </Card>
  )
}
