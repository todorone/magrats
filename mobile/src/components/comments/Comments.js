import React from 'react'
import { connect } from 'react-redux'

import Container from '../shared/Container'
import Content from '../shared/Content'
import SimpleHeader from '../shared/SimpleHeader'
import SingleComment from './SingleComment'
import { getComments, getUsers, getCommentsByIds, getUserById } from '../../selectors'

class Comments extends React.Component {
  goBack = () => this.props.navigation.goBack()

  render () {
    const { commentsIds } = this.props.navigation.state.params
    const comments = getCommentsByIds(commentsIds, this.props.comments)

    return (
      <Container>
        <SimpleHeader left='back' title='Comments' goBack={this.goBack} />

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
