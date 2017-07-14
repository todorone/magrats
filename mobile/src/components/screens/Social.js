import React from 'react'
import { Text } from 'react-native'
import { Container, Header, Content, Button, Body } from 'native-base'
import { getTabIcon } from '../navigationOptions'

export default class Social extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('heart'),
  }

  render () {
    return (
      <Container>
        <Header>
          <Body>
            <Text>Social</Text>
          </Body>
        </Header>

        <Content>
        </Content>
      </Container>
    )
  }
}
