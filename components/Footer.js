import React, {useEffect, useState} from 'react'
import './_footer.scss'
const Footer = (props) => {
  const [visitCount, setVisitCount] = useState(0)
  useEffect(() => {
    fetch(
      `https://api.countapi.xyz/${
        window.location.hostname === 'localhost' ? 'get' : 'hit'
      }/gnimoay.com/visit-count-` +
        window.location.pathname.split('/').slice(1).join('-'),
    )
      .then((res) => res.json())
      .then((data) => setVisitCount(data.value))
  }, [])
  return (
    <div className={`footer-wrapper ${props.className ? props.className : ''}`}>
      <div className='footer'>
        <div>
          <span>{visitCount}</span>
          <span> visits</span>
        </div>

        <div>All rights reserved</div>
        <p
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          Design&Code by me :)
        </p>
      </div>
      <button
        onClick={(evt) => {
          window.scrollTo({top: 0, behavior: 'smooth'})
        }}>
        <svg viewBox='0 0 20 20' fill='white'>
          <path
            fillRule='evenodd'
            d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
            clipRule='evenodd'></path>
        </svg>
      </button>
    </div>
  )
}

export default Footer
