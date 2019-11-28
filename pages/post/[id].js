import React, {useEffect, useState} from 'react'
import fetch from 'isomorphic-unfetch'
import MarkDown from 'react-markdown'
import './_postPage.scss'
import {SidebarInjector} from 'oapack'
import Layout from '../../components/Layout'
import MD from 'markdown-to-jsx'

const Index = props => {
  console.log(props.dd, 'uurrrll')
  return (
    <Layout>
      <div className='post-page'>
        {props.status === 200 ? (
          <>
            <MD className='oa-md'>{props.post}</MD>
          </>
        ) : (
          <div dangerouslySetInnerHTML={{__html: props.post}}></div>
        )}
      </div>
    </Layout>
  )
}
Index.getInitialProps = async function(context) {
  const res = await fetch(
    `${
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000'
        : 'https://gnimoay.com'
    }/mdfiles/${context.query.id}.md`,
  )
  const data = await res.text()
  return {
    post: data,
    status: res.status,
    dd: {
      a: context.req.connection.remoteAddress,
      b: context.req.headers['x-forwarded-for'],
    },
  }
}

export default Index
