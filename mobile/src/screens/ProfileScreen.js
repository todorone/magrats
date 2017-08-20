import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'

import Container from '../components/Container'
import Content from '../components/Content'
import Header from '../components/Header'
import ProfileInfo from '../components/ProfileInfo'
import ProfileFeeds from '../components/ProfileFeeds'
import { getTabIcon } from '../components/TabIcon'
import { getProfileScreenUser, getPostsForProfileScreen, getUsers, getComments } from '../selectors/selectors'

class ProfileScreen extends Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('happy'),
  }

  static propTypes = {
    user: PropTypes.object,
  }

  editProfile = () => {}

  onItemClick = postId => Actions.Post({ postId })

  render () {
    const { user, posts, users, comments } = this.props
    if (!user) return null // Data is not ready yet

    return (
      <Container>
        <Header title={user.id} />

        <Content>
          <ProfileInfo
            user={user}
            editProfile={this.editProfile}
          />

          <ProfileFeeds
            posts={posts}
            users={users}
            comments={comments}
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

export default connect(mapStateToProps)(ProfileScreen)
