import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import { Footer, Header } from '../components'
import { useTheme } from '../hooks'

const Home: NextPage = () => {
  useTheme()

  return (
    <>
      <Head>
        <title>Pandemic.li / Social tracking for Coronavirus</title>
      </Head>

      <Header />

      <main>
        <h2>What is Pandemic.li?</h2>
        <p>
          Pandemic.li is a mobile app that allows you to keep a track of people
          you meet and places you visit. It also, optionally, keeps a track of
          your location in the background when you move. This data can be shared
          with healthcare professionals to help them track and find other
          potential cases.
        </p>
        <h2>How does it help?</h2>
        <p>
          If you are infected, we anonymously notify everyone who has been in
          contact with you and anyone else who went to the same place as you to
          get tested and take the necessary precautions.
        </p>
        <h2>What about privacy?</h2>
        <p>
          Your data is end-to-end encrypted and stored in the cloud. If you
          report positive for COVID-19, we send an anonymous notification to
          people you may have come in contact without revealing your identity.
          You do not need to worry about a pitchfork mob coming for you. You are
          perfectly safe (from them!)
        </p>
        <h2>If I use this app, I can go out and meet anyone I want?</h2>
        <p>
          Coronavirus is highly contagious and the best practice is
          self-isolation and social distancing. Most governments have initiated
          lockdowns and companies are asking their employees to work from home.
          So no, just using this app will not keep you safe. But it will help
          you get ahead in the case of known cases in your circle.
        </p>
        <h2>I am sold. Where do I get it?</h2>
        <p>
          I am working hard to bring this to App Store and Google Play within
          the next few days. Please stay tuned and follow{' '}
          <a href="https://twitter.com/pandemicli">@pandemicli</a> on Twitter
          for updates.
        </p>
        <p>
          In the meantime, here are a few{' '}
          <Link href="/screenshots">
            <a>screenshots</a>
          </Link>{' '}
          of what to expect.
        </p>
        <h2>Technical details</h2>
        <p>
          Pandemic.li is built with React Native and uses a GraphQL API built
          with Node and uses MongoDB as the database. It is written with
          TypeScript and uses the best practices that I know of to bring you the
          fastest, smoothest experience possible.
        </p>
        <h2>Wait, who are you?</h2>
        <p>
          I am Ali Zahid, a guy who builds cool stuff with React/Native,
          Node.js, MongoDB, GraphQL, and TypeScript. Check out my{' '}
          <a href="http://alizahid.dev/">blog</a>.
        </p>
      </main>

      <Footer />
    </>
  )
}

export default Home
