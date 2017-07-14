import React from 'react'
import PropTypes from 'prop-types'

import SinglePostView from './SinglePostView'

export default class SinglePost extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    photoUrl: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    likesNumber: PropTypes.number,
  }

  state = {
    isLiked: false,
    comments: [],
    currentInput: '',
  }

  switchLike = () => this.setState({ isLiked: !this.state.isLiked })

  changeInput = text => this.setState({ currentInput: text })

  submitComment = e => {
    this.setState({ comments: [ ...this.state.comments, e.nativeEvent.text ] })
    this.setState({ currentInput: '' })
  }

  render () {
    const { isLiked, comments, currentInput } = this.state
    return (
      <SinglePostView
        {...this.props}
        isLiked={isLiked}
        onTapLike={this.switchLike}
        comments={comments}
        currentInput={currentInput}
        onInputChange={this.changeInput}
        onInputSubmit={this.submitComment}
      />
    )
  }
}
