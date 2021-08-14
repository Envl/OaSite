import React, { useEffect, useState, useRef } from 'react'
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
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        if (!loaded && entries[0].isIntersecting) {
          setLoaded(true)
          console.log('boom', entries, observer)
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(imgRef.current)

    setMobile(
      typeof window != undefined && typeof window.orientation !== 'undefined'
    )

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <img
      ref={imgRef}
      {...props}
      src={loaded ? realSrc : src}
      onClick={() => {
        setHover(!isHover)
      }}
      onMouseEnter={evt => {
        !isMobile && setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
      className={
        (loaded ? className : loadingClass) + (isHover ? ' img-hover' : '')
      }
    ></img>
  )
}

export default LazyImg
