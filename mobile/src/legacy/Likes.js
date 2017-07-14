import React from 'react'
import { Text, TouchableHighlight } from 'react-native'
import { Container, Header, Content, Button, Left, Right, Icon, Body } from 'native-base'

import LikesListItem from './LikesListItem'

export default class Likes extends React.Component {

  state = {
    comments: 104,
    texts: [],
    currentInput: '',
  }

  render () {
    const { navigation } = this.props

    return (
      <Container>
        <Header>
          <Left>
            <TouchableHighlight underlayColor='#00000011' onPress={() => navigation.goBack(null)}>
              <Icon name='arrow-back' />
            </TouchableHighlight>
          </Left>
          <Body>
            <Text>Likes</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          {
            Array(30).fill().map((item, i) => (
              <LikesListItem
                name='Voldemar Keent'
                status='Ready for chat, come on! 😇'
                imageSrc='https://p.memecdn.com/avatars/s_1728501_550a4032b3377.png'
                key={i}
              />
            ))
          }
        </Content>
      </Container>
    )
  }
}
