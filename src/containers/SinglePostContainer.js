import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'

import SinglePost from '../components/SinglePost'
import { setLikeStatus } from '../actions/data'
import {
  getPostOwner,
  isPostLiked,
  getPostById,
  getPosts,
  getMyUserId,
  getLastCommentsOfPost
} from '../selectors/selectors'

class SinglePostContainer extends PureComponent {
  static propTypes = {
    myUserId: PropTypes.string.isRequired,
    postId: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
    post: PropTypes.shape({
      id: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      likes: PropTypes.array.isRequired,
      comments: PropTypes.array.isRequired,
      published: PropTypes.number.isRequired,
    }).isRequired,
    owner: PropTypes.object.isRequired,
    twoComments: PropTypes.array.isRequired,
    isLiked: PropTypes.bool.isRequired,
  }

  switchLike = () => {
    const { myUserId, post, isLiked, dispatch } = this.props

    dispatch(setLikeStatus(post.id, myUserId, !isLiked))
  }

  showComments = () => Actions.Comments({ postId: this.props.post.id })

  showLikes = () => Actions.Likes({ postId: this.props.post.id })

  render () {
    const { post, isLiked, twoComments, owner } = this.props

    return (
      <SinglePost
        owner={owner}
        photoUrl={post.url}
        likesNumber={post.likes.length}
        isLiked={isLiked}
        description={post.description}
        location={post.location}
        comments={twoComments}
        commentsNumber={post.comments.length}
        date={post.published}
        onTapLike={this.switchLike}
        showComments={this.showComments}
        showLikes={this.showLikes}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  myUserId: getMyUserId(state),
  post: getPostById(state, ownProps.postId),
  owner: getPostOwner(state, ownProps.postId),
  twoComments: getLastCommentsOfPost(state, ownProps.postId),
  isLiked: isPostLiked(state, ownProps.postId),
  posts: getPosts(state), // To trigger component update, otherwise it won't update
})

export default connect(mapStateToProps)(SinglePostContainer)
