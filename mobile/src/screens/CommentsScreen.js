import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Container from '../components/Container'
import Content from '../components/Content'
import Header from '../components/Header'
import SingleComment from '../components/SingleComment'
import { getUsers, getCommentsOfPost } from '../selectors/selectors'

class CommentsScreen extends Component {
  static propTypes = {
    postId: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
    users: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
  }

  render () {
    return (
      <Container>
        <Header left='back' title='Comments' />

        <Content>
          {this.props.comments.map(comment => (
            <SingleComment
              owner={this.props.users[comment.owner]}
              text={comment.text}
              date={comment.date}
              key={comment.id}
            />
          ))}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  users: getUsers(state),
  comments: getCommentsOfPost(state, ownProps.postId),
})

export default connect(mapStateToProps)(CommentsScreen)
