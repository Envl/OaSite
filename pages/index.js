import './_index.scss'

import { SidebarInjector, SidebarItem } from 'oapack'
import { blogsTableUrl, zmdTableUrl } from '../Constants'
import { useEffect, useState } from 'react'

import Contents from '../components/Contents'
import Footer from '../components/Footer'
import Head from 'next/head'
import Link from 'next/link'
import Me from '../components/Me'
import { setModel } from 'flooks'

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
            to="https://zmd.hedwig.pub/"
            target="_blank"
            brief="芝."
            detail="芝麻地"
          />
          <SidebarItem
            to="/"
            brief="H."
            detail="Home"
            className="sidebar-active"
          />
        </>
      }
    >
      <Head>
        <title>Ming YAO / @GnimOay</title>
        <meta name="description" content="a good human being." />
        <link rel="icon" href="/icon.png" type="image/jpg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
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

async function loadPosts(url) {
  return (await (await fetch(url)).json()).map(post => ({
    ...post,
    Name: post.fields.Name,
  }))
}

export async function getStaticProps() {
  let zmd = null,
    blogs = null
  try {
    zmd = await loadPosts(zmdTableUrl)
    blogs = (await loadPosts(blogsTableUrl)).filter(p => p.fields.public) // zmd的post没设置public属性
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
    revalidate: 6, // per 6 seconds
  }
}
export default Index
