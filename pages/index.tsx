import Head from 'next/head'
import { Grid } from '@geist-ui/react'
import { css } from '@emotion/react'
import { SolarSystem } from '../components/SolarSystem'
import React from 'react'

const date = new Date()

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Star Date</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main css={wrapperStyles}>
        <div css={solarSystemWrapper}>
          <SolarSystem date={date} />
        </div>
        <div css={dateSelectorStyles}>TODO: Date Selector</div>
      </main>
    </React.Fragment>
  )
}

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw:
  align-items: center;
`

const solarSystemWrapper = css`
  flex: 1 1 0px;
  overflow:hidden;
`

const dateSelectorStyles = css`
  flex: 0 0 auto;
`
