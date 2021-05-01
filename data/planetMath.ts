import moment from 'moment'

export const PLANET_COUNT = 8 // sorry pluto
const initDate = moment('20000101', 'YYYYMMDD')
const planetData = [
  { initAngle: -0.3013, orbitDays: 88 },
  { initAngle: -1.5568, orbitDays: 224.7 },
  { initAngle: 3.2931, orbitDays: 365.2 },
  { initAngle: 1.5635, orbitDays: 687.0 },
  { initAngle: 2.1933, orbitDays: 4331 },
  { initAngle: 2.36, orbitDays: 10747 },
  { initAngle: 0.8054, orbitDays: 30589 },
  { initAngle: 0.5838, orbitDays: 59800 },
]

export function getPlanetAnglesFromDate(date: Date): number[] {
  const mDate = moment(date)
  const days = mDate.diff(initDate, 'days', true)
  const angles = planetData.map(({ initAngle, orbitDays }, i) => {
    // const percentOrbit = mod(days / orbitDays, 1);
    const percentOrbit = days / orbitDays;
    const orbitRad = 2 * Math.PI * percentOrbit + initAngle
    return orbitRad
  })

  return angles;
}

// Mod that follows math better. (Works for negative floating point numbers)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
function mod(a: number, n: number): number {
  return ((a % n ) + n ) % n;
}

export function degToRad(deg: number) {
  return (Math.PI * deg) / 180
}
