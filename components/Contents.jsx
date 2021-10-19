import * as db from '../MyData'

import sesamPicrImg from '../public/img/sesampicr.png'

import { BlogPosts, ZMDPosts } from './Posts'
import { Card, CubeMenu } from 'oapack'
import Image from 'next/image'

// import LazyImg from './LazyImg'
import PostCard from '../components/PostCard'
import React from 'react'
import { useModel } from 'flooks'

function PostList({ className, blogs, zmd }) {
  const { postType } = useModel('filters')
  return (
    <div className={`posts ${className ? className : ''}`}>
      {blogs && <BlogPosts posts={blogs} />}
      {zmd && <ZMDPosts zmd={zmd} />}
      {db.postList
        .filter(item => {
          if (postType === 'all' || typeof postType === 'undefined') {
            return true
          } else {
            return typeof postType === 'string'
              ? item.tags.includes(postType)
              : item.tags.some(tag => postType.includes(tag))
          }
        })
        .map(l => (
          <PostCard
            key={l.title}
            className="post-lr"
            data={l}
            href={'/post/' + l.title.toLowerCase().split(' ').join('-')}
          >
            {l.brief
              ? l.brief
              : '(Coming Soon...)Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt diam felis, sed tempor est pellentesque vel.'}
          </PostCard>
        ))}
    </div>
  )
}

export default function Contents({ opts, zmd, blogs }) {
  return (
    <div className="content">
      {/* TODO schools/cities with review  :thumb-up:  :thumb-down: */}
      {/* <Card
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
      </Card> */}
      <CubeMenu
        className="home-cube"
        u={
          <a
            href="https://www.instagram.com/sesampicr/"
            target="_blank"
            style={{ display: 'flex' }}
          >
            <svg
              style={{
                width: '70%',
                color: 'rgb(74, 76, 163)',
                margin: 'auto',
              }}
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </svg>
          </a>
        }
        f={
          <Image
            src="/../public/img/sesampicr.png"
            width={300}
            height={300}
            // realSrc="img/sesampicr.png"
            className="sesam-qr-code"
          />
        }
        r={
          <a
            className="oa-hover-underline"
            href="https://github.com/envl"
            target="_blank"
          >
            Github
          </a>
        }
      />
      <PostList zmd={zmd} blogs={blogs} />
    </div>
  )
}
