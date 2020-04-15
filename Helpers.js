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

export function jdUrl(url) {
  return 'https://cdn.jsdelivr.net/gh/Envl/OaSite/public/img/' + url
}
