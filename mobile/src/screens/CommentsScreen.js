import React, { Component } from 'react'
import { connect } from 'react-redux'

import Container from '../components/Container'
import Content from '../components/Content'
import Header from '../components/Header'
import SingleComment from '../components/SingleComment'
import { getComments, getUsers, getCommentsByIds } from '../selectors/selectors'

class CommentsScreen extends Component {
  render () {
    const comments = getCommentsByIds(this.props.commentsIds, this.props.comments)

    return (
      <Container>
        <Header left='back' title='Comments' />

        <Content>
          {comments.map(comment => (
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

const mapStateToProps = state => ({
  users: getUsers(state),
  comments: getComments(state),
})

export default connect(mapStateToProps)(CommentsScreen)
