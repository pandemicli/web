import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { Footer, Header } from '../components'
import { useTheme } from '../hooks'

const Screenshots: NextPage = () => {
  useTheme()

  return (
    <>
      <Head>
        <title>Pandemic.li / Screenshots</title>
      </Head>

      <Header />

      <main>
        <h2 className="mb-8">Screenshots</h2>
        <section className="flex flex-wrap -m-8">
          <figure>
            <a
              className="dark:hidden"
              href="/img/screenshots/light/1-today.png"
              title="Today">
              <img alt="Today" src="/img/screenshots/light/1-today.png" />
            </a>
            <a
              className="hidden dark:block"
              href="/img/screenshots/dark/1-today.png"
              title="Today">
              <img alt="Today" src="/img/screenshots/dark/1-today.png" />
            </a>
            <figcaption>
              Day screen to track people you have met and places you have
              visited. You can go back in the past (not literally!) and log days
              you might have missed.
            </figcaption>
          </figure>
          <figure>
            <a href="/img/screenshots/light/2-contacts.png" title="Contacts">
              <img
                alt="Contacts"
                className="dark:hidden"
                src="/img/screenshots/light/2-contacts.png"
              />
            </a>
            <a href="/img/screenshots/dark/2-contacts.png" title="Contacts">
              <img
                alt="Contacts"
                className="hidden dark:block"
                src="/img/screenshots/dark/2-contacts.png"
              />
            </a>
            <figcaption>
              Contacts list; add, remove, favorite. You can sync your phone
              contacts with a single tap.
            </figcaption>
          </figure>
          <figure>
            <a href="/img/screenshots/light/3-places.png" title="Places">
              <img
                alt="Places"
                className="dark:hidden"
                src="/img/screenshots/light/3-places.png"
              />
            </a>
            <a href="/img/screenshots/dark/3-places.png" title="Places">
              <img
                alt="Places"
                className="hidden dark:block"
                src="/img/screenshots/dark/3-places.png"
              />
            </a>
            <figcaption>
              Places list; add, remove, favorite. Search from Google Places,
              drop a marker on a map, or just call it{' '}
              <em>Conference Room 2B</em>.
            </figcaption>
          </figure>
          <figure>
            <a href="/img/screenshots/light/4-profile.png" title="Profile">
              <img
                alt="Profile"
                className="dark:hidden"
                src="/img/screenshots/light/4-profile.png"
              />
            </a>
            <a href="/img/screenshots/dark/4-profile.png" title="Profile">
              <img
                alt="Profile"
                className="hidden dark:block"
                src="/img/screenshots/dark/4-profile.png"
              />
            </a>
            <figcaption>
              Add other Pandemic.li users with a quick scan or share your own QR
              code. You can also delete your account and remove all data from
              the servers.
            </figcaption>
          </figure>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Screenshots
