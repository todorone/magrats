import React from 'react'
import { StyleSheet } from 'react-native'

import Container from '../shared/Container'
import Content from '../shared/Content'
import SimpleHeader from '../shared/SimpleHeader'
import Thumbnail from '../shared/Thumbnail'
import { getTabIcon } from '../navigationOptions'

export default class Profile extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('happy'),
  }

  render () {
    return (
      <Container>
        <SimpleHeader title='Profile' />

        <Content>
          <Thumbnail big src='https://0.s3.envato.com/files/97977535/128/10_resize.png' />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
})
