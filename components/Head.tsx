import React from 'react'
import Head from 'next/head'

export function CustomHead({ title = 'StarDate' }) {
  return (
    <React.Fragment>
      {/* SEO */}
      <meta property="og:title" content="StarDate" />
      <meta
        property="og:description"
        content="See the position of the planets on any day!"
      />
      <meta
        property="og:image"
        content={`${process.env.basePath}/star_date.jpg`}
      />
      <meta
        property="og:url"
        content="https://asteroidice.github.io/star-date/"
      />
      <meta
        name="twitter:card"
        content={`${process.env.basePath}/star_date.jpg`}
      />

      <meta property="og:site_name" content="StarDate" />
      <meta
        name="twitter:image:alt"
        content="A 2D cartoon view of the solar system along the eliptical plain."
      />

      {/* PWA */}
      <meta name="theme-color" content="#161616" />

      {/* Favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={process.env.basePath + '/apple-touch-icon.png'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={process.env.basePath + '/favicon-32x32.png'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={process.env.basePath + '/favicon-16x16.png'}
      />
      <link rel="manifest" href={process.env.basePath + '/site.webmanifest'} />
      <link
        rel="mask-icon"
        href={process.env.basePath + '/safari-pinned-tab.svg'}
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="icon" href={process.env.basePath + '/favicon.ico'} />
      <title>{title}</title>
    </React.Fragment>
  )
}
