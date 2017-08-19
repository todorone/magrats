import React, { Component } from 'react'
import { connect } from 'react-redux'

import Container from '../components/Container'
import Content from '../components/Content'
import Header from '../components/Header'
import PostsGrid from '../components/PostsGrid'
import PostsGridItem from '../components/PostsGridItem'
import { getTabIcon } from '../components/TabIcon'
import { getPostsArray } from '../selectors/selectors'

class DiscoverScreen extends Component {
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
