import React from 'react'
import { Container } from 'native-base'

import Content from '../shared/Content'
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
