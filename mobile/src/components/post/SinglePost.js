import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SinglePostView from './SinglePostView'
import { setLikeStatus } from '../../shared/actions/data'
import {
  getPostOwner,
  isPostLiked,
  getPostById,
  getPosts,
  getUsers,
  getComments,
  getMyUserId,
  get2CommentsOfPost
} from '../../shared/selectors'

class SinglePost extends React.Component {
  static propTypes = {
    myUserId: PropTypes.string.isRequired,
    postId: PropTypes.string.isRequired,
    post: PropTypes.shape({
      owner: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      likes: PropTypes.array.isRequired,
      comments: PropTypes.array.isRequired,
      published: PropTypes.number.isRequired,
    }).isRequired,
    owner: PropTypes.object.isRequired,
    twoComments: PropTypes.array.isRequired,
    isLiked: PropTypes.bool.isRequired,
    users: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired,
  }

  switchLike = () => {
    const { myUserId, post, isLiked, dispatch } = this.props

    dispatch(setLikeStatus(post.id, myUserId, !isLiked))
  }

  showComments = () =>
    this.props.navigation.navigate('Comments', { commentsIds: this.props.post.comments })

  showLikes = () =>
    this.props.navigation.navigate('Likes', { likes: this.props.post.likes })

  render () {
    const { post, isLiked, twoComments, owner } = this.props

    return (
      <SinglePostView
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
  twoComments: get2CommentsOfPost(state, ownProps.postId),
  isLiked: isPostLiked(state, ownProps.postId),
  posts: getPosts(state), // To trigger component update, otherwise it won't update
  users: getUsers(state),
  comments: getComments(state),
})

export default connect(mapStateToProps)(SinglePost)
