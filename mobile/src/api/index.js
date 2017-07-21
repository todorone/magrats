
const baseUrl = (process.env.NODE_ENV === 'production')
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

export default {
  fetchPosts,
  fetchUsers,
  fetchComments,
}
