import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text } from 'react-native'
import { Container, Header, Content, Body } from 'native-base'

import PostsList from '../shared/PostsList'
import { getTabIcon } from '../navigationOptions'
import { getPosts, getUsers, getComments } from '../../selectors'

class Home extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('home'),
  }

  static propTypes = {
    posts: PropTypes.object,
    users: PropTypes.object,
    comments: PropTypes.object,
  }

  componentWillReceiveProps (newProps) {
    console.log('componentWillReceiveProps')
    // this.forceUpdate()
  }

  render () {
    const { posts, users, comments } = this.props
    return (
      <Container>
        <Header>
          <Body>
            <Text>Home</Text>
          </Body>
        </Header>

        <Content>
          <PostsList
            posts={posts}
            users={users}
            comments={comments}
            navigation={this.props.navigation}
          />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  posts: getPosts(state),
  users: getUsers(state),
  comments: getComments(state),
})

export default connect(mapStateToProps)(Home)
