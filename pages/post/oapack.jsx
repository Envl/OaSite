import React, {useState, useEffect} from 'react'
import {
  Button,
  Card,
  Carousel,
  CubeMenu,
  DropDown,
  FilterGroup,
  SidebarInjector,
  SidebarItem,
} from 'oapack'
import Layout from '../../components/Layout'

import './_oapack.scss'

function Cards(props) {
  return (
    <Card>
      <Card className='ss'>
        <Card>
          <Card onClick={() => console.log('second')}>
            <Card>{props.children}</Card>
          </Card>
        </Card>
      </Card>
    </Card>
  )
}
function Psuedo(props) {
  return <span className='psuedo'>{props.children}</span>
}
function Index() {
  return (
    <Layout className='oapack-wrapper' heading='OaPack'>
      <h1>OaPack</h1>
      <div className='page-oapack reading-settings'>
        <p>
          This is a comic style UI kit for React.js, which features satisfying
          mouse clicking experience. It was designed for desktop, yet compatible
          with mobile.
        </p>
        <a className='oa-link' href='https://github.com/Envl/OaPack'>
          Github
        </a>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <a className='oa-link' href='https://www.npmjs.com/package/oapack'>
          Npm Package
        </a>
        <p>
          It is reported that a person normally clicks the mouse over 5000 times
          a day. Among those clicks, many were devoted to GUI components like
          Button, Menu, etc.
          <br />
          The idea of this project is to create a playful UI kit that makes
          every mouse click delightful, and maybe a little bit{' '}
          <strong>addictive</strong>. Beside that, this UI kit is also designed
          to be minimal enough that won't distract the user from important
          content.
        </p>
        <p>
          {' '}
          What I personally like the most is <Psuedo>{`<DropDown>`}</Psuedo>.
          There are two kinds of <Psuedo>{`<Button>`}</Psuedo>, the normal one
          and the toggle. All kind of widgets can be disabled by adding
          property: <Psuedo>disabled</Psuedo>.
          <br />
        </p>
        <DropDown name='DropDown' onClick={(e) => console.log(e.target)}>
          <div>Click us</div>
          <div>It just</div>
          <div>Feels Good</div>
        </DropDown>
        <Button type='toggle'>Toggle</Button>
        <Button type='toggle' pressed='true'>
          Toggle
        </Button>
        <Button onClick={() => console.log('ssss')} test='aa' className='sss'>
          button
        </Button>
        <Button
          type={'toggle'}
          onClick={(e) => console.log(e.isToggleOn)}
          disabled>
          disabled
        </Button>
        <Card>
          A <Psuedo>{`<Card>`}</Psuedo> was usually used as a wrapper for a
          bunch of contents that were tightly related to each other.
        </Card>
        <p>
          We can make a pyramid by wrapping multiple
          <Psuedo>{`<Card>`}</Psuedo>s.
        </p>
        <Cards>
          <Button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            Top
          </Button>
        </Cards>
        <Cards>
          <Card>
            <Card />
          </Card>
        </Cards>
        <p>
          There is a easter egg called <Psuedo>oa-secret</Psuedo>, the content
          of anything that has this class will be hiddent by default
        </p>
        <Button className='oa-secret'>You found me.</Button>
        <Carousel className='oa-secret'>
          <h1>Yet another secret</h1>
        </Carousel>
        <FilterGroup
          onFilterUpdate={(e) => console.log(e)}
          className='oa-secret'
          initialFilters={[
            '中文',
            '字体',
            {name: '也', pushed: true},
            {name: '还行', pushed: true},
            '吧',
          ]}
        />
        <p>
          There is also a <Psuedo>{`<FilterGroup>`}</Psuedo> that contains
          multiple filters. To make it a single choice filter, just add
          property: <Psuedo>single</Psuedo>.
        </p>
        <FilterGroup
          initialFilters={[
            {name: 'Yes...', pushed: true},
            {name: 'we', disabled: true},
            'are..', // disabled by default
            {name: 'Filters!', pushed: true},
            'Click MEEE!!!!!!',
          ]}
          onFilterUpdate={(e) => console.log(e)}
        />
        <FilterGroup
          single
          initialFilters={[{name: 'I..', pushed: true}, {name: 'am'}, 'single']}
          onFilterUpdate={(e) => console.log(e)}
        />
        <input className='oa-input' type='text' placeholder='input here' />
        <p>
          I'm a <Psuedo>{`<Carousel>`}</Psuedo> that can contain anything
          inside.
        </p>
        <Carousel style={{height: '200px', width: '550px'}}>
          <div>
            <input
              type='text'
              className='oa-input'
              placeholder='a input inside the carousel'
            />
            <Button>BTN</Button>
          </div>
          <Button onClick={(e) => console.log(e.target.nextSibling)}>
            Btn2
          </Button>
          <Card>
            <Card>
              <Card>Small Pyramid</Card>
            </Card>
          </Card>
          <DropDown
            className='fit-content'
            name='Another dropdown'
            onClick={(e) => console.log(e.target)}>
            <div>A</div>
            <div>b</div>
            <div>c</div>
          </DropDown>
        </Carousel>
        <p>
          This is a <Psuedo>{`<CubeMenu>`}</Psuedo> that has 3 facets to contain
          any stuffs.
        </p>
        <CubeMenu
          className='demo-cube'
          u={<Button type='toggle'>U</Button>}
          r={
            <div>
              <Button>R</Button>
            </div>
          }
          f='Front'
        />
      </div>
    </Layout>
  )
}

export default Index
