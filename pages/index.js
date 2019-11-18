import Link from 'next/link'
// import {Button} from '@envl/oapack'
import {Button, Card, DropDown} from 'oapack'
import './_index.scss'

function Me(props) {
  return (
    <div className='me-block'>
      <h2 className='intro'>
        Hi there! ddI'm Ming YAO
        <br />A
      </h2>
      {/* <Link className='resume'>Resume</Link> */}
      {/* <Portrait /> */}
    </div>
  )
}

function HomePage() {
  return (
    <div className='home flex-h-center'>
      <div className='content flex-v-center'>
        <Card />
        <Button>test</Button>
        <DropDown>
          <div>aa</div>
          <div>aa</div>
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
