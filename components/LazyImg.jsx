import React, {useEffect, useState} from 'react'
import './_lazyImg.scss'

const LazyImg = ({
  src,
  realSrc,
  className,
  loadingClass = 'lazy-loading',
  ...props
}) => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <img
      {...props}
      src={loaded ? realSrc : src}
      className={loaded ? className : loadingClass}></img>
  )
}

export default LazyImg
