import Link from 'next/link'
import React, { FunctionComponent } from 'react'

export const Header: FunctionComponent = () => (
  <header className="flex m-8 flex-col lg:items-center lg:flex-row lg:justify-between">
    <Link href="/">
      <a className="flex items-center">
        <img
          alt="Pandemic.li"
          className="h-16 w-16"
          src="/img/pandemicli.svg"
        />
        <div className="ml-8">
          <h1>Pandemic.li</h1>
          <p className="m-0 text-black dark:text-white">
            Privacy-focused contact tracing for Coronavirus
          </p>
        </div>
      </a>
    </Link>
    <nav className="mt-8 lg:mt-0">
      <a
        className="font-medium"
        href="https://alizahid0.typeform.com/to/V9Zd0y">
        Beta
      </a>
      <Link href="/screenshots">
        <a className="font-medium ml-4">Screenshots</a>
      </Link>
      <Link href="/contribute">
        <a className="font-medium ml-4">Contribute</a>
      </Link>
    </nav>
  </header>
)
