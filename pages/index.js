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
import {withTracker, withFirebase} from '../Helpers'
import Layout from '../components/Layout'
import * as db from '../MyData'
import {setModel, useModel} from 'flooks'

import './_index.scss'

const filters = {
  state: {
    postType: 'all',
  },
  actions: ({model, setState}) => ({
    updateType(newType) {
      if (newType === 'Interaction') {
        newType = ['Tangible Interaction', 'Interaction Design']
      }
      setState({postType: newType})
    },
  }),
}
setModel('filters', filters)

function Me({setOpts, opts}) {
  const {updateType} = useModel('filters', true)
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
      />
      <FilterGroup
        className='site-filters'
        initialFilters={[
          {name: 'about me', pushed: opts.includes('about me')},
          // {name: 'cube', pushed: opts.includes('cube')},
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
      <FilterGroup
        single
        className='type-filter'
        onFilterUpdate={types => {
          updateType(types[0])
        }}
        initialFilters={[
          'Interaction',
          'UX',
          'Web',
          'Game',
          'App',
          {name: 'all', pushed: true},
        ]}
      />
    </div>
  )
}

function PostList(props) {
  const {postType} = useModel('filters')
  return (
    <div className={`posts ${props.className ? props.className : ''}`}>
      {db.postList
        .filter(item => {
          if (postType === 'all' || typeof postType === 'undefined') {
            return true
          } else {
            return typeof postType === 'string'
              ? item.tags.includes(postType)
              : postType.reduce(
                  (pre, cur) => pre || item.tags.includes(cur),
                  false,
                )
          }
        })
        .map(l => (
          <PostCard
            className='post-lr'
            // title={l.title}
            // url={l.url}
            data={l}
            href={'/post/' + l.title.split(' ').join('-')}
            // coverUrl={l.coverUrl}
          >
            {l.brief
              ? l.brief
              : '(Coming Soon...)Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt diam felis, sed tempor est pellentesque vel.'}
          </PostCard>
        ))}

      {/* <Card className='post'>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt diam felis, sed tempor est pellentesque vel. Mauris tempus
          convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec tincidunt diam felis, sed tempor est pellentesque vel. Mauris
          tempus convallis.
        </span>
      </Card> */}
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
          opts && opts.includes('about me') ? 'visible' : 'opt-hide'
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
      <PostList
        className={`${
          opts && opts.includes('contents') ? 'visible' : 'opt-hide'
        }`}
      />
      {/* </Card> */}
    </div>
  )
}

function Index(props) {
  const [opts, setOpts] = useState(
    ['about me', 'contents', 'sidebar', 'footer'],
    // typeof window !== 'undefined' && window.innerWidth > 768
    //   ? ['about me', 'contents', 'footer']
    //   : ['about me', 'contents', 'sidebar', 'footer'],
  )
  useEffect(() => {
    ReactGA.initialize('G-REWTHY2S75')
    ReactGA.pageview(window.location.pathname + window.location.search)
    const log = Object.keys(Object.getPrototypeOf(navigator))
      .filter(k => !['object', 'function'].includes(typeof navigator[k]))
      .reduce(
        (pre, cur) => {
          return {
            ...pre,
            [cur]: navigator[cur],
            hash:
              pre.hash +
              (navigator[cur].toString().length > 0
                ? navigator[cur].toString()[0]
                : ''),
          }
        },
        {
          hash: '',
          timestamps: props.firebase.firestore.FieldValue.arrayUnion(
            Date.now(),
          ),
        },
      )
    log.ipAddr = props.ipAddr
    props.firebase
      .firestore()
      .collection('visitor')
      .doc(log.hash + log.ipAddr.a + '___' + log.ipAddr.b)
      .set(log, {merge: true})
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
      className={opts && opts.includes('sidebar') ? 'visible' : 'opt-hide'}
      items={
        <>
          <SidebarItem
            to='/CV_Ming_YAO.pdf'
            target='_blank'
            brief='CV'
            detail='CV'
          />
          <SidebarItem to='/projects' brief='P.' detail='Projects' />
          <SidebarItem
            to='/'
            brief='H.'
            detail='Home'
            className='sidebar-active'
          />
        </>
      }>
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
        className={opts && opts.includes('footer') ? 'visible' : 'opt-hide'}
      />
    </SidebarInjector>
  )
}
Index = withFirebase(withTracker(Index))
Index.getInitialProps = async function(ctx) {
  return {
    ipAddr: {
      a: ctx.req.connection.remoteAddress,
      b: ctx.req.headers['x-forwarded-for'],
    },
  }
}
export default Index
