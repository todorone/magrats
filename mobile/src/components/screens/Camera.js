import React from 'react'
import { Text } from 'react-native'
import { Container, Header, Body } from 'native-base'

import Content from '../shared/Content'
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

        <Content />
      </Container>
    )
  }
}
