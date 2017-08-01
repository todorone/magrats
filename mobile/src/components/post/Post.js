import React from 'react'
import PropTypes from 'prop-types'

import Container from '../shared/Container'
import Content from '../shared/Content'
import SinglePost from '../post/SinglePost'
import Header from '../shared/Header'
import { getTabIcon } from '../navigationUtils'

class Post extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('home'),
  }

  static propTypes = {
    posts: PropTypes.object,
  }

  goBack = () => this.props.navigation.goBack()

  render () {
    const { postId } = this.props.navigation.state.params
    // const postId = 'post0'

    return (
      <Container>
        <Header left='back' title='' goBack={this.goBack} />

        <Content>
          <SinglePost
            postId={postId}
            navigation={this.props.navigation}
          />
        </Content>
      </Container>
    )
  }
}

// const mapStateToProps = state => ({
//   posts: getPosts(state),
// })

export default Post
