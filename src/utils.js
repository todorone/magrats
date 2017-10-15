// Truncates string if length > maxCharacters, adding "…" at the end
export function truncateString(string, maxCharacters) {
  return string.length > maxCharacters
    ? string.substr(0, maxCharacters - 1) + '…'
    : string
}
// Converts date to "x units ago" format
export function getTimeAgo(val) {
  val = 0 | ((Date.now() - val) / 1000)
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
    if (!(val = 0 | (val / length[unit]))) {
      return result + ' ' + (result - 1 ? unit + 's' : unit) + ' ago'
    }
  }
}
