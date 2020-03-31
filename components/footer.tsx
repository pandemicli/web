import React, { FunctionComponent } from 'react'

import { Icon } from './icon'

export const Footer: FunctionComponent = () => (
  <footer className="flex items-center justify-between text-sm m-8">
    <span>
      &copy; {new Date().getFullYear()} /{' '}
      <a href="http://alizahid.dev">Ali Zahid</a>
    </span>
    <nav className="flex">
      <a href="https://twitter.com/pandemicli">
        <Icon className="h-6 w-6" name="twitter" />
      </a>
    </nav>
  </footer>
)
