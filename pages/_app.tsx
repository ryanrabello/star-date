import Image from 'next/image'
import React from 'react'
import { Code32 } from '@carbon/icons-react'
import { Link } from 'carbon-components-react'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <div style={{ position: 'absolute', top: 0, left: 0, padding: 10 }}>
        <Image src={'/stardate.svg'} height={'30px'} width={'200px'} />
      </div>
      <div style={{ position: 'absolute', top: 0, right: 0, padding: 10 }}>
        <Link href="https://github.com/asteroidice/star-date" target="_BLANK">
          <Code32 />
        </Link>
      </div>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
