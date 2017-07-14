import { injectGlobal } from 'styled-components'

// COLORS
export const OFF_WHITE = '#fcfdfe'
export const ORANGE = '#ee693f'
export const GREEN = '#739f3d'
export const DARK_GRAY = '#575757'
export const GRAY = '#797979'
export const LIGHT_GRAY = '#e6e6e6'

// GLOBALS
// eslint-disable-next-line
injectGlobal`
  html, body {
    font-family: -apple-system, BlinkMacSystemFont, 
      "Segoe UI", "Roboto", "Oxygen", 
      "Ubuntu", "Cantarell", "Fira Sans", 
      "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 20px;
  }

  a {
    // color: ${DARK_GRAY};
    text-decoration: none;
    transition: color 0.2s ease-out;
  }
  
  a:hover {
    // color: ${GRAY};
  }
`
