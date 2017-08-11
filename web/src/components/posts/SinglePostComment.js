import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
      <Container>
        <Author>{author}</Author> {text}
      </Container>
    )
  }
}

const Container = styled.div`
  padding-bottom: 0.25rem;
`
const Author = styled.span`
  font-weight: 700;
`

export default SinglePostComment
