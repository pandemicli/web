import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

import { theme } from '../lib'

export default class Doc extends Document {
  render() {
    const mode = theme.get()

    return (
      <html className={`mode-${mode}`}>
        <Head />
        <body className="bg-white text-black dark:bg-black dark:text-white font-sans cursor-default m-8">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
