
exports.getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

exports.getRandomDate = () => Date.now() - Math.round(1000000 * Math.random())