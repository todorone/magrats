import React from 'react'
import PropTypes from 'prop-types'

class SinglePostComment extends React.Component {
  static propTypes = {
    author: PropTypes.string,
    text: PropTypes.string,
  }

  state = { isFull: false }

  showAll = () => this.setState({ isFull: true })

  render () {
    const { author, text } = this.props
    return (
      <div>{author} {text}</div>
    )
  }
}

export default SinglePostComment
