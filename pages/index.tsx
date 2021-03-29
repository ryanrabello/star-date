import Head from 'next/head'
import { Grid } from '@geist-ui/react'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Star Date</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid.Container>
          <Grid md={12}>{/* <SolarSystem /> */}</Grid>
          <Grid md={12}>{/* <Configurations /> */}</Grid>
        </Grid.Container>
      </main>
    </div>
  )
}
