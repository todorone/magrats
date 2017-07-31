import React from 'react'
import { connect } from 'react-redux'

import Container from '../shared/Container'
import Content from '../shared/Content'
import Header from '../shared/Header'
import PostsGrid from './PostsGrid'
import PostsGridItem from './PostsGridItem'
import { getTabIcon } from '../navigationUtils'
import { getPostsArray } from '../../shared/selectors'

class Discover extends React.Component {
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

export default connect(mapStateToProps)(Discover)
