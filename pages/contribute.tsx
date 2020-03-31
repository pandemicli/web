import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { Footer, Header } from '../components'
import { useTheme } from '../hooks'
import Link from 'next/link'

const Contribute: NextPage = () => {
  useTheme()

  return (
    <>
      <Head>
        <title>Pandemic.li / Contribute</title>
      </Head>

      <Header />

      <main>
        <h2>How can I contribute?</h2>
        <p>
          I need help getting the word out to government hehalth departments so
          they can endorse the app. Here is a{' '}
          <a href="/static/pandemicli.pdf">deck</a> you may use.
        </p>
        <p>
          I also need help translating the app into multiple languages. If you
          can help with the following languages, please reach out on{' '}
          <a href="https://twitter.com/pandemicli">Twitter</a> or{' '}
          <a href="mailto:ali@pandemic.li">email</a>. You can view the English
          strings{' '}
          <Link href="/translations">
            <a>here</a>
          </Link>
          .
        </p>
        <ul className="mx-8 list-disc">
          <li>Arabic</li>
          <li className="line-through">Urdu</li>
          <li>Pashto</li>
          <li>Punjabi</li>
          <li>Sindhi</li>
          <li>Balochi</li>
          <li>Kashmiri</li>
        </ul>
        <h2>Donations</h2>
        <p>
          I need licenses for the following software. If you can help with that,
          I would appreciate it tremendously.
        </p>
        <ul className="mx-8 list-disc">
          <li>
            <a
              href="https://notifee.app"
              rel="noopener noreferrer"
              target="_blank">
              Notifee
            </a>{' '}
            &mdash; for push notifications
          </li>
          <li>
            <a
              href="https://www.transistorsoft.com/shop/products/react-native-background-geolocation"
              rel="noopener noreferrer"
              target="_blank">
              React Native Background Geolocation
            </a>{' '}
            &mdash; for location tracking
          </li>
        </ul>
      </main>

      <Footer />
    </>
  )
}

export default Contribute
