import { css } from '@emotion/react'
import moment from 'moment'
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
    r: oneRingSize * (i + 1),
    angle: planetAngles[i],
  }))

  return (
    <div ref={ref} css={wrapperStyles}>
      <svg width={'100%'} height={'100%'}>
        {planets.map(({ r }, i) => {
          return (
            <circle
              key={i}
              cx={center[0]}
              cy={center[1]}
              r={r}
              css={orbitStyles}
            />
          )
        })}
        {planets.map(({ r, angle }, i) => {
          const x = Math.cos(angle) * r + center[0]
          const y = -Math.sin(angle) * r + center[1]

          return <circle key={i} cx={x} cy={y} r={10} css={planetStyles} />
        })}
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
