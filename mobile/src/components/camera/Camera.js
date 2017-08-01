import React from 'react'
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { ImagePicker } from 'expo'

import Container from '../shared/Container'
import Content from '../shared/Content'
import Header from '../shared/Header'
import Icon from '../shared/Icon'
import { getTabIcon } from '../navigationUtils'

export default class Camera extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('add-circle'),
  }

  async takePhoto () {
    // console.warn('take photo')
    const pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4,3]
    })
  }

  render () {
    return (
      <Container>
        <Header title='Camera' />

        <Content>
          <View style={styles.topContainer}>
            <TouchableWithoutFeedback onPress={this.takePhoto}>
              <Icon name='heart' outline style={styles.buttonIcon} />
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
  buttonIcon: {
    fontSize: 30,
  }
})
