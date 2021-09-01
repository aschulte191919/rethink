import type { AppProps } from 'next/app'
import { stitchesGlobal } from '../stitches.config'

/* --------------------------------------------------------
 * Global Styles
 * ------------------------------------------------------*/

const globalStyles = stitchesGlobal({
  body: {
    padding: '0',
    margin: '0',
    fontFamily: 'Poppins',
    backgroundColor: '#f8f6f0'
  },
  a: {
    color: 'inherit',
    textDecoration: 'none'
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return <Component {...pageProps} />
}
export default MyApp
