import React from 'react'
import { Text } from 'react-native'
import { Header, Body } from 'native-base'

import Container from '../shared/Container'
import Content from '../shared/Content'
import { getTabIcon } from '../navigationUtils'

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
