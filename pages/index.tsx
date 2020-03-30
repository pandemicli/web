import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { Icon } from '../components'
import { useTheme } from '../hooks'

const Home: NextPage = () => {
  useTheme()

  return (
    <>
      <Head>
        <title>Pandemic.li / Social tracking for Coronavirus</title>
        <meta content="Social tracking for Coronavirus" name="description" />
        <meta
          content="pandemic, corona, virus, covid-19, tracking, safety, health"
          name="keywords"
        />
      </Head>

      <header className="flex items-center">
        <img
          alt="Pandemic.li"
          className="h-16 w-16"
          src="/img/pandemicli.svg"
        />
        <div className="ml-8">
          <h1>Pandemic.li</h1>
          <p className="m-0">Track who you meet, where you go</p>
        </div>
      </header>

      <main>
        <section className="my-12">
          <h2>What is Pandemic.li?</h2>
          <p>
            Pandemic.li is a mobile app that allows you to keep a track of
            people you meet and places you visit. It also, optionally, keeps a
            track of your location in the background when you move. This data
            can be shared with healthcare professionals to help them track and
            find other potential cases.
          </p>
          <h2>How does it help?</h2>
          <p>
            If you are infected, we notify everyone who has been in contact with
            you and anyone else who went to the same place as you to get tested
            and take the necessary precautions.
          </p>
          <h2>What about privacy?</h2>
          <p>
            Your data is encrypted and stored in the cloud. If you report
            positive for COVID-19, we send an anonymous notification to people
            you may have come in contact with without revealing your name. You
            do not need to worry about a pitchfork mob coming for you. You are
            perfectly safe (from them!)
          </p>
          <h2>If I use this app, I can go out and meet anyone I want?</h2>
          <p>
            Coronavirus is highly contagious and the best practice is
            self-isolation and social distancing. Most governments have
            initiated lockdowns and companies are asking their employees to work
            from home. So no, just using this app will not keep you safe. But it
            will help you get ahead in the case of known cases in your circle.
          </p>
          <h2>I am sold. Where do I get it?</h2>
          <p>
            I am working hard to bring this to App Store and Google Play within
            the next few days. Please stay tuned and follow{' '}
            <a href="https://twitter.com/pandemicli">@pandemicli</a> on Twitter
            for updates.
          </p>
          <p>In the meantime, here are a few screenshots of what to expect.</p>
        </section>

        <section className="flex flex-wrap -m-8">
          <figure>
            <img
              alt="Today"
              className="dark:hidden"
              src="/img/screenshots/light/1-today.png"
            />
            <img
              alt="Today"
              className="hidden dark:block"
              src="/img/screenshots/dark/1-today.png"
            />
            <figcaption>
              Day screen to track people you have met and places you have
              visited. You can go back in the past (not literally!) and log days
              you might have missed.
            </figcaption>
          </figure>
          <figure>
            <img
              alt="Contacts"
              className="dark:hidden"
              src="/img/screenshots/light/2-contacts.png"
            />
            <img
              alt="Contacts"
              className="hidden dark:block"
              src="/img/screenshots/dark/2-contacts.png"
            />
            <figcaption>
              Contacts list; add, remove, favorite. You can sync your phone
              contacts with a single tap.
            </figcaption>
          </figure>
          <figure>
            <img
              alt="Places"
              className="dark:hidden"
              src="/img/screenshots/light/3-places.png"
            />
            <img
              alt="Places"
              className="hidden dark:block"
              src="/img/screenshots/dark/3-places.png"
            />
            <figcaption>
              Places list; add, remove, favorite. Search from Google Places,
              drop a marker on a map, or just call it{' '}
              <em>Conference Room 2B</em>.
            </figcaption>
          </figure>
          <figure>
            <img
              alt="Profile"
              className="dark:hidden"
              src="/img/screenshots/light/4-profile.png"
            />
            <img
              alt="Profile"
              className="hidden dark:block"
              src="/img/screenshots/dark/4-profile.png"
            />
            <figcaption>
              Add other Pandemic.li users with a quick scan or share your own QR
              code.
            </figcaption>
          </figure>
        </section>

        <section className="my-12">
          <h2>Wait, who are you?</h2>
          <p>
            I am Ali Zahid, a guy who builds cool stuff with React/Native,
            Node.js, MongoDB, GraphQL, and TypeScript. Check out my{' '}
            <a href="http://alizahid.dev/">blog</a>.
          </p>
        </section>
      </main>

      <footer className="flex items-center justify-between text-sm max-w-2xl">
        <span>
          &copy; {new Date().getFullYear()} /{' '}
          <a href="http://alizahid.dev/">Ali Zahid</a>
        </span>
        <nav className="flex">
          <a href="https://twitter.com/pandemicli">
            <Icon className="h-6 w-6" name="twitter" />
          </a>
        </nav>
      </footer>
    </>
  )
}

export default Home
