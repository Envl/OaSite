import React, {useEffect} from 'react'
import ReactGA from 'react-ga'
import * as firebase from 'firebase/app'
import 'firebase/firestore'

ReactGA.initialize('G-REWTHY2S75')
export const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    ReactGA.set({
      page,
      ...options,
    })
    ReactGA.pageview(page)
  }

  const HOC = props => {
    useEffect(() => trackPage(props.url.pathname), [props.url.pathname])
    console.log('HOC', props)
    return <WrappedComponent {...props} />
  }

  return HOC
}

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCJdlzhnQdsONLmv1KGQIHY9FhiChyqCBA',
    authDomain: 'oa-site.firebaseapp.com',
    databaseURL: 'https://oa-site.firebaseio.com',
    projectId: 'oa-site',
    storageBucket: 'oa-site.appspot.com',
    messagingSenderId: '926252173661',
    appId: '1:926252173661:web:8b170a46a40e78405380b4',
    measurementId: 'G-YW09J10NBL',
  })
}
export function withFirebase(Component) {
  function HOC(props) {
    return <Component {...props} firebase={firebase} />
  }
  return HOC
}
