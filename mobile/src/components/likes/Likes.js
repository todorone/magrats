import React from 'react'
import { connect } from 'react-redux'

import Container from '../shared/Container'
import Content from '../shared/Content'
import Header from '../shared/Header'
import SingleLike from './SingleLike'
import { getUsers, getUserById } from '../../shared/selectors'
import { setProfileScreenUserId } from '../../shared/actions'

class Likes extends React.Component {
  goBack = () => this.props.navigation.goBack()

  goToProfile = userId => {
    this.props.dispatch(setProfileScreenUserId(userId))
    this.props.navigation.navigate('Profile')
  }

  switchFollow = userId => {}

  render () {
    const { users } = this.props
    const { likes } = this.props.navigation.state.params
    // const likes = []

    return (
      <Container>
        <Header left='back' title='Likes' goBack={this.goBack} />

        <Content>
          {likes.map(userId => (
            <SingleLike
              owner={getUserById(userId, users)}
              goToProfile={this.goToProfile}
              switchFollow={this.switchFollow}
              key={userId}
            />
          ))}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  users: getUsers(state),
})

export default connect(mapStateToProps)(Likes)
