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
    // console.log(posts, users, comments)

    return (
      <Content>
        {Object.values(posts).map((post, i) => (
          <SinglePost
            key={i}
            name='kobybryant'
            thumbnailUrl='https://0.s3.envato.com/files/97977535/128/5_resize.png'
            photoUrl={post.url}
            likesNumber={Object.keys(post.likes).length}
            navigation={this.props.navigation}
          />
        ))}
      </Content>
    )
  }
}
