import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class Doc extends Document {
  render() {
    return (
      <html>
        <Head />
        <body className="bg-black text-white font-sans cursor-default m-8">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
