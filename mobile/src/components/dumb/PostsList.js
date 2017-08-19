import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import SinglePost from '../smart/SinglePostContainer'

export default class PostsList extends React.Component {
  static propTypes = {
    posts: PropTypes.array,
  }

  render () {
    return (
      <View>
        {this.props.posts.map((post) => (
          <SinglePost
            key={post.id}
            postId={post.id}
            navigation={this.props.navigation}
          />
        ))}
      </View>
    )
  }
}
