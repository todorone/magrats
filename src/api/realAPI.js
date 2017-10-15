// Real API is outdated so it's not usable with current app's version
const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'http://magrats-api.todor.one'
    : 'http://localhost:7777'

const fetchData = type => async () => {
  try {
    const response = await fetch(`${baseUrl}/${type}`)
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

const fetchPosts = fetchData('posts')

const fetchUsers = fetchData('users')

const fetchComments = fetchData('comments')

export const API = {
  fetchPosts,
  fetchUsers,
  fetchComments,
}
