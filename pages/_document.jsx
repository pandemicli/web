import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class Doc extends Document {
  render() {
    return (
      <html>
        <Head />
        <body className="bg-white text-black dark:bg-black dark:text-white font-sans cursor-default m-8">
          <script src="/js/noflash.js" />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
