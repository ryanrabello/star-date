import Head from 'next/head'
import { css } from '@emotion/react'
import { SolarSystem } from '../components/SolarSystem'
import { DatePicker } from '../components/DatePicker'
import React, { useState } from 'react'

const initDate = new Date()

export default function Home() {
  const [date, setDate] = useState(initDate)
  return (
    <React.Fragment>
      <Head>
        <title>Star Date</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        //@ts-ignore
        css={wrapperStyles}
      >
        <div
          //@ts-ignore
          css={solarSystemWrapper}
        >
          <SolarSystem date={date} />
        </div>
        <div
          //@ts-ignore
          css={dateSelectorStyles}
        >
          <DatePicker date={date} setDate={setDate} />
        </div>
      </main>
    </React.Fragment>
  )
}

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  /* align-items: center; */
`

const solarSystemWrapper = css`
  flex: 1 1 0px;
  overflow: hidden;
`

const dateSelectorStyles = css`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  padding: 20px;
`
