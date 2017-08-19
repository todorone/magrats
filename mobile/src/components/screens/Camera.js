import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { ImagePicker } from 'expo'

import Container from '../shared/Container'
import Content from '../shared/Content'
import Header from '../shared/Header'
import Icon from '../shared/Icon'
import { getTabIcon } from '../root/navigationUtils'
import { LIGHTER_GRAY, LIGHTEST_GRAY } from '../styles'

export default class Camera extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('add-circle'),
  }

  async takePhoto () {
    const pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })
    console.log(pickerResult)
  }

  render () {
    return (
      <Container>
        <Header title='Camera' />

        <Content>
          <View style={styles.topContainer}>
            <TouchableWithoutFeedback onPress={this.takePhoto}>
              <View style={styles.hintContainer}>
                <Text style={styles.hint}>TAKE PHOTO</Text>
                <Icon name='camera' outline style={styles.buttonIcon} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  topContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hintContainer: {
    alignItems: 'center',
  },
  hint: {
    fontSize: 26,
    fontWeight: '100',
    color: LIGHTER_GRAY,
  },
  buttonIcon: {
    fontSize: 75,
    color: LIGHTEST_GRAY,
  }
})
