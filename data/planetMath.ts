
export const PLANET_COUNT = 8 // sorry pluto
const initDate = new Date();
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
    return Array.from(new Array(PLANET_COUNT)).map(() => degToRad(Math.random() * 360 - 180))
}

export function degToRad(deg: number) {
    return (Math.PI * deg) / 180
  }