import { Button, Card, DropDown, FilterGroup } from 'oapack'

import meImg from '../public/img/me.jpg'
import { copy, jdUrl } from '../Helpers'
import { setModel, useModel } from 'flooks'
import { useEffect, useState } from 'react'

// import LazyImg from '../components/LazyImg'
import Image from 'next/image'

export default function Me({ setOpts, opts }) {
  const [emailNotice, setEmailNotice] = useState('')
  const { updateType } = useModel('filters', true)
  const [footCount, setFootCount] = useState(0)
  useEffect(() => {
    fetch('https://api.countapi.xyz/get/gnimoay.com/footCount')
      .then(res => res.json())
      .then(data => setFootCount(data.value))
    const hash = window.location.hash.replace('#', '').toLowerCase()
    setTimeout(() => {
      if (['interaction', 'ux', 'web', 'game', 'mobile'].includes(hash)) {
        updateType(hash[0].toUpperCase() + hash.substr(1))
      }
    }, 200)
  }, [])
  return (
    <div className="me-block">
      <div className="me-status">❤️: 🎮🍟📷🚴‍♂️🏸🎵🏓</div>
      <Button type="toggle" className="btn-hi" pressed="true">
        {/* <h2>Hi,</h2> */}
        Hi
      </Button>
      <DropDown name=" I'm Ming YAO" className="dscp">
        <div>a UX Designer</div>
        <div>a Developer</div>
      </DropDown>
      <div className="img-area">
        <Image src={meImg} />
      </div>
      <Button type="toggle" className="btn-i">
        {/* <h1>I</h1> */}I
      </Button>
      <FilterGroup
        className="block-filters"
        initialFilters={[
          { name: 'c', pushed: false },
          { name: 'o', pushed: false },
          { name: 'd', pushed: true },
          { name: 'e', pushed: true },

          { name: 's', pushed: false },
          { name: 'i', pushed: false },
          { name: 'g', pushed: false },
          { name: 'n', pushed: false },
          { name: ':)', pushed: true, disabled: true },
        ]}
      />
      <FilterGroup
        className="site-filters"
        initialFilters={[
          // {name: 'about me', pushed: opts.includes('about me')},
          { name: 'sidebar', pushed: opts.includes('sidebar') },
          { name: 'footer', pushed: opts.includes('footer') },
          { name: 'contact me', pushed: opts.includes('contact me') },
        ]}
        onFilterUpdate={options => {
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
        }`}
      >
        <Card>{emailNotice} hi@gnimoay.com</Card>
      </div>
      <FilterGroup
        single
        className="type-filter"
        onFilterUpdate={types => {
          updateType(types[0])
        }}
        initialFilters={[
          { name: 'all', pushed: true },
          'Interaction',
          'UX',
          'Web',
          'Game',
          'Mobile',
        ]}
      />
      <div className="foot">
        <div>
          {footCount}
          <span> 人留下了脚印</span>
        </div>
        <Button
          onClick={() => {
            fetch('https://api.countapi.xyz/hit/gnimoay.com/footCount')
            setFootCount(footCount + 1)
          }}
        >
          <svg
            style={{ width: 16 }}
            className="svg-inline--fa fa-shoe-prints fa-w-20"
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M192 160h32V32h-32c-35.35 0-64 28.65-64 64s28.65 64 64 64zM0 416c0 35.35 28.65 64 64 64h32V352H64c-35.35 0-64 28.65-64 64zm337.46-128c-34.91 0-76.16 13.12-104.73 32-24.79 16.38-44.52 32-104.73 32v128l57.53 15.97c26.21 7.28 53.01 13.12 80.31 15.05 32.69 2.31 65.6.67 97.58-6.2C472.9 481.3 512 429.22 512 384c0-64-84.18-96-174.54-96zM491.42 7.19C459.44.32 426.53-1.33 393.84.99c-27.3 1.93-54.1 7.77-80.31 15.04L256 32v128c60.2 0 79.94 15.62 104.73 32 28.57 18.88 69.82 32 104.73 32C555.82 224 640 192 640 128c0-45.22-39.1-97.3-148.58-120.81z"
            ></path>
          </svg>
        </Button>
      </div>
    </div>
  )
}
