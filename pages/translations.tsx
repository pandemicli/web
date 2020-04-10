import axios from 'axios'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { Footer, Header } from '../components'
import { useTheme } from '../hooks'

interface Props {
  translations: JSON
}

const Translations: NextPage<Props> = ({ translations }) => {
  useTheme()

  return (
    <>
      <Head>
        <title>Pandemic.li / Translations</title>
      </Head>

      <Header />

      <main>
        <h2 className="mb-8">Translations</h2>
        <table>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(translations).map(([key, value], index) => (
              <tr key={index}>
                <td>
                  <code>{key}</code>
                </td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <Footer />
    </>
  )
}

Translations.getInitialProps = async () => {
  const { data } = await axios(process.env.GITHUB_TRANSLATIONS_URI)

  return {
    translations: data
  }
}

export default Translations
