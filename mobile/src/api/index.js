
const baseUrl = 'http://localhost:7777'

const fetchPosts = async () => {
  const response = await fetch(`${baseUrl}/posts`)
  const data = await response.json()
  console.log(data)
  return data
}

const fetchUsers = async () => {
  const response = await fetch(`${baseUrl}/users`)
  const data = await response.json()
  return data
}

const fetchComments = async () => {
  const response = await fetch(`${baseUrl}/comments`)
  const data = await response.json()
  return data
}

export default {
  fetchPosts,
  fetchUsers,
  fetchComments,
}
