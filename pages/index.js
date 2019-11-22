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
import './_index.scss'

function Me({setOpts, opts}) {
  return (
    <div className='me-block'>
      <div className='me-status'>❤️: 🎮🍟📷🚴‍♂️🏸🎵🏓</div>
      <Button type='toggle' className='btn-hi' pressed={true}>
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
      <Card className='post'>
        <div>
          <img className='post-img' src='/me2.jpg' alt='' />
          <span className='post-title oa-underline'>BOOKIO</span>
          <span className='post-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt diam felis, sed tempor est pellentesque vel.
          </span>
        </div>
      </Card>
      <Card className='post post-lr'>
        <div>
          <span className='post-title oa-underline'>SEIM</span>
          <span className='post-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt diam felis, sed tempor est pellentesque vel.
          </span>
        </div>
        <img className='post-img' src='/me2.jpg' alt='' />
      </Card>
      <Card className='post'>
        <div>
          <img className='post-img' src='/me2.jpg' alt='' />
          <span className='post-title oa-underline'>BOOKIO</span>
          <span className='post-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt diam felis, sed tempor est pellentesque vel.
          </span>
        </div>
      </Card>
      <Card className='post post-lr'>
        <div>
          <span className='post-title oa-underline'>SEIM</span>
          <span className='post-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt diam felis, sed tempor est pellentesque vel.
          </span>
        </div>
        <img className='post-img' src='/me2.jpg' alt='' />
      </Card>
      <Card className='post'>
        <div>
          <img className='post-img' src='/me2.jpg' alt='' />
          <span className='post-title oa-underline'>BOOKIO</span>
          <span className='post-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt diam felis, sed tempor est pellentesque vel.
          </span>
        </div>
      </Card>
      <Card className='post post-lr'>
        <div>
          <span className='post-title oa-underline'>SEIM</span>
          <span className='post-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt diam felis, sed tempor est pellentesque vel.
          </span>
        </div>
        <img className='post-img' src='/me2.jpg' alt='' />
      </Card>
      <Card className='post'>
        <div>
          <img className='post-img' src='/me2.jpg' alt='' />
          <span className='post-title oa-underline'>BOOKIO</span>
          <span className='post-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt diam felis, sed tempor est pellentesque vel.
          </span>
        </div>
      </Card>
      <Card className='post post-lr'>
        <div>
          <span className='post-title oa-underline'>SEIM</span>
          <span className='post-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt diam felis, sed tempor est pellentesque vel.
          </span>
        </div>
        <img className='post-img' src='/me2.jpg' alt='' />
      </Card>
      <Card className='post'>
        <div>
          <img className='post-img' src='/me2.jpg' alt='' />
          <span className='post-title oa-underline'>BOOKIO</span>
          <span className='post-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt diam felis, sed tempor est pellentesque vel.
          </span>
        </div>
      </Card>
      <Card className='post post-lr'>
        <div>
          <span className='post-title oa-underline'>SEIM</span>
          <span className='post-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt diam felis, sed tempor est pellentesque vel.
          </span>
        </div>
        <img className='post-img' src='/me2.jpg' alt='' />
      </Card>
      <Link href='/post/[id]'>
        <Card className='post'>
          <span className='post-title oa-underline'>OaPack</span>
          <span className='post-content'>
            With the intention to create a playful UI package and with the
            inspiration from pop art, I've created an UI component library for
            React.js. It is partly used in my website now :)
          </span>
        </Card>
      </Link>
      <Card className='post'>
        <span className='post-title oa-underline'>Rugbeats</span>
        <span className='post-content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt diam felis, sed tempor est pellentesque vel.
        </span>
      </Card>
      <Card className='post'>
        <span className='post-title oa-underline'>Shop Walker</span>
        <span className='post-content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt diam felis, sed tempor est pellentesque vel.
        </span>
      </Card>
      <Card className='post'>
        <span className='post-title oa-underline'>Bagroutte</span>
        <span className='post-content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt diam felis, sed tempor est pellentesque vel.
        </span>
      </Card>
      <Card className='post'>
        <span className='post-title oa-underline'>
          Tangible Browsing Interaction
        </span>
        <span className='post-content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt diam felis, sed tempor est pellentesque vel.
        </span>
      </Card>
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
      <Card className='post'>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt diam felis, sed tempor est pellentesque vel. Mauris tempus
          convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec tincidunt diam felis, sed tempor est pellentesque vel. Mauris
          tempus convallis.convallis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec tincidunt diam felis, sed tempor est
          pellentesque vel. Mauris tempus convallis.convallis. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Donec tincidunt diam felis, sed
          tempor est pellentesque vel. Mauris tempus convallis.convallis. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt
          diam felis, sed tempor est pellentesque vel. Mauris tempus convallis.
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
  const [opts, setOpts] = useState(['about me', 'cube', 'contents', 'sidebar'])
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
      className={`${opts.includes('sidebar') ? 'visible' : 'opt-hide'}`}>
      <Head>
        <title>Ming YAO</title>
        <link rel='icon' href='/icon.png' type='image/jpg' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='home-page'>
        <Me setOpts={setOpts} opts={opts} />
        <Contents opts={opts} />
      </div>
    </SidebarInjector>
  )
}
export default HomePage
