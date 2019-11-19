import Link from 'next/link'
import {useEffect} from 'react'
import {
  Button,
  Card,
  DropDown,
  SidebarInjector,
  SidebarItem,
  CubeMenu,
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
      <CubeMenu
        className='cube'
        u=':)'
        f={
          <Link href='/CV_Ming_YAO.pdf'>
            <a target='__blank'>Resume</a>
          </Link>
        }
        l={
          <a href='https://github.com/envl' target='__blank'>
            Github
          </a>
        }
      />
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
        <div className='content'>
          <Card />
          <Button type='toggle'>test</Button>
          <button>normal</button>
          <DropDown title='I am a'>
            <div>UX Designer</div>
            <div>Full Stack Developer</div>
          </DropDown>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}></div>
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
          <h1>t</h1>
        </div>
      </div>
    </SidebarInjector>
  )
}
export default HomePage
