import { GeistProvider, CssBaseline, Page } from '@geist-ui/react'
import Image from 'next/image'
import { abort } from 'process'
import '../styles/globals.css'
import { Link } from '@geist-ui/react'
import { Github } from '@geist-ui/react-icons'

function MyApp({ Component, pageProps }) {
  return (
    <GeistProvider themeType="dark">
      <CssBaseline />
      <div style={{ position: 'absolute', top: 0, left: 0, padding: 10 }}>
        <Image
          src={'/stardate.svg'}
          height={'30px'}
          width={'200px'}
          // style={{ position: 'absolute', top: 20, left: 20 }}
        />
      </div>
      <div style={{ position: 'absolute', top: 0, right: 0, padding: 10 }}>
        <Link href="https://github.com/asteroidice/star-date" target="_BLANK">
          <Github />
        </Link>
      </div>

      <Component {...pageProps} />
    </GeistProvider>
  )
}

export default MyApp
