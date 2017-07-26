
export const WHITE = '#fff'
export const ALMOST_WHITE = '#f8f8f8'
export const BLACK = '#000'

export const BLUE = '#007aff'

export const DARKEST_GRAY = '#111'
export const DARK_GRAY = '#666'
export const GRAY = '#999'
export const LIGHT_GRAY = '#999'
export const LIGHTER_GRAY = '#bbb'
export const LIGHTEST_GRAY = '#ddd'

/**
 * Transform object { style1: true, style2: false, ... } to array, compatible with
 * style prop of element. Styles with "falsy" values are removed.
 *
 * @param styles
 * @returns {Array}
 */
export function composeStyles (...styles) {
  const result = []

  styles.forEach(styleArgument => {
    if (typeof styleArgument === 'object') {
      const stylesMap = Object.entries(styleArgument)

      for (let i = 0; i < stylesMap.length; i++) {
        if (stylesMap[i][1]) result.push(parseInt(stylesMap[i][0]))
      }
    } else {
      result.push(parseInt(styleArgument))
    }
  })

  return result
}
