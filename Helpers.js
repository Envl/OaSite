import React, {useEffect} from 'react'
import ReactGA from 'react-ga'
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import {firebase_Config} from './_ApiKeys'

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
    useEffect(
      () =>
        typeof window !== 'undefined' &&
        (trackPage(window.location.pathname), [window.location.pathname]),
    )
    return <WrappedComponent {...props} />
  }

  return HOC
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebase_Config)
}
export function withFirebase(Component) {
  function HOC(props) {
    return <Component {...props} firebase={firebase} />
  }
  return HOC
}
