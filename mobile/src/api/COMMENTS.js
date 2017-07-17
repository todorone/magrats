
const _comments = [
  'What an awesome post!',
  'Absolutely amazing',
  'Feel in love with what You wrote...',
  'Blissful!!!',
  '♥️♥️♥️',
  'Yay, cool...',
  'Great thoughts..',
  'What a brilliant picture!',
  'Very inspiring',
  'Want to be here 💌',
  'Great!!!',
]

export const getRandomCommentIds = (amount) => {
  return Object.keys(COMMENTS)
    .sort(() => 0.5 - Math.random())
    .slice(0, amount - 1)
}

const COMMENTS = _comments.reduce((result, current, index) => {
  result[`comment${index}`] = {
    id: `comment${index}`,
    text: current,
  }
  return result
}, {})

export default COMMENTS
