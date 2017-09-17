import React, { Component } from 'react'
import { View, Text, TextInput, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import Expo from 'expo'

import Icon from '../components/Icon'
import { BLUE, LIGHT_BLUE, WHITE } from '../styles'
import { IOS_GOOGLE_OAUTH_ID, ANDROID_GOOGLE_OAUTH_ID } from 'react-native-dotenv'

export default class SignInScreen extends Component {
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
      <View style={styles.container}>
        <Text style={[styles.hintText, styles.signInWith]}>SIGN IN WITH</Text>

        <TouchableWithoutFeedback onPress={this.logIn}>
          <Icon name='logo-google' ios={false} style={styles.googleLogo} />
        </TouchableWithoutFeedback>

        <Text style={[styles.hintText]}>OR</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='EMAIL'
            placeholderTextColor={WHITE}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='PASSWORD'
            placeholderTextColor={WHITE}
          />
        </View>

        <View style={styles.signInButton}>
          <Text style={styles.signInText}>SIGN IN</Text>
        </View>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>SIGN UP</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: LIGHT_BLUE,
  },
  hintText: {
    fontSize: 22,
    fontWeight: '200',
    letterSpacing: 4,
    color: WHITE,
  },
  signInWith: {
    paddingTop: '20%',
  },
  googleLogo: {
    paddingVertical: '10%',
    fontSize: 108,
    color: WHITE,
  },
  inputContainer: {
    paddingTop: '5%',
    width: '80%',
    height: 65,
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: WHITE,
  },
  input: {
    color: WHITE,
  },
  signInButton: {
    marginTop: '10%',
    width: '80%',
    height: 60,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE,
  },
  signInText: {
    fontSize: 24,
    fontWeight: '200',
    letterSpacing: 3,
    color: BLUE,
  },
  signUpContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#80BCFF',
  },
  signUpText: {
    fontSize: 24,
    fontWeight: '200',
    letterSpacing: 3,
    color: WHITE,
  },
})
