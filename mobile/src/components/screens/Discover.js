import React from 'react'
import { Text } from 'react-native'
import { Container, Header, Content, Body } from 'native-base'

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

        <Content />
      </Container>
    )
  }
}

// const styles = StyleSheet.create({
// })
