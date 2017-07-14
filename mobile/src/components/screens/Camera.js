import React from 'react'
import { Text } from 'react-native'
import { Container, Header, Content, Button, Body } from 'native-base'
import { getTabIcon } from '../navigationOptions'

export default class Camera extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('add-circle'),
  }

  render () {
    return (
      <Container>
        <Header>
          <Body>
            <Text>Camera</Text>
          </Body>
        </Header>

        <Content>
        </Content>
      </Container>
    )
  }
}
