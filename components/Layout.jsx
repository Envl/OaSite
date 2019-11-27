import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import {SidebarInjector, SidebarItem} from 'oapack'

const Layout = props => {
  return (
    <div className='page-wrapper'>
      <SidebarInjector
        items={
          <>
            <SidebarItem to='/CV_Ming_YAO.pdf' brief='CV' detail='CV' />
            <SidebarItem to='/projects' brief='P.' detail='Projects' />
            <SidebarItem
              to='/'
              brief='H.'
              detail='Home'
              // className='sidebar-active'
            />
          </>
        }>
        <Head>
          <title className='hidden'>Ming YAO / @GnimOay</title>
          <link rel='icon' href='/icon.png' type='image/jpg' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-REWTHY2S75'></script>
        </Head>
        {props.children}
      </SidebarInjector>
      <Footer />
    </div>
  )
}

export default Layout
