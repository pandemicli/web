import '../assets/global.scss'

import App from 'next/app'
import React from 'react'

export default class CoinPouch extends App {
  render() {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}
