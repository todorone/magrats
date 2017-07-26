import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Container from '../shared/Container'
import Content from '../shared/Content'
import SimpleHeader from '../shared/SimpleHeader'
import ProfileInfo from './ProfileInfo'
import { getTabIcon } from '../navigationOptions'
import { getProfileScreenUser } from '../../selectors'

class Profile extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('happy'),
  }

  static propTypes = {
    user: PropTypes.object,
  }

  editProfile = () => {}

  render () {
    const { user } = this.props
    if (!user) return null // Data is not ready yet

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
  user: getProfileScreenUser(state),
  posts: {},
})

export default connect(mapStateToProps)(Profile)
