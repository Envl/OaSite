import Link from 'next/link'
import {Button, Card, DropDown} from 'oapack'
import './_index.scss'

function Me(props) {
  return (
    <div className='me-block'>
      <h2 className='intro'>
        Hi there! ddI'm Ming YAO
        <br />A
      </h2>
      <Link href='/post/[id]' as='/post/ddd'>
        <span className='resume'>Resume</span>
      </Link>
      {/* <Portrait /> */}
    </div>
  )
}

function HomePage() {
  return (
    <div className='home flex-h-center'>
      <div className='content flex-v-center'>
        <Card />
        <Button type='toggle'>test</Button>
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
      <Me />
    </div>
  )
}
export default HomePage
