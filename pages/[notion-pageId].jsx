import { NotionRenderer } from 'react-notion'

import {
  blogsTableUrl,
  notionApi,
  notionBlockMapApi,
  zmdTableUrl,
} from '../Constants'

import Layout from '../components/Layout'
import { useEffect } from 'react'

let notionPosts = []

export default function NotionPage({ html, blocks, blockMap, heading }) {
  if (!blocks && !html && !blockMap) {
    return 'Loading..' // TODO loading animation
  }
  return (
    <Layout heading={heading || 'Page does not exist'}>
      <div className="post-page">
        <h1>{heading}</h1>
        {blockMap && <NotionRenderer blockMap={blockMap} />}
        {html && <div dangerouslySetInnerHTML={{ __html: html }}></div>}
      </div>
    </Layout>
  )
}

async function loadPostsEntries() {
  const tableList = [zmdTableUrl, blogsTableUrl]
  const rsps = await Promise.all(
    tableList.map(url => fetch(url, { method: 'POST' }))
  )
  const posts = (await Promise.all(rsps.map(r => r.json())))
    .map(d => d.results)
    .flat()

  posts.forEach(d => {
    d.id = d.id.split('-').join('')
  })

  notionPosts = posts.filter(
    p => p.properties.public?.checkbox || !p.properties.public
  ) // zmd的post没设置public属性
}

export async function getStaticPaths() {
  await loadPostsEntries()
  const paths = notionPosts.map(d => ({
    params: {
      'notion-pageId': d.id,
    },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const pageId = params['notion-pageId']

  const blockMap = await (await fetch(notionBlockMapApi + pageId)).json()
  // const html = await (await fetch(notionHtmlApi + pageId)).text()

  const heading = (await (await fetch(notionApi + 'blocks/' + pageId)).json())
    .child_page.title

  return { props: { blockMap, heading }, revalidate: 60 } //per 60 secs
}
