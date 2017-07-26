import React from 'react'
import { connect } from 'react-redux'

import Container from '../shared/Container'
import Content from '../shared/Content'
import SimpleHeader from '../shared/SimpleHeader'
import SingleLike from './SingleLike'
import { getUsers, getUserById } from '../../selectors'
import { setProfileScreenUserId } from '../../actions'

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

    return (
      <Container>
        <SimpleHeader left='back' title='Likes' goBack={this.goBack} />

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
