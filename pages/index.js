import { SidebarInjector, SidebarItem } from 'oapack'
import { blogsTableUrl, zmdTableUrl } from '../Constants'
import { useEffect, useState } from 'react'

import Contents from '../components/Contents'
import Footer from '../components/Footer'
import Head from 'next/head'
import Link from 'next/link'
import Me from '../components/Me'
import { setModel } from 'flooks'
import { ICONS } from '../components/icons'

const filters = {
  state: {
    postType: 'all',
  },
  actions: ({ model, setState }) => ({
    updateType(newType) {
      if (newType === 'Interaction') {
        newType = ['Tangible Interaction', 'Interaction Design', 'Interaction']
      }
      setState({ postType: newType })
    },
  }),
}
setModel('filters', filters)

function Index({ zmd, blogs }) {
  const [opts, setOpts] = useState(['job', 'sidebar', 'footer'])

  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', 'UA-150711963-4')
  }, [])

  return (
    <SidebarInjector
      className={
        (opts && opts.includes('sidebar') ? 'visible' : 'opt-hide') +
        ` side-wrapper`
      }
      items={
        <>
          <SidebarItem
            to="https://github.com/envl"
            target="_blank"
            brief={<ICONS name="github" />}
            detail={
              <span>
                <ICONS name="github" />
                Github
              </span>
            }
          />
          <SidebarItem
            to="https://t.me/didnotponder"
            target="_blank"
            brief={<ICONS name="telegram" />}
            detail={
              <span>
                <ICONS name="telegram" style={{ marginRight: 1.1 }} />
                Channel
              </span>
            }
          />
          <SidebarItem
            to="https://twitter.com/SesamPicr"
            target="_blank"
            brief={<ICONS name="twitter" />}
            detail={
              <span>
                <ICONS name="twitter" />
                Twitter
              </span>
            }
          />
          <SidebarItem
            to="https://zmd.hedwig.pub/"
            target="_blank"
            brief={<ICONS name="news-paper" />}
            detail={
              <span>
                <ICONS name="news-paper" />
                芝麻地
              </span>
            }
          />
          <SidebarItem
            to="/"
            brief={<ICONS name="home" />}
            detail={
              <span>
                <ICONS name="home" />
                Home
              </span>
            }
            className="sidebar-active"
          />
        </>
      }
    >
      <Head>
        <title>Ming YAO / @GnimOay</title>
        <meta property="og:title" content="Ming YAO / @GnimOay"></meta>
        <meta name="description" content="not a bad human being." />
        <meta property="og:url" content="https://gnimoay.com"></meta>
        <link rel="icon" href="/icon.png" type="image/png" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, user-scalable=no"
        />
        <script
          defer
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-150711963-4"
        ></script>
      </Head>
      <div className="home-page">
        <div className="home-body">
          <Me setOpts={setOpts} opts={opts} />
          <Contents opts={opts} zmd={zmd} blogs={blogs} />
        </div>
        <Footer
          className={opts && opts.includes('footer') ? 'visible' : 'opt-hide'}
        />
      </div>
    </SidebarInjector>
  )
}

async function loadPosts(tableUrl) {
  const rsp = await fetch(tableUrl, { method: 'POST' })
  const posts = (await rsp.json()).results
  posts.forEach(p => {
    p.id = p.id.split('-').join('')
  })
  return posts
}

export async function getStaticProps() {
  let zmd = null,
    blogs = null
  try {
    zmd = await loadPosts(zmdTableUrl)
    blogs = (await loadPosts(blogsTableUrl)).filter(
      p => p.properties.public.checkbox
    ) // zmd的post没设置public属性
  } catch (err) {
    console.log(err)
    zmd = null
    blogs = null
  }
  return {
    props: {
      zmd: zmd,
      blogs: blogs,
    },
    revalidate: 60, // per 60 seconds
  }
}
export default Index
