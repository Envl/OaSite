import React, {useEffect, useState} from 'react'

const Index = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=batman')
      .then(rsp => rsp.json())
      .then(data => setList(data.map(d => d.show)))
  }, [])
  return (
    <div>
      {list.map(l => (
        <div key={l.id}>{l.name}</div>
      ))}
      <div>{typeof window !== 'undefined' && window.location.href}</div>
    </div>
  )
}

export default Index
