import React, {useEffect, useState} from 'react'
import './_footer.scss'
const Footer = props => {
  const [visitCount, setVisitCount] = useState(0)
  useEffect(() => {
    fetch(
      'https://api.countapi.xyz/hit/gnimoay.com/visit-count-' +
        window.location.pathname
          .split('/')
          .slice(1)
          .join('-'),
    )
      .then(res => res.json())
      .then(data => setVisitCount(data.value))
  }, [])
  return (
    <div className={`footer ${props.className ? props.className : ''}`}>
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
        <div>yyaomingm@outlook.com</div>
        <p></p>
      </p>
    </div>
  )
}

export default Footer
