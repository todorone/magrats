import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import SinglePost from '../post/SinglePost'

export default class PostsList extends React.Component {
  static propTypes = {
    posts: PropTypes.array,
    users: PropTypes.object,
    comments: PropTypes.object,
  }

  render () {
    const { posts, users, comments } = this.props

    return (
      <View>
        {posts.map((post) => (
          <SinglePost
            key={post.id}
            post={post}
            users={users}
            comments={comments}
            navigation={this.props.navigation}
          />
        ))}
      </View>
    )
  }
}
