import React from 'react'
import { connect } from 'react-redux'

import Container from '../shared/Container'
import Content from '../shared/Content'
import Header from '../shared/Header'
import SingleComment from './SingleComment'
import { getComments, getUsers, getCommentsByIds, getUserById } from '../../shared/selectors'

class Comments extends React.Component {
  goBack = () => this.props.navigation.goBack()

  render () {
    const { commentsIds } = this.props.navigation.state.params
    // const commentsIds = []
    const comments = getCommentsByIds(commentsIds, this.props.comments)

    return (
      <Container>
        <Header left='back' title='Comments' goBack={this.goBack} />

        <Content>
          {comments.map(comment => (
            <SingleComment
              owner={getUserById(comment.owner, this.props.users)}
              text={comment.text}
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

export default connect(mapStateToProps)(Comments)
