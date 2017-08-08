
export const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

export const getRandomDate = () => Date.now() - Math.round(1000000 * Math.random())

export const truncateString = (string, characters) => (
  (string.length > characters)
    ? string.substr(0, characters - 1) + '…'
    : string
)

export function getTimeAgo (val) {
  val = 0 | (Date.now() - val) / 1000
  let length = {
    second: 60,
    minute: 60,
    hour: 24,
    day: 7,
    week: 4.35,
    month: 12,
    year: 10000,
  }

  let result
  for (let unit in length) {
    result = val % length[unit]
    if (!(val = 0 | val / length[unit])) {
      return result + ' ' + (result - 1 ? unit + 's' : unit) + ' ago'
    }
  }
}
