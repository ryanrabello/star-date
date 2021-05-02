import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'
import { Code32, Information32, User32 } from '@carbon/icons-react'
import { Link } from 'carbon-components-react'
import { css } from '@emotion/react'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <div style={{ position: 'absolute', top: 0, left: 0, padding: 10 }}>
        <NextLink href={'/'} as={'/'}>
          <a>
            <img
              src={process.env.basePath + '/stardate.svg'}
              height={'30px'}
              width={'200px'}
            />
          </a>
        </NextLink>
      </div>
      <div style={{ position: 'absolute', top: 0, right: 0, padding: 10 }}>
        <Link
          href="https://github.com/asteroidice/star-date"
          target="_BLANK"
          css={navItemStyles}
          title="View the code on GitHub"
        >
          <Code32 />
        </Link>
        <NextLink href={'/about'} passHref as={'/about'}>
          <Link css={navItemStyles} title="About this site">
            <Information32 />
          </Link>
        </NextLink>
        <Link
          href="https://www.linkedin.com/in/ryan-rabello/"
          target="_BLANK"
          css={navItemStyles}
          title="My LinkedIn"
        >
          <User32 />
        </Link>
      </div>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

const navItemStyles = css`
  padding: 5px;
`

export default MyApp
