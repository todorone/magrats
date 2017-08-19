import React, { PureComponent } from 'react'

import Container from '../components/Container'
import Content from '../components/Content'
import SinglePost from '../containers/SinglePostContainer'
import Header from '../components/Header'
import { getTabIcon } from '../components/TabIcon'

export default class PostScreen extends PureComponent {
  static navigationOptions = {
    tabBarIcon: getTabIcon('home'),
  }

  goBack = () => this.props.navigation.goBack()

  render () {
    const { postId } = this.props.navigation.state.params

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
