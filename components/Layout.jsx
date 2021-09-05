import './_layout.scss'
import '../prism.css'

import React, { useEffect, useRef, useState } from 'react'
import { SidebarInjector, SidebarItem } from 'oapack'

import Footer from '../components/Footer'
import Head from 'next/head'
import Hurray from './Hurray'
import prismjs from '../prism'
import { useRouter } from 'next/router'

const Layout = props => {
  const canvas = useRef(null)
  const router = useRouter()

  const drawProgress = () => {
    const max = document.body.clientHeight - window.innerHeight
    const prog = window.scrollY / max
    const ctx = canvas.current.getContext('2d')
    ctx.clearRect(0, 0, 6, 300)
    ctx.fillRect(0, 0, 6, prog * 300)
    window.requestAnimationFrame(drawProgress)
  }

  useEffect(() => {
    const max = document.body.clientHeight - window.innerHeight
    const ctx = canvas.current.getContext('2d')
    ctx.fillStyle = 'rgb(74, 76, 163)'
    const prog = window.scrollY / max
    drawProgress()
  }, [])

  const myTitle = `${
    props.heading
      ? props.heading
      : router.query.id
      ? router.query.id
      : /\/post\/.*/.exec(router.pathname)[0].substr(6)
  } / @GnimOay`

  return (
    <div className={'page-wrapper ' + (props.className ? props.className : '')}>
      <Head>
        <title>{myTitle}</title>
        <meta property="og:title" content={myTitle}></meta>
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
      <Hurray />
      <canvas
        className="prog-canva"
        width="6"
        height="300"
        ref={canvas}
      ></canvas>
      <SidebarInjector
        items={
          <>
            <SidebarItem
              to="https://zmd.hedwig.pub/"
              target="_blank"
              brief="芝."
              detail="芝麻地"
            />
            <SidebarItem to="/" brief="H." detail="Home" />
          </>
        }
      >
        {props.children}
      </SidebarInjector>
      <Footer />
    </div>
  )
}

export default Layout
