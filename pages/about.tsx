import Head from 'next/head'
import { css } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'carbon-components-react'
import { SolarSystem } from '../components/SolarSystem'
import { scaleTime } from 'd3'
import moment from 'moment'
import { CustomHead } from '../components/Head'

const MAX = 100
const now = new Date(Date.now())
const past = moment(now).subtract(1, 'years').toDate()
const future = moment(now).add(1, 'years').toDate()
const scale = scaleTime().domain([past, future]).range([0, MAX]).clamp(true)

export default function Home() {
  const [date, setDate] = useState(now)
  const [changeDateCounter, setCounter] = useState(0)

  // Change the view of the date every once in a while
  useEffect(() => {
    const timeout = setTimeout(() => {
      const newDate = scale.invert(Math.random() * MAX)
      setDate(newDate)
    }, 7000)
    return () => clearTimeout(timeout)
  }, [changeDateCounter, setCounter])

  return (
    <React.Fragment>
      <Head>
        <CustomHead title={"About - StarDate"} />
      </Head>
      <main
        //@ts-ignore
        css={wrapperStyles}
      >
        <div
          //@ts-ignore
          css={solarSystemStyles}
        >
          <SolarSystem date={date} />
        </div>
        <h1>About</h1>
        <p>
          This application was inspired by those companies that will make a
          poster of a significant date. I thought I would make a web app that
          could do some of the math.
        </p>
        <h3>Accuracy</h3>
        <p>
          Note, you probably shouldn't use this if you work at NASA. The math
          under the hood assumes our solar system is 2D and that the planets
          follow a perfect circle. I also haven't addressed any precision issues
          with JavaScript so viewing dates like when the sun will explode will
          likely not work. I have a feeling this tool is only accurate to ±100
          years from Jan 01 2000. If you need something more accurate checkout a{' '}
          <Link href="https://in-the-sky.org/solarsystem.php" target="_BLANK">
            3D Diagram of the Solar System
          </Link>
          .
        </p>
        <h3>Approach</h3>
        <p>
          This site uses Nextjs, React, SVG and react-spring. Nextjs handles
          compiling and the app into static and re-hyrdratable assets. React
          handles rendering elements to the DOM and storing the state of things
          (like the date to visualize). SVG is used for rendering the view of
          the solar system (with infinite resolution). React-spring is used for
          animating dom attributes in react according to physics based springs.
          Using springs gives the animations that organic feel.
        </p>
      </main>
    </React.Fragment>
  )
}

const wrapperStyles = css`
  width: min(100%, 700px);
  margin: auto;
  padding: 15px;
  margin-top: 50px;

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin-bottom: 20px;
  }
`

const solarSystemStyles = css`
  height: 400px;
  padding: 0 20px;
`
