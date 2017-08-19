import React from 'react'
import PropTypes from 'prop-types'

import Container from '../dumb/Container'
import Content from '../dumb/Content'
import SinglePost from '../smart/SinglePostContainer'
import Header from '../dumb/Header'
import { getTabIcon } from '../config/navigationUtils'

export default class PostScreen extends React.Component {
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
