import Link from 'next/link'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import {useEffect, useState} from 'react'
import {SidebarInjector, SidebarItem} from 'oapack'
import {setModel} from 'flooks'

import Me from '../components/Me'
import Footer from '../components/Footer'
import Contents from '../components/Contents'

import './_index.scss'

const filters = {
  state: {
    postType: 'all',
  },
  actions: ({model, setState}) => ({
    updateType(newType) {
      if (newType === 'Interaction') {
        newType = ['Tangible Interaction', 'Interaction Design', 'Interaction']
      }
      setState({postType: newType})
    },
  }),
}
setModel('filters', filters)

function Index(props) {
  const [opts, setOpts] = useState(['job', 'sidebar', 'footer'])
  useEffect(() => {
    const _hmt = _hmt || []
    const hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?ae9e7cdc50a29d2859ef293e6caaec12'
    const s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
    //---------------------
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', 'UA-150711963-4')
  }, [])

  return (
    <SidebarInjector
      className={opts && opts.includes('sidebar') ? 'visible' : 'opt-hide'}
      items={
        <>
          <SidebarItem
            to='https://https://zmd.hedwig.pub/'
            target='_blank'
            brief='芝.'
            detail='芝麻地'
          />
          <SidebarItem
            to='/'
            brief='H.'
            detail='Home'
            className='sidebar-active'
          />
        </>
      }>
      <Head>
        <title>Ming YAO / @GnimOay</title>
        <link rel='icon' href='/icon.png' type='image/jpg' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=UA-150711963-4'></script>
      </Head>
      <div className='home-page'>
        <div className='home-body'>
          <Me setOpts={setOpts} opts={opts} />
          <Contents opts={opts} zmd={props.zmd} />
        </div>
        <Footer
          className={opts && opts.includes('footer') ? 'visible' : 'opt-hide'}
        />
      </div>
    </SidebarInjector>
  )
}
Index.getInitialProps = async function (ctx) {
  const zmd = await (
    await fetch(
      'https://notion.envl.workers.dev/v1/table/63b2e83003f240339ae065011afc88a0',
    )
  ).json()
  return {
    zmd: zmd,
    ipAddr: {
      a: ctx.req.connection.remoteAddress,
      b: ctx.req.headers['x-forwarded-for'],
    },
  }
}
export default Index
