import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import './post/_postPage.scss'

export default function NotionPage({html, heading, exists}) {
  return (
    <Layout heading={heading || 'Page does not exist'}>
      {exists ? (
        <div className='post-page'>
          <h1>{heading}</h1>
          <div dangerouslySetInnerHTML={{__html: html}}></div>
        </div>
      ) : (
        'This page does not exist.'
      )}
    </Layout>
  )
}

NotionPage.getInitialProps = async ({req, query}) => {
  const pageID = query['notion-page']
  const res = await fetch('https://notion-api.gnimoay.com/html?id=' + pageID)
  const html = await res.text()
  let result = await (
    await fetch(
      'https://notion.envl.workers.dev/v1/table/63b2e83003f240339ae065011afc88a0',
    )
  ).json()
  result = result.filter((item) => item.id.split('-').join('') === pageID)[0]
  // console.log('id', pageID)
  const heading = result ? result.Name : null
  return {html, heading, exists: result ? true : false}
}
