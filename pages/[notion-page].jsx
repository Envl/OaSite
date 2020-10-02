import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import './post/_postPage.scss'

export default function NotionPage({html, heading, exists}) {
  return exists ? (
    <Layout heading={heading}>
      <div className='post-page'>
        <h1>{heading}</h1>
        <div dangerouslySetInnerHTML={{__html: html}}></div>
      </div>
    </Layout>
  ) : (
    'This page does not exist.'
  )
}

NotionPage.getInitialProps = async ({req, query}) => {
  const pageID = query['notion-page']
  const res = await fetch('https://potion-api.now.sh/html?id=' + pageID)
  const html = await res.text()
  let result = await (
    await fetch(
      'https://potion-api.now.sh/table?id=b13a7a6b113d423895424dd2a46816e8',
    )
  ).json()
  result = result.filter((item) => item.id.split('-').join('') === pageID)[0]
  const heading = result ? result.fields.Name : null
  return {html, heading, exists: result ? true : false}
}
