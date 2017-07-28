import React from 'react'

import Container from '../shared/Container'
import Content from '../shared/Content'
import Header from '../shared/Header'
import { getTabIcon } from '../navigationUtils'

export default class Camera extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('add-circle'),
  }

  render () {
    return (
      <Container>
        <Header title='Camera' />

        <Content />
      </Container>
    )
  }
}
