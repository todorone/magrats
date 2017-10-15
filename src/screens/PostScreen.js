import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Container from '../components/Container'
import Content from '../components/Content'
import SinglePost from '../containers/SinglePostContainer'
import Header from '../components/Header'
import { getTabIcon } from '../components/TabIcon'

export default class PostScreen extends PureComponent {
  static navigationOptions = {
    tabBarIcon: getTabIcon('home'),
  }

  static propTypes = {
    postId: PropTypes.string.isRequired,
  }

  render() {
    const { postId } = this.props

    return (
      <Container>
        <Header left="back" />

        <Content>
          <SinglePost postId={postId} />
        </Content>
      </Container>
    )
  }
}
