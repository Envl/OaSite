import './post/_postPage.scss'

import Hurray from '../components/Hurray'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

export default function NotionPage({ html, heading, exists, blockMap }) {
  return (
    <>
      <Hurray />
      <Layout heading={heading || 'Page does not exist'}>
        {exists ? (
          <div className='post-page'>
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

NotionPage.getInitialProps = async ({ req, query }) => {
  const zmdTableUrl =
    'https://potion.gnimoay.com/table?id=b13a7a6b113d423895424dd2a46816e8'
  const pageID = query['notion-page']
  const res = await fetch('https://potion.gnimoay.com/html?id=' + pageID)
  const html = await res.text()
  let result = await (await fetch(zmdTableUrl)).json()
  result = result.filter((item) => item.id.split('-').join('') === pageID)[0]
  // console.log('id', pageID)
  const heading = result ? result.fields.Name : null
  return { html, heading, exists: result ? true : false }
}
