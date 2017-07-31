import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SinglePostView from './SinglePostView'
import { setLikeStatus } from '../../actions'
import { getPostOwner, getCommentsByIds, isPostLiked } from '../../selectors'

class SinglePost extends React.Component {
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

  switchLike = () => {
    const { post, dispatch } = this.props
    const isLiked = isPostLiked(post)
    dispatch(setLikeStatus(post.id, 'luke_skywalker', !isLiked))

    // setTimeout(() => this.forceUpdate(), 1300)
  }

  showComments = () =>
    this.props.navigation.navigate('Comments', { commentsIds: this.props.post.comments })

  showLikes = () =>
    this.props.navigation.navigate('Likes', { likes: this.props.post.likes })

  render () {
    const { post, users, comments } = this.props
    const isLiked = isPostLiked(post)
    const owner = getPostOwner(post, users)

    if (post.id === 'post0') {
      console.log('SinglePost render')
    }

    return (
      <SinglePostView
        owner={owner}
        photoUrl={post.url}
        likesNumber={post.likes.length}
        isLiked={isLiked}
        description={post.description}
        location={post.location}
        comments={getCommentsByIds(post.comments.slice(0, 2), comments)}
        commentsNumber={post.comments.length}
        date={post.published}
        onTapLike={this.switchLike}
        showComments={this.showComments}
        showLikes={this.showLikes}
      />
    )
  }
}

export default connect()(SinglePost)
