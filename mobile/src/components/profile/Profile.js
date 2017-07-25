import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Container from '../shared/Container'
import Content from '../shared/Content'
import SimpleHeader from '../shared/SimpleHeader'
import ProfileInfo from './ProfileInfo'
import { getTabIcon } from '../navigationOptions'
import { getUsers } from '../../selectors'

class Profile extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('happy'),
  }

  static propTypes = {
    users: PropTypes.object.isRequired,
  }

  editProfile = () => {}

  render () {
    const { users } = this.props
    if (!users) return null // Data is not ready yet

    const userId = (this.props.navigation.state.params)
      ? this.props.navigation.state.params.userId
      : Object.keys(users)[0] // TODO For MyProfile we'll need user profile's id
    const user = users[userId]

    return (
      <Container>
        <SimpleHeader title={user.id} />

        <Content>
          <ProfileInfo user={user} editProfile={this.editProfile} />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  users: getUsers(state),
})

export default connect(mapStateToProps)(Profile)
