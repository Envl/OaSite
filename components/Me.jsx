import {useEffect, useState} from 'react'
import {setModel, useModel} from 'flooks'
import {Button, FilterGroup, DropDown, Card} from 'oapack'
import LazyImg from '../components/LazyImg'
import {jdUrl, copy} from '../Helpers'

export default function Me({setOpts, opts}) {
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
