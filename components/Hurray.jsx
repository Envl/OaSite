import {useState, useEffect} from 'react'
import confetti from 'canvas-confetti'
import {like} from '../Helpers'
import './_hurray.scss'

export default function Hurray() {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    like('gnimoay.com', 'sesame').then((v) => setCounter(v))
  })
  return (
    <div
      className='hurray-button'
      onClick={async () => {
        setCounter(await like('gnimoay.com', 'sesame', true))
        const origin = {
          x: 1,
          y: 0.7,
        }
        confetti({
          particleCount: 100,
          startVelocity: 50,
          angle: 120 + Math.random() * 40,
          spread: 50,
          origin: origin,
        })
      }}>
      <span className='hurray-cft'>🎉</span>
      <span className='hurray-count'>{counter}</span>
    </div>
  )
}
