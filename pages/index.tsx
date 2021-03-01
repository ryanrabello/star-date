import Head from 'next/head'
import { Grid } from '@geist-ui/react'

export default function Home() {

  // const []
  return (
    <div>
      <Head>
        <title>Star Date</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Star Date
        </h1>
        <Grid.Container>
          <Grid md={12}>

          </Grid>
        </Grid.Container>
      </main>
    </div>
  )
}
