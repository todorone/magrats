import React from 'react'
import { connect } from 'react-redux'

import Container from '../shared/Container'
import Content from '../shared/Content'
import SimpleHeader from '../shared/SimpleHeader'
import Grid from '../shared/Grid'
import GridItem from '../shared/GridItem'
import { getTabIcon } from '../navigationUtils'
import { getPostsArray } from '../../selectors'

class Discover extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('search'),
  }

  onItemClick = postId => this.props.navigation.navigate('Post', { postId })

  render () {
    const { posts } = this.props

    return (
      <Container>
        <SimpleHeader title='Discover' />

        <Content>
          <GridItem
            featured
            id={posts[0].id}
            url={posts[0].url}
            onItemClick={this.onItemClick}
          />

          <Grid
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
