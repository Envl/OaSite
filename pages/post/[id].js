import React, {useEffect, useState} from 'react'
import fetch from 'isomorphic-unfetch'
import MarkDown from 'react-markdown'
import './_postPage.scss'
import {SidebarInjector} from 'oapack'
import Layout from '../../components/Layout'
import MD from 'markdown-to-jsx'
import {useRouter} from 'next/router'

const Index = props => {
  const router = useRouter()
  return (
    <Layout>
      <div className='post-page'>
        {props.status === 200 ? (
          <>
            <h1>{router.query.id}</h1>
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
  }
}

export default Index
