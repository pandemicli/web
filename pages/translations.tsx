import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { Footer, Header, Spinner } from '../components'
import { useFetch, useTheme } from '../hooks'

const Translations: NextPage = () => {
  useTheme()

  const { data, loading } = useFetch<{
    [key: string]: string
  }>('/api/translations')

  return (
    <>
      <Head>
        <title>Pandemic.li / Translations</title>
      </Head>

      <Header />

      <main>
        <h2 className="mb-8">Translations</h2>
        {loading && <Spinner />}
        {data && (
          <table>
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data).map(([key, value], index) => (
                <tr key={index}>
                  <td>
                    <code>{key}</code>
                  </td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>

      <Footer />
    </>
  )
}

export default Translations
