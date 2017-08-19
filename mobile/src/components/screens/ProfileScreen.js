import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Container from '../dumb/Container'
import Content from '../dumb/Content'
import Header from '../dumb/Header'
import ProfileInfo from '../dumb/ProfileInfo'
import ProfileFeeds from '../dumb/ProfileFeeds'
import { getTabIcon } from '../config/navigationUtils'
import { getProfileScreenUser, getPostsForProfileScreen, getUsers, getComments } from '../../selectors/selectors'

class ProfileScreen extends React.Component {
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

export default connect(mapStateToProps)(ProfileScreen)
