import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Container from '../dumb/Container'
import Content from '../dumb/Content'
import Header from '../dumb/Header'
import SingleLike from '../dumb/SingleLike'
import { isMeFollowingUser, getUsersWhoLikesPost, getMyUserId } from '../../selectors/selectors'
import { setProfileScreenUserId } from '../../actions/screens'
import { setFollowStatus } from '../../actions/data'

class LikesScreen extends React.Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    myUserId: PropTypes.string.isRequired,
  }

  goBack = () => this.props.navigation.goBack()

  goToProfile = userId => {
    this.props.dispatch(setProfileScreenUserId(userId))
    this.props.navigation.navigate('Profile')
  }

  switchFollow = (userId, status) => this.props.dispatch(
    setFollowStatus(userId, this.props.myUserId, status)
  )

  render () {
    const { users, myUserId } = this.props

    return (
      <Container>
        <Header left='back' title='Likes' goBack={this.goBack} />

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
  users: getUsersWhoLikesPost(state, ownProps.navigation.state.params.postId),
  myUserId: getMyUserId(state),
})

export default connect(mapStateToProps)(LikesScreen)
