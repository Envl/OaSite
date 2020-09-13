import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import {SidebarInjector, SidebarItem} from 'oapack'
import {useRouter} from 'next/router'

const Layout = (props) => {
  const router = useRouter()
  return (
    <div
      className={'page-wrapper ' + (props.className ? props.className : '')}
      // style={{overflowX: 'hidden', overflowY: 'scroll'}}
    >
      <SidebarInjector
        items={
          <>
            <SidebarItem
              to='https://www.notion.so/63b2e83003f240339ae065011afc88a0'
              target='_blank'
              brief='芝.'
              detail='芝麻地'
            />
            {/* <SidebarItem to='/CV_Ming_YAO.pdf' brief='CV' detail='CV' /> */}
            {/* <SidebarItem to='/projects' brief='P.' detail='Projects' /> */}
            <SidebarItem
              to='/'
              brief='H.'
              detail='Home'
              // className='sidebar-active'
            />
          </>
        }>
        <Head>
          <title className='hidden'>
            {props.heading
              ? props.heading
              : router.query.id
              ? router.query.id
              : /\/post\/.*/.exec(router.pathname)[0].substr(6)}
            / @GnimOay
          </title>
          <link rel='icon' href='/icon.png' type='image/jpg' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width, user-scalable=no'
          />
          <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
          <script
            defer
            src='https://www.googletagmanager.com/gtag/js?id=G-REWTHY2S75'></script>
        </Head>
        {props.children}
      </SidebarInjector>
      <Footer />
    </div>
  )
}

export default Layout
