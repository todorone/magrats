import React from 'react'
import PropTypes from 'prop-types'

import SinglePostView from './SinglePostView'
import { getPostOwner, getCommentsByIds } from '../../selectors'

export default class SinglePost extends React.Component {
  static propTypes = {
    post: PropTypes.shape({
      owner: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      likes: PropTypes.array.isRequired,
      comments: PropTypes.array.isRequired,
      published: PropTypes.number.isRequired,
    }).isRequired,
    users: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired,
  }

  state = {
    isLiked: false,
  }

  switchLike = () => this.setState({ isLiked: !this.state.isLiked })

  showComments = () =>
    this.props.navigation.navigate('Comments', { commentsIds: this.props.post.comments })

  showLikes = () =>
    this.props.navigation.navigate('Likes', { likes: this.props.post.likes })

  render () {
    const { post, users, comments } = this.props
    const { isLiked } = this.state
    const owner = getPostOwner(post, users)
    return (
      <SinglePostView
        owner={owner}
        photoUrl={post.url}
        likesNumber={post.likes.length}
        isLiked={isLiked}
        description={post.description}
        comments={getCommentsByIds(post.comments.slice(0, 2), comments)}
        commentsNumber={post.comments.length}
        date={post.published}
        onLike={this.switchLike}
        showComments={this.showComments}
        showLikes={this.showLikes}
      />
    )
  }
}
