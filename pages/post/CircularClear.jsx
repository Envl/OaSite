//youtu.be/ay87rjPXSaI

//
import Layout from '../../components/Layout'
import React from 'react'
import './_postPage.scss'

const CircularClear = () => {
  return (
    <Layout>
      <h1>Circular Clear</h1>
      <div className='html-post reading-settings'>
        <p>
          This is a match-three puzzle game that inspired by&nbsp;
          <a target='_blank' href='https://en.wikipedia.org/wiki/Spirograph'>
            Spirograph
          </a>
          . The player can use keyboard to spin different rings to make same
          element aligned, thereby to clear them. In the meantime, the spinning
          operations would create a unique Spirograph as a side effect.
        </p>
        <h2>Game Design</h2>
        <p>
          There are many elements distributed on 3 rings. The goal is to make
          the same elements aligned on a straight line. To achieve that, the
          player can spin each ring using key <strong>S D F, J K L</strong>
          respectively.
          <img
            style={{width: 300}}
            src='https://i.loli.net/2019/12/04/5JBH7NWzqhIwal1.png'></img>
          <div>
            As shown in this image,the <span>yellow</span> and{' '}
            <span>green</span> elements are aligned in one line, thus they can
            be cleard.
          </div>
        </p>
        <p
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          A normal Spirograph works in this way:
          <img src='/spirograph.gif' style={{marginBottom: 0}} />
          <div style={{justifySelf: 'center'}}>source: wikipedia</div>
        </p>
        <p>
          If the circle keeps spinning, we only need to change the color of path
          or the position of the pen, many beautiful images can therefore be
          created.
        </p>
        <h2>Game Prototype</h2>
        <p>By combining both concepts, here is the game Circular Clear.</p>
        <iframe
          src='https://www.youtube.com/embed/ay87rjPXSaI'
          frameborder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen></iframe>
        <p>
          <h3>How to play</h3>
          <ul>
            <li>
              Use key <strong>S D F, J K L</strong> to spin these rings
            </li>
            <li>
              If there is a three-match, press <strong>SPACE</strong> to clear
              them
            </li>
          </ul>
          <h3>Download</h3>
          <p>
            A lo-fi playable version can be downloaded here:
            <br /> Windows:&nbsp;
            <a
              href='https://send.firefox.com/download/7dbf3baa613deeb1/#v90rRRffCl8Fjyt5i_JcSw'
              target='_blank'>
              Demo
            </a>
          </p>
        </p>
      </div>
    </Layout>
  )
}

export default CircularClear
