import Link from 'next/link'
import Head from 'next/head'
import {useEffect, useState} from 'react'
import {
  Button,
  Card,
  DropDown,
  SidebarInjector,
  SidebarItem,
  CubeMenu,
  FilterGroup,
} from 'oapack'
import ReactGA from 'react-ga'
import Footer from '../components/Footer'
import PostCard from '../components/PostCard'

import './_index.scss'

function Me({setOpts, opts}) {
  return (
    <div className='me-block'>
      <div className='me-status'>❤️: 🎮🍟📷🚴‍♂️🏸🎵🏓</div>
      <Button type='toggle' className='btn-hi' pressed='true'>
        {/* <h2>Hi,</h2> */}
        Hi
      </Button>
      <DropDown name=" I'm Ming YAO" className='dscp'>
        <div>a UX Designer</div>
        <div>a Developer</div>
      </DropDown>
      <img src='/me.jpg' alt='' />
      <Button type='toggle' className='btn-i'>
        {/* <h1>I</h1> */}I
      </Button>
      <FilterGroup
        className='block-filters'
        initialFilters={[
          {name: 'c', pushed: false},
          {name: 'o', pushed: false},
          {name: 'd', pushed: true},
          {name: 'e', pushed: true},

          {name: 's', pushed: false},
          {name: 'i', pushed: false},
          {name: 'g', pushed: false},
          {name: 'n', pushed: false},
          {name: ':)', pushed: true, disabled: true},
        ]}
        // defaultIndex/={0}
        onFilterUpdate={e => console.log(e)}
      />
      <FilterGroup
        className='site-filters'
        initialFilters={[
          {name: 'about me', pushed: opts.includes('about me')},
          {name: 'cube', pushed: opts.includes('cube')},
          {name: 'contents', pushed: opts.includes('contents')},
          {name: 'sidebar', pushed: opts.includes('sidebar')},
          {name: 'footer', pushed: opts.includes('footer')},
          {name: 'contact me', pushed: opts.includes('contact me')},
        ]}
        onFilterUpdate={options => {
          setOpts(options)
        }}
      />
      <a
        href='mailto:yyaomingm@outlook.com'
        target='_blank'
        className={`me-contact ${
          opts && opts.includes('contact me') ? 'visible' : 'opt-hide'
        }`}>
        <Card>yyaomingm@outlook.com</Card>
      </a>
    </div>
  )
}

function Posts(props) {
  return (
    <div className={`posts ${props.className ? props.className : ''}`}>
      {[
        'BOOKIO',
        'SEIM',
        'Rugbeats',
        'Bagroutte',
        'ShopWalker',
        'Tangible Browser',
        'OaPack',
        'StyleBox',
        'Spotioid',
      ].map(l => (
        <PostCard className='post-lr' title={l} key={l}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt diam felis, sed tempor est pellentesque vel.
        </PostCard>
      ))}
      <Card className='post'>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt diam felis, sed tempor est pellentesque vel. Mauris tempus
          convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec tincidunt diam felis, sed tempor est pellentesque vel. Mauris
          tempus convallis.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec tincidunt diam felis, sed tempor est pellentesque vel.
          Mauris tempus convallis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec tincidunt diam felis, sed tempor est
          pellentesque vel. Mauris tempus convallis.
        </span>
      </Card>
      <Card className='post'>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt diam felis, sed tempor est pellentesque vel. Mauris tempus
          convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec tincidunt diam felis, sed tempor est pellentesque vel. Mauris
          tempus convallis.
        </span>
      </Card>
    </div>
  )
}
function Contents({opts}) {
  return (
    <div className='content'>
      {/* <Button type='toggle'>test</Button>
      <button>normal</button> */}
      {/* <Button type='toggle' className='site-intro'> */}
      <Card
        className={`site-intro ${
          opts && opts.includes('about me') ? 'visible' : 'opt-hide'
        }`}>
        <p>
          I often think about our actions in the digital world, and in the real
          world.
          <br /> "Is that right? Could it be improved?" "Yes, and still yes."
          <br />
        </p>
        <p>
          To confirm my answer, I'm studying Human-Computer Interaction & Design
          with I&E minor at
          <a
            className='oa-hover-underline'
            href='https://www.kth.se/student/kurser/program/TIVNM/20182/arskurs1?l=en'
            target='_blank'>
            &nbsp;KTH Royal Institute of Technology&nbsp;
          </a>
          and
          <a
            href='https://www.universite-paris-saclay.fr/en/education/master/m2-hcid-eit-digital#presentation-m2'
            target='_blank'
            className='oa-hover-underline'>
            &nbsp;Université Paris-Sud&nbsp;
          </a>
        </p>
        <p>
          With a background of B.E. in Digital Media Technology, I also build🔨
          stuffs.
        </p>
        {/* <p>Now go build something great.</p> */}
      </Card>
      <CubeMenu
        className={`home-cube ${
          opts && opts.includes('cube') ? 'visible' : 'opt-hide'
        }`}
        u=':)'
        f={
          <Link href='/CV_Ming_YAO.pdf'>
            <a className='oa-hover-underline' target='_blank'>
              Resume
            </a>
          </Link>
        }
        r={
          <a
            className='oa-hover-underline'
            href='https://github.com/envl'
            target='_blank'>
            Github
          </a>
        }
      />
      {/* </Button> */}
      {/* <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}></div> */}
      {/* <Card> */}
      <Posts
        className={`${
          opts && opts.includes('contents') ? 'visible' : 'opt-hide'
        }`}
      />
      {/* </Card> */}
    </div>
  )
}

function HomePage() {
  const [opts, setOpts] = useState(
    typeof window !== 'undefined' && window.innerWidth > 768
      ? ['about me', 'cube', 'contents', 'footer']
      : ['about me', 'cube', 'contents', 'sidebar', 'footer'],
  )
  useEffect(() => {
    ReactGA.initialize('G-REWTHY2S75', {debug: true})
    // ReactGA.initialize('G-REWTHY2S75')
    ReactGA.pageview(window.location.pathname + window.location.search)
    // This should be part of your setup
    // This would be in the component/js you are testing
    // This would be how you check that the calls are made correctly
    // ReactGA.testModeAPI.calls.should.eql([
    //   ['create', 'foo', 'auto'],
    //   ['send', 'pageview', '/mypage'],
    // ])
  }, [])

  return (
    <SidebarInjector
      items={
        <>
          <SidebarItem to='/CV_Ming_YAO.pdf' brief='CV' detail='CV' />
          <SidebarItem to='/projects' brief='P.' detail='Projects' />
          <SidebarItem
            to='/'
            brief='H.'
            detail='Home'
            className='sidebar-active'
          />
        </>
      }
      className={`${
        opts && opts.includes('sidebar') ? 'visible' : 'opt-hide'
      }`}>
      <Head>
        <title className='hidden'>Ming YAO / @GnimOay</title>
        <link rel='icon' href='/icon.png' type='image/jpg' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-REWTHY2S75'></script>
      </Head>
      <div className='home-page'>
        <Me setOpts={setOpts} opts={opts} />
        <Contents opts={opts} />
      </div>
      <Footer
        className={` ${
          opts && opts.includes('footer') ? 'visible' : 'opt-hide'
        }`}
      />
    </SidebarInjector>
  )
}
export default HomePage
