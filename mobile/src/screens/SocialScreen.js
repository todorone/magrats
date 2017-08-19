import React, { Component } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Expo from 'expo'

import Container from '../components/Container'
import Header from '../components/Header'
import Icon from '../components/Icon'
import Content from '../components/Content'
import { getTabIcon } from '../components/TabIcon'
import { IOS_GOOGLE_OAUTH_ID, ANDROID_GOOGLE_OAUTH_ID } from 'react-native-dotenv'

export default class SocialScreen extends Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('heart'),
  }

  async logIn () {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: ANDROID_GOOGLE_OAUTH_ID,
        iosClientId: IOS_GOOGLE_OAUTH_ID,
        scopes: ['profile', 'email'],
      })

      if (result.type === 'success') {
        console.warn('Sign in success', result.accessToken)
      } else {
        console.warn('Sign cancelled')
      }
    } catch (e) {
      console.warn('Sign error')
    }
  }

  render () {
    return (
      <Container>
        <Header title='Social' />

        <Content>
          <View style={styles.container}>
            <TouchableWithoutFeedback onPress={this.logIn}>
              <Icon name='heart' outline style={styles.buttonIcon} />
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
  }
})
