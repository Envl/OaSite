import Link from 'next/link'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
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
import Posts from '../components/Posts'
import Footer from '../components/Footer'
import PostCard from '../components/PostCard'
import LazyImg from '../components/LazyImg'
import * as db from '../MyData'
import {setModel, useModel} from 'flooks'
import {jdUrl, copy} from '../Helpers'

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

function Me({setOpts, opts}) {
  const [emailNotice, setEmailNotice] = useState('')
  const {updateType} = useModel('filters', true)
  const [footCount, setFootCount] = useState(0)
  useEffect(() => {
    fetch('https://api.countapi.xyz/get/gnimoay.com/footCount')
      .then((res) => res.json())
      .then((data) => setFootCount(data.value))
    const hash = window.location.hash.replace('#', '').toLowerCase()
    setTimeout(() => {
      if (['interaction', 'ux', 'web', 'game', 'mobile'].includes(hash)) {
        updateType(hash[0].toUpperCase() + hash.substr(1))
      }
    }, 200)
  }, [])
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
      <LazyImg
        src={require('../public/img/me.jpg').preSrc}
        realSrc={'img/me.jpg'}
      />
      {/* <img src={me.preSrc} type='image/webp' alt='' /> */}
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
          {name: 'sidebar', pushed: opts.includes('sidebar')},
          {name: 'footer', pushed: opts.includes('footer')},
          {name: 'contact me', pushed: opts.includes('contact me')},
        ]}
        onFilterUpdate={(options) => {
          setOpts(options)
        }}
      />
      <div
        // href='mailto:hi@gnimoay.com'
        // target='_blank'
        onClick={() => {
          copy('hi@gnimoay.com')
          setEmailNotice('COPIED:')
          setTimeout(() => {
            setEmailNotice('')
          }, 1000)
        }}
        className={`me-contact ${
          opts && opts.includes('contact me') ? 'visible' : 'opt-hide'
        }`}>
        <Card>{emailNotice} hi@gnimoay.com</Card>
      </div>
      <FilterGroup
        single
        className='type-filter'
        onFilterUpdate={(types) => {
          updateType(types[0])
        }}
        initialFilters={[
          {name: 'all', pushed: true},
          'Interaction',
          'UX',
          'Web',
          'Game',
          'Mobile',
        ]}
      />
      <div className='foot'>
        <div>
          {footCount}
          <span> 人来踩过</span>
        </div>
        <Button
          onClick={() => {
            fetch('https://api.countapi.xyz/hit/gnimoay.com/footCount')
            setFootCount(footCount + 1)
          }}>
          <i className='fas fa-shoe-prints'></i>
        </Button>
      </div>
    </div>
  )
}

function PostList(props) {
  const {postType} = useModel('filters')
  return (
    <div className={`posts ${props.className ? props.className : ''}`}>
      <Posts zmd={props.zmd} />

      {db.postList
        .filter((item) => {
          if (postType === 'all' || typeof postType === 'undefined') {
            return true
          } else {
            return typeof postType === 'string'
              ? item.tags.includes(postType)
              : item.tags.some((tag) => postType.includes(tag))
          }
        })
        .map((l) => (
          <PostCard
            key={l.title}
            className='post-lr'
            data={l}
            href={'/post/' + l.title.toLowerCase().split(' ').join('-')}>
            {l.brief
              ? l.brief
              : '(Coming Soon...)Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt diam felis, sed tempor est pellentesque vel.'}
          </PostCard>
        ))}
    </div>
  )
}

function Contents({opts, zmd}) {
  return (
    <div className='content'>
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
          with Innovation & Entrepreneurship Minor at
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
      </Card>
      <CubeMenu
        className='home-cube'
        u={
          <a href='https://www.instagram.com/sesampicr/' target='_blank'>
            <i className='fab fa-instagram'></i>
          </a>
        }
        f={
          <form
            onSubmit={(evt) => {
              evt.preventDefault()
              const inputEl = evt.currentTarget.querySelector('input')
              inputEl.value = ''
              if (inputEl.value == '24678') {
                window.open('/CV_Ming_YAO.pdf', '_blank')
                inputEl.placeholder = 'Code'
              } else {
                inputEl.placeholder = 'Invalid'
              }
            }}>
            <input type='text' placeholder='Code' />
            <button className='oa-hover-underline'>
              Get <br />
              Resume
              {/* </a> */}
            </button>
          </form>
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
      <PostList zmd={zmd} />
    </div>
  )
}

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
            to='https://www.notion.so/63b2e83003f240339ae065011afc88a0'
            target='_blank'
            brief='芝.'
            detail='芝麻地'
          />
          {/* <SidebarItem
            to='/CV_Ming_YAO.pdf'
            target='_blank'
            brief='CV'
            detail='CV'
          /> */}
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
      'https://potion-api.now.sh/table?id=b13a7a6b113d423895424dd2a46816e8',
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
