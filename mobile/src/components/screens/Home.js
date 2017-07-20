import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Container from '../shared/Container'
import Content from '../shared/Content'
import PostsList from '../shared/PostsList'
import SimpleHeader from '../shared/SimpleHeader'
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

  render () {
    const { posts, users, comments } = this.props
    return (
      <Container>
        <SimpleHeader title='Magrats' />

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
