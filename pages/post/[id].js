import React, {useEffect, useState} from 'react'
import fetch from 'isomorphic-unfetch'
import './_postPage.scss'
import {SidebarInjector} from 'oapack'
import Layout from '../../components/Layout'
import MD from 'markdown-to-jsx'
import {useRouter} from 'next/router'

const Index = (props) => {
  const router = useRouter()
  return (
    <Layout heading={props.heading}>
      <div className='post-page'>
        {props.status === 200 ? (
          <>
            <h1>{props.heading}</h1>
            <MD className='oa-md'>{props.post}</MD>
          </>
        ) : (
          <div dangerouslySetInnerHTML={{__html: props.post}}></div>
        )}
      </div>
    </Layout>
  )
}
Index.getInitialProps = async function (context) {
  const fname = context.query.id
  const res = await fetch(
    `${
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000'
        : 'https://gnimoay.com'
    }/mdfiles/${fname}.md`,
  )
  const data = await res.text()
  return {
    heading: fname
      .split(' ')
      .reduce((acc, cur) => acc + cur[0].toUpperCase() + cur.substring(1), ''),
    post: data,
    status: res.status,
  }
}

export default Index
