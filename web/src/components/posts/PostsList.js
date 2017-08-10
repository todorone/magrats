import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SinglePost from './SinglePost'

export default class PostsList extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
  }

  render () {
    return (
      this.props.posts.map((post) =>
        <SinglePost key={post.id} postId={post.id} />
      )
    )
  }
}
