import { css } from '@emotion/react'
import { animated, useSprings, to } from 'react-spring'
import React from 'react'
import useResizeObserver from 'use-resize-observer/polyfilled'
import {
  PLANET_COUNT,
  degToRad,
  getPlanetAnglesFromDate,
} from '../data/planetMath'

interface IProps {
  date: Date
}

const SOLAR_PADDING = 20

interface RenderedPlanet {
  r: number // radius
  angle: number // deg
}

export function SolarSystem({ date }: IProps) {
  const { ref, width = 100, height = 100 } = useResizeObserver()
  const center = [width / 2, height / 2]

  const fullR = Math.min(width / 2, height / 2) - SOLAR_PADDING
  const oneRingSize = fullR / PLANET_COUNT
  const planetAngles = getPlanetAnglesFromDate(date)
  const planets = Array.from(new Array(PLANET_COUNT)).map((_, i) => ({
    from: { r: 0, angle: planetAngles[i] - Math.PI },
    r: oneRingSize * (i + 1),
    angle: planetAngles[i],
    config: { mass: 1, tension: 280, friction: 160 },
  }))

  const springs = useSprings(planets.length, planets)
  return (
    <div
      ref={ref}
      //@ts-ignore
      css={wrapperStyles}
    >
      <svg width={'100%'} height={'100%'}>
        {springs.map(({ r }, i) => {
          return (
            <animated.circle
              key={i}
              cx={center[0]}
              cy={center[1]}
              r={r}
              //@ts-ignore
              // css={orbitStyles}
              stroke={"white"}
              strokeWidth={2}
              fill="transparent"
            />
          )
        })}
        {springs.map(({ r, angle }, i) => (
          <animated.circle
            key={i}
            cx={to([r, angle], (r, angle) => Math.cos(angle) * r + center[0])}
            cy={to([r, angle], (r, angle) => -Math.sin(angle) * r + center[1])}
            r={10}
            fill="white"
            //@ts-ignore
            // css={planetStyles}
          />
        ))}
      </svg>
    </div>
  )
}

const wrapperStyles = css`
  height: 100%;
  width: 100%;
`

const orbitStyles = css`
  stroke: white;
  stroke-width: 2px;
  fill: transparent;
`

const planetStyles = css`
  fill: white;
`
