import React, {useEffect, useState} from 'react'
import './_footer.scss'
const Footer = () => {
  const [visitCount, setVisitCount] = useState(0)
  useEffect(() => {
    fetch(
      'https://api.countapi.xyz/hit/gnimoay.com/visit-count-' +
        window.location.pathname,
    )
      .then(res => res.json())
      .then(data => setVisitCount(data.value))
  }, [])
  return (
    <div className='footer'>
      <div>All rights reserved</div>
      <p>Design&Code by me :)</p>
      <div>
        <span>{visitCount}</span>
        <span> visits</span>
      </div>
    </div>
  )
}

export default Footer
