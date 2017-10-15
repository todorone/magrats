import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import SinglePost from '../containers/SinglePostContainer'

export default class PostsList extends Component {
  static propTypes = {
    posts: PropTypes.array,
  }

  render() {
    return (
      <View>
        {this.props.posts.map(post => <SinglePost key={post.id} postId={post.id} />)}
      </View>
    )
  }
}
