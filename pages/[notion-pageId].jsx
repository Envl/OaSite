import './post/_postPage.scss'

import Hurray from '../components/Hurray'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

export default function NotionPage({ html, heading, exists, blockMap }) {
  if (!html) {
    return 'Oops..'
  }
  return (
    <>
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

const zmdTableUrl =
  'https://potion.gnimoay.com/table?id=b13a7a6b113d423895424dd2a46816e8'

export async function getStaticPaths() {
  const result = await (await fetch(zmdTableUrl)).json()
  const paths = result.map(d => ({
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
  let result = await (await fetch(zmdTableUrl)).json()
  result = result.filter(item => item.id.split('-').join('') === pageId)[0]
  const heading = result ? result.fields.Name : null

  return { props: { html, heading, exists: !!result }, revalidate: 60 } //per 60 secs
}
