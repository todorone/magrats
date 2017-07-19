import React from 'react'
import { Container, Content } from 'native-base'

import SimpleHeader from '../shared/SimpleHeader'
import { getTabIcon } from '../navigationOptions'


export default class Discover extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('search'),
  }

  render () {
    return (
      <Container>
        <SimpleHeader title='Discover' />

        <Content />
      </Container>
    )
  }
}

// const styles = StyleSheet.create({
// })
