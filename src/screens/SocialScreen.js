import React, { Component } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import Container from '../components/Container'
import Header from '../components/Header'
import Icon from '../components/Icon'
import Content from '../components/Content'
import { getTabIcon } from '../components/TabIcon'

export default class SocialScreen extends Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('heart'),
  }

  render() {
    return (
      <Container>
        <Header title="Social" />

        <Content>
          <View style={styles.container}>
            <TouchableWithoutFeedback>
              <Icon name="heart" outline style={styles.buttonIcon} />
            </TouchableWithoutFeedback>
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
  },
})
