import React from 'react'
import PropTypes from 'prop-types'

import SinglePostView from './SinglePostView'

export default class SinglePost extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    photoUrl: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    likesNumber: PropTypes.number,
    date: PropTypes.number,
  }

  state = {
    isLiked: false,
    comments: ['Cool comment', 'another one looooooonnnnnnggggg....'],
  }

  switchLike = () => this.setState({ isLiked: !this.state.isLiked })

  showComments = () => {
    this.props.navigation.navigate('Comments')
  }

  render () {
    const { isLiked, comments } = this.state
    return (
      <SinglePostView
        {...this.props}
        isLiked={isLiked}
        comments={comments}
        onLike={this.switchLike}
        showComments={this.showComments}
      />
    )
  }
}
