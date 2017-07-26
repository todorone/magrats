import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Container from '../shared/Container'
import Content from '../shared/Content'
import SimpleHeader from '../shared/SimpleHeader'
import ProfileInfo from './ProfileInfo'
import DiscoverGrid from '../discover/DiscoverGrid'
import { getTabIcon } from '../navigationOptions'
import { getProfileScreenUser, getPostsOfProfileOwner } from '../../selectors'


class Profile extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('happy'),
  }

  static propTypes = {
    user: PropTypes.object,
  }

  editProfile = () => {}

  render () {
    const { user, posts } = this.props
    if (!user) return null // Data is not ready yet

    console.log('posts', posts)

    return (
      <Container>
        <SimpleHeader title={user.id} />

        <Content>
          <ProfileInfo user={user} editProfile={this.editProfile} />

          <DiscoverGrid
            feed={posts}
            onItemClick={() => {}}
          />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  user: getProfileScreenUser(state),
  posts: getPostsOfProfileOwner(state),
})

export default connect(mapStateToProps)(Profile)
