import React from 'react'
import { Text } from 'react-native'
import { Container, Header, Content, Button, Body } from 'native-base'

import { getTabIcon } from '../navigationOptions'

export default class Profile extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('happy'),
  }

  render () {
    return (
      <Container>
        <Header>
          <Body>
            <Text>Profile</Text>
          </Body>
        </Header>

        <Content>
        </Content>
      </Container>
    )
  }
}
