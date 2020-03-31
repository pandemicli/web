import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class Doc extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            content="Privacy-focused contact tracing for Coronavirus"
            name="description"
          />
          <meta
            content="pandemic, corona, virus, covid-19, contact tracing, safety, health"
            name="keywords"
          />
        </Head>
        <body className="bg-white text-black dark:bg-black dark:text-white font-sans cursor-default container mx-auto">
          <script src="/js/noflash.js" />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
