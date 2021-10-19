import '../prism.css'

import './_index.scss'

import './post/_postPage.scss'
import './post/_oapack.scss'

import '../components/footer.scss'
import '../components/hurray.scss'
import '../components/layout.scss'
import '../components/postCard.scss'
import '../components/posts.scss'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
