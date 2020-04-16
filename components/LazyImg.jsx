import React, {useEffect} from 'react'
import './_lazyImg.scss'

const LazyImg = ({src, ...props}) => {
  let url = src + '?lqip'
  useEffect(() => {
    url = src
  }, [])

  return <img src={require(url)}></img>
}

export default LazyImg
