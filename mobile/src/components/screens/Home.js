import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Container, Header, Content, Button, Body } from 'native-base'

import PostsList from '../shared/PostsList'
import { getTabIcon } from '../navigationOptions'

export default class Home extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('home'),
  }

  render () {
    return (
      <Container>
        <Header>
          <Body>
            <Text>Home</Text>
          </Body>
        </Header>

        <Content>
          <PostsList />
        </Content>
      </Container>
    )
  }
}
