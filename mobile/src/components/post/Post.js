import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Container from '../shared/Container'
import Content from '../shared/Content'
import SinglePost from '../post/SinglePost'
import Header from '../shared/Header'
import { getTabIcon } from '../navigationUtils'
import { getPosts, getUsers, getComments } from '../../selectors'

class Post extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('home'),
  }

  static propTypes = {
    posts: PropTypes.object,
    users: PropTypes.object,
    comments: PropTypes.object,
  }

  goBack = () => this.props.navigation.goBack()

  render () {
    const { posts, users, comments } = this.props
    const { postId } = this.props.navigation.state.params
    // const postId = 'post0'

    return (
      <Container>
        <Header left='back' title='' goBack={this.goBack} />

        <Content>
          <SinglePost
            post={posts[postId]}
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

export default connect(mapStateToProps)(Post)
