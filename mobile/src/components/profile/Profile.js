import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Container from '../shared/Container'
import Content from '../shared/Content'
import SimpleHeader from '../shared/SimpleHeader'
import ProfileInfo from './ProfileInfo'
import ProfileFeeds from './ProfileFeeds'
import { getTabIcon } from '../navigationUtils'
import { getProfileScreenUser, getPostsForProfileScreen, getUsers, getComments } from '../../selectors'

class Profile extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('happy'),
  }

  static propTypes = {
    user: PropTypes.object,
  }

  editProfile = () => {}

  onItemClick = postId => this.props.navigation.navigate('Post', { postId })

  render () {
    const { user, posts, users, comments } = this.props
    if (!user) return null // Data is not ready yet

    return (
      <Container>
        <SimpleHeader title={user.id} />

        <Content>
          <ProfileInfo
            user={user}
            editProfile={this.editProfile}
          />

          <ProfileFeeds
            posts={posts}
            users={users}
            comments={comments}
            navigation={this.props.navigation}
            onItemClick={this.onItemClick}
          />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  user: getProfileScreenUser(state),
  posts: getPostsForProfileScreen(state),
  users: getUsers(state),
  comments: getComments(state),
})

export default connect(mapStateToProps)(Profile)
