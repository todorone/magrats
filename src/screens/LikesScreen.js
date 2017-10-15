import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'

import Container from '../components/Container'
import Content from '../components/Content'
import Header from '../components/Header'
import SingleLike from '../components/SingleLike'
import {
  isMeFollowingUser,
  getUsersWhoLikesPost,
  getMyUserId,
} from '../selectors/selectors'
import { setFollowStatus } from '../actions/data'

class LikesScreen extends Component {
  static propTypes = {
    postId: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
    users: PropTypes.array.isRequired,
    myUserId: PropTypes.string.isRequired,
  }

  goToProfile = userId => Actions.Profile({ userId, backIcon: true })

  switchFollow = (userId, status) =>
    this.props.dispatch(setFollowStatus(userId, this.props.myUserId, status))

  render() {
    const { users, myUserId } = this.props

    return (
      <Container>
        <Header left="back" title="Likes" />

        <Content>
          {users.map(user => (
            <SingleLike
              owner={user}
              goToProfile={this.goToProfile}
              switchFollow={this.switchFollow}
              isMeFollowing={isMeFollowingUser(user, myUserId)}
              key={user.id}
            />
          ))}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  users: getUsersWhoLikesPost(state, ownProps.postId),
  myUserId: getMyUserId(state),
})

export default connect(mapStateToProps)(LikesScreen)
