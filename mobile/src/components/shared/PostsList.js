import React from 'react'
import PropTypes from 'prop-types'
import { Content } from 'native-base'

import SinglePost from '../post/SinglePost'

export default class PostsList extends React.Component {
  static propTypes = {
    posts: PropTypes.object,
    users: PropTypes.object,
    comments: PropTypes.object,
  }

  render () {
    const { posts, users, comments } = this.props
    // console.error(comments)

    return (
      <Content>
        {Object.values(posts).map((post) => (
          <SinglePost
            key={post.id}
            post={post}
            users={users}
            comments={comments}
            navigation={this.props.navigation}
          />
        ))}
      </Content>
    )
  }
}
