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
  const [isHover, setHover] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <img
      {...props}
      src={loaded ? realSrc : src}
      onClick={() => {
        setHover(!isHover)
      }}
      // onMouseEnter={(evt) => {
      //   setHover(true)
      // }}
      onMouseLeave={() => {
        setHover(false)
      }}
      className={
        (loaded ? className : loadingClass) + (isHover ? ' img-hover' : '')
      }></img>
  )
}

export default LazyImg
