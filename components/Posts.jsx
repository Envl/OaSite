import React from 'react'
import {Card} from 'oapack'

import './_posts.scss'

export default function Posts({zmd}) {
  return (
    <Card className='async-article-posts'>
      {Object.values(zmd).map((v, i) => (
        <a
          key={'post' + i}
          className='async-article-posts__link'
          href={'https://www.notion.so/' + v.id.split('-').join('')}
          target='_blank'>
          {v.fields.Name}
        </a>
      ))}
      <h3>芝麻地 - 关于设计与编程的Newsletter</h3>
    </Card>
  )
}
