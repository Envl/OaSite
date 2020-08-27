import React, {useEffect, useState} from 'react'
import './_lazyImg.scss'

const LazyImg = ({
  src,
  realSrc,
  className,
  loadingClass = 'lazy-loading',
  ...props
}) => {
  const [isMobile, setMobile] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [isHover, setHover] = useState(false)
  useEffect(() => {
    setLoaded(true)
    setMobile(
      (window && typeof window.orientation !== 'undefined') ||
        (navigator && navigator.userAgent.indexOf('IEMobile') !== -1),
    )
  }, [])

  return (
    <img
      {...props}
      src={loaded ? realSrc : src}
      onClick={() => {
        setHover(!isHover)
      }}
      onMouseEnter={(evt) => {
        !isMobile && setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
      className={
        (loaded ? className : loadingClass) + (isHover ? ' img-hover' : '')
      }></img>
  )
}

export default LazyImg
