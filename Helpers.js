// import React, {useEffect} from 'react'
// import * as firebase from 'firebase/app'
// import 'firebase/firestore'
// import {firebase_Config} from './_ApiKeys'

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebase_Config)
// }
// export function withFirebase(Component) {
//   function HOC(props) {
//     return <Component {...props} firebase={firebase} />
//   }
//   return HOC
// }

export async function like(domain, keyword, hit = false) {
  return (
    await (
      await fetch(
        'https://api.countapi.xyz/' +
          (hit ? 'hit/' : 'get/') +
          domain +
          '/' +
          keyword
      )
    ).json()
  ).value
}

export function copy(text) {
  const fake = document.body.appendChild(document.createElement('textArea'))
  fake.style.position = 'absolute'
  fake.style.left = '-9999px'
  fake.setAttribute('readonly', '')
  fake.value = '' + text
  fake.select()
  try {
    return document.execCommand('copy')
  } catch (err) {
    return false
  } finally {
    fake.parentNode.removeChild(fake)
  }
}
export function jdUrl(url) {
  if (process.env.NODE_ENV !== 'production') {
    return url
  } else {
    return 'https://cdn.jsdelivr.net/gh/Envl/OaSite/public/img/' + url
  }
}
export function removeJdUrl(url) {
  if (process.env.NODE_ENV !== 'production') {
    return url
  } else {
    return url.replace(
      'https://cdn.jsdelivr.net/gh/Envl/OaSite/public/img/',
      ''
    )
  }
}
