import React, {useEffect, useState} from 'react'
import {withFirebase} from '../Helpers'
import './_visitors.scss'
const Visitors = props => {
  const [list, setList] = useState([])
  useEffect(() => {
    let l = []
    props.firebase
      .firestore()
      .collection('visitor')
      .get()
      .then(snap => {
        snap.forEach(e => {
          l.push(e.data())
        })
        setList(l)
      })
  }, [])
  return (
    typeof window !== 'undefined' &&
    window.location.search === '?0000' && (
      <div className='visitor-page'>
        <h1>LIST</h1>
        <div className='tb-title'>
          <span>hash</span>
          <span>timestamps</span>
        </div>
        {list.map((i, index) => (
          <div className='record-item'>
            <span>{i.hash}</span>
            <span>{i.language + '_' + i.platform}</span>
            <span>
              {i.timestamps.slice(i.timestamps.length - 4).map(e => (
                <div>{new Date(e).toString()}</div>
              ))}
            </span>
            <span>{i.appVersion}</span>
          </div>
        ))}
      </div>
    )
  )
}
export default withFirebase(Visitors)
