/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { IntlProvider } from "react-intl"

export const wrapRootElement = ({ element }) => (
  <IntlProvider locale="en" messages={{ en: {} }}>
    {element}
  </IntlProvider>
)
