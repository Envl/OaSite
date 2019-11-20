import Link from 'next/link'
import {useEffect} from 'react'
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

function Me(props) {
  return (
    <div className='me-block'>
      <Card className='card'>
        <h2>Hi,</h2>
      </Card>
      <DropDown name=" I'm Ming YAO" className='dscp'>
        <div>a UX Designer</div>
        <div>a Developer</div>
      </DropDown>
      <img src='/me.jpg' alt='' />
      <Card className='card-i'>
        <h1>I</h1>
      </Card>
      <FilterGroup
        className='block-filters'
        filters={[
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
    </div>
  )
}

function Contents(props) {
  return (
    <div className='content'>
      <CubeMenu
        className='home-cube'
        u=':)'
        f={
          <Link href='/CV_Ming_YAO.pdf'>
            <a className='oa-underline' target='__blank'>
              Resume
            </a>
          </Link>
        }
        l={
          <a
            className='oa-underline'
            href='https://github.com/envl'
            target='__blank'>
            Github
          </a>
        }
      />
      <Card />
      <Button type='toggle'>test</Button>
      <button>normal</button>
      <DropDown title='I am a'>
        <div>UX Designer</div>
        <div>Full Stack Developer</div>
      </DropDown>
      <Card>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </Card>
      {/* <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}></div> */}
      <Card>
        <h1>t</h1>
      </Card>
      <Card>
        <h1>t</h1>
      </Card>
      <Card>
        <h1>t</h1>
      </Card>
      <Card>
        <h1>t</h1>
      </Card>
      <Card>
        <h1>t</h1>
      </Card>
      <Card>
        <h1>t</h1>
      </Card>
      <Card>
        <h1>t</h1>
      </Card>
      <Card>
        <h1>t</h1>
      </Card>
      <Card>
        <h1>t</h1>
      </Card>
      <Card>
        <h1>t</h1>
      </Card>
      <Card>
        <h1>t</h1>
      </Card>
      <Card>
        <h1>t</h1>
      </Card>
      <Card>
        <h1>t</h1>
      </Card>
      <Card>
        <h1>t</h1>
      </Card>
      <Card>
        <h1>t</h1>
      </Card>
      <Card>
        <h1>t</h1>
      </Card>
      <Card>
        <h1>t</h1>
      </Card>
      <h1>t</h1>
      <h1>t</h1>
      <h1>t</h1>
      <h1>t</h1>
      <h1>t</h1>
      <h1>t</h1>
      <h1>t</h1>
      <h1>t</h1>
      <h1>t</h1>
      <h1>t</h1>
      <h1>t</h1>
      <h1>t</h1>
    </div>
  )
}

function HomePage() {
  useEffect(() => {
    console.log('in browser')
  }, [])
  return (
    <SidebarInjector
      items={
        <>
          <SidebarItem to='/cv' brief='CV' detail='CV' />
          <SidebarItem to='/projects' brief='P.' detail='Projects' />
          <SidebarItem
            to='/'
            brief='H.'
            detail='Home'
            className='sidebar-active'
          />
        </>
      }>
      <div className='home flex-h-center'>
        <Me />
        <Contents />
      </div>
    </SidebarInjector>
  )
}
export default HomePage
