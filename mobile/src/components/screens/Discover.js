import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Container, Header, Content, Button, Body } from 'native-base'

import { getTabIcon } from '../navigationOptions'

export default class Discover extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('search'),
  }

  render () {
    return (
      <Container>
        <Header>
          <Body>
            <Text>Discover</Text>
          </Body>
        </Header>

        <Content>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
})
