import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import {SidebarInjector, SidebarItem} from 'oapack'
import {useRouter} from 'next/router'

const Layout = props => {
  const router = useRouter()
  console.log(router, 'kkk')
  return (
    <div className='page-wrapper'>
      <SidebarInjector
        items={
          <>
            <SidebarItem to='/CV_Ming_YAO.pdf' brief='CV' detail='CV' />
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
            content='initial-scale=1.0, width=device-width'
          />
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
