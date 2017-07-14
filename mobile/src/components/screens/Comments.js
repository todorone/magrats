import React from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Container, Header, Content, Button, Body } from 'native-base'

import Icon from '../shared/Icon'
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
            <Text>Comments</Text>
          </Body>
        </Header>

        <Content>
          <View style={styles.container}>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    fontSize: 30,
  }
})
