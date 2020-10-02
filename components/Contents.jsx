import React from 'react'
import {Card, CubeMenu} from 'oapack'
import PostCard from '../components/PostCard'
import Posts from '../components/Posts'
import * as db from '../MyData'
import {useModel} from 'flooks'

function PostList(props) {
  const {postType} = useModel('filters')
  return (
    <div className={`posts ${props.className ? props.className : ''}`}>
      <Posts zmd={props.zmd} />

      {db.postList
        .filter((item) => {
          if (postType === 'all' || typeof postType === 'undefined') {
            return true
          } else {
            return typeof postType === 'string'
              ? item.tags.includes(postType)
              : item.tags.some((tag) => postType.includes(tag))
          }
        })
        .map((l) => (
          <PostCard
            key={l.title}
            className='post-lr'
            data={l}
            href={'/post/' + l.title.toLowerCase().split(' ').join('-')}>
            {l.brief
              ? l.brief
              : '(Coming Soon...)Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt diam felis, sed tempor est pellentesque vel.'}
          </PostCard>
        ))}
    </div>
  )
}

export default function Contents({opts, zmd}) {
  return (
    <div className='content'>
      <Card
        className={`site-intro ${
          opts && opts.includes('about me') ? 'visible' : 'opt-hide'
        }`}>
        <p>
          I often think about our actions in the digital world, and in the real
          world.
          <br /> "Is that right? Could it be improved?" "Yes, and still yes."
          <br />
        </p>
        <p>
          To confirm my answer, I'm studying Human-Computer Interaction & Design
          with Innovation & Entrepreneurship Minor at
          <a
            className='oa-hover-underline'
            href='https://www.kth.se/student/kurser/program/TIVNM/20182/arskurs1?l=en'
            target='_blank'>
            &nbsp;KTH Royal Institute of Technology&nbsp;
          </a>
          and
          <a
            href='https://www.universite-paris-saclay.fr/en/education/master/m2-hcid-eit-digital#presentation-m2'
            target='_blank'
            className='oa-hover-underline'>
            &nbsp;Université Paris-Sud&nbsp;
          </a>
        </p>
        <p>
          With a background of B.E. in Digital Media Technology, I also build🔨
          stuffs.
        </p>
      </Card>
      <CubeMenu
        className='home-cube'
        u={
          <a href='https://www.instagram.com/sesampicr/' target='_blank'>
            <i className='fab fa-instagram'></i>
          </a>
        }
        f={
          <form
            onSubmit={(evt) => {
              evt.preventDefault()
              const inputEl = evt.currentTarget.querySelector('input')
              inputEl.value = ''
              if (inputEl.value == '24678') {
                window.open('/CV_Ming_YAO.pdf', '_blank')
                inputEl.placeholder = 'Code'
              } else {
                inputEl.placeholder = 'Invalid'
              }
            }}>
            <input type='text' placeholder='Code' />
            <button className='oa-hover-underline'>
              Get <br />
              Resume
              {/* </a> */}
            </button>
          </form>
        }
        r={
          <a
            className='oa-hover-underline'
            href='https://github.com/envl'
            target='_blank'>
            Github
          </a>
        }
      />
      <PostList zmd={zmd} />
    </div>
  )
}
