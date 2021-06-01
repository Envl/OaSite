import './post/_postPage.scss'
import './prism.css'

import { blogsTableUrl, zmdTableUrl } from '../Constants'

import Head from 'next/head'
import Hurray from '../components/Hurray'
import Layout from '../components/Layout'
import { useEffect } from 'react'

export default function NotionPage({ html, heading, exists, blockMap }) {
  if (!html) {
    return 'Oops..'
  }
  return (
    <>
      <Head>
        <script src={require('../prism')} defer async></script>
      </Head>
      <Hurray />
      <Layout heading={heading || 'Page does not exist'}>
        {exists ? (
          <div className="post-page">
            <h1>{heading}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
          </div>
        ) : (
          // <NotionRenderer blockMap={blockMap}/>
          'This page does not exist.'
        )}
      </Layout>
    </>
  )
}

const tableList = [zmdTableUrl, blogsTableUrl]
async function loadPostsEntries() {
  const rsps = await Promise.all(tableList.map(url => fetch(url)))
  return (await Promise.all(rsps.map(r => r.json())))
    .reduce((acc, cur) => [...acc, ...cur], [])
    .filter(p => p.fields.public || p.emoji) // zmd的post没设置public属性
}

export async function getStaticPaths() {
  const results = await loadPostsEntries()
  const paths = results.map(d => ({
    params: {
      'notion-pageId': d.id.split('-').join(''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const pageId = params['notion-pageId']
  const res = await fetch('https://potion.gnimoay.com/html?id=' + pageId)
  const html = await res.text()
  let results = await loadPostsEntries()
  results = results.filter(item => item.id.split('-').join('') === pageId)[0]
  const heading = results ? results.fields.Name : null

  return { props: { html, heading, exists: !!results }, revalidate: 6 } //per 6 secs
}
