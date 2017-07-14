import React from 'react'
import { Container, Header, Content, Icon, Item, Input } from 'native-base'
import SinglePost from './SinglePost'

export default class PostsList extends React.Component {

  render () {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
        </Header>
        <Content>
          {[0, 1, 2, 3, 4].map((post, i) => (
            <SinglePost
              key={i}
              name='kobybryant'
              thumbnailUrl='https://0.s3.envato.com/files/97977535/128/5_resize.png'
              photoUrl='https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/lg/public/2016/06/17/gettyimages-540885498_0.jpg'
              likesNumber={103}
            />
          ))}
        </Content>
      </Container>
    )
  }
}
