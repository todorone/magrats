import { css, injectGlobal } from 'styled-components'

// COLORS
export const WHITE = '#fff'
export const ALMOST_WHITE = '#fafafa'
export const BLACK = '#000'

export const BLUE = '#007aff'

export const RED = '#ff584f'

export const DARKEST_GRAY = '#111'
export const DARK_GRAY = '#666'
export const GRAY = '#999'
export const LIGHT_GRAY = '#999'
export const LIGHTER_GRAY = '#bbb'
export const LIGHTEST_GRAY = '#ddd'

// SIZES
export const OVERALL_CONTAINER_WIDTH = '45rem'

// SNIPPETS
export const ABSOLUTE_FILL_POSITION = `
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
export const media = {
  big: (...args) => css`@media (max-width: 768px) { ${css(...args)} }`,
  medium: (...args) => css`@media (max-width: 640px) { ${css(...args)} }`,
  small: (...args) => css`@media (max-width: 480px) { ${css(...args)} }`,
}

// GLOBALS
// eslint-disable-next-line
injectGlobal`
  * {
    box-sizing: border-box;
  }

  html, body {
    font-family: -apple-system, BlinkMacSystemFont, 
      "Segoe UI", "Roboto", "Oxygen", 
      "Ubuntu", "Cantarell", "Fira Sans", 
      "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 20px;
  }

  a {
    color: ${BLACK};
    text-decoration: none;
    transition: color 0.2s ease-out;
  }
  
  a:hover {
    color: ${DARK_GRAY};
  }
`
