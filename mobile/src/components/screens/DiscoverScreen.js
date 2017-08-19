import React from 'react'
import { connect } from 'react-redux'

import Container from '../dumb/Container'
import Content from '../dumb/Content'
import Header from '../dumb/Header'
import PostsGrid from '../dumb/PostsGrid'
import PostsGridItem from '../dumb/PostsGridItem'
import { getTabIcon } from '../config/navigationUtils'
import { getPostsArray } from '../../selectors/selectors'

class DiscoverScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('search'),
  }

  onItemClick = postId => this.props.navigation.navigate('Post', { postId })

  render () {
    const { posts } = this.props

    return (
      <Container>
        <Header title='Discover' />

        <Content>
          <PostsGridItem
            featured
            id={posts[0].id}
            url={posts[0].url}
            onItemClick={this.onItemClick}
          />

          <PostsGrid
            posts={posts.slice(1)}
            onItemClick={this.onItemClick}
          />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  posts: getPostsArray(state),
})

export default connect(mapStateToProps)(DiscoverScreen)
