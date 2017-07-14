import React from 'react'
import { Text, View, Image, TouchableHighlight } from 'react-native'
import { Container, Header, Title, Content, Button, Left, Right, Icon,
  Item, Label, Input, Form } from 'native-base'
import { Col, Grid } from 'react-native-easy-grid'

import Thumbnail from '../shared/Thumbnail'
import Footer from '../shared/Footer'

export default class Home extends React.Component {

  state = {
    comments: 104,
    texts: [],
    currentInput: '',
  }

  render () {
    // console.log('===> APP render...')
    const { navigate } = this.props.navigation

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
          <Grid>
            <Col>
              <View style={{
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'row',
                width: '100%',
                padding: '3% 5% 3% 5%',
                backgroundColor: '#fcfded',
              }}>
                {Array(4).fill().map((e, i) => (
                  <View key={i} style={{
                    width: 58,
                    height: 58,
                    borderRadius: 29,
                    borderWidth: 2,
                    borderColor: '#000',
                    padding: 2,
                  }}>
                    <Thumbnail src='https://p.memecdn.com/avatars/s_1728501_550a4032b3377.png' />
                  </View>
                ))}
                <TouchableHighlight
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: 29,
                    borderWidth: 2,
                    borderColor: '#000',
                    padding: 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                  }}
                  underlayColor='#00000011'
                  onPress={() => navigate('Likes')}
                >
                  <Icon name='md-add' style={{ fontSize: 28 }}/>
                </TouchableHighlight>
              </View>

              <View style={{
                height: 34,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: 8,
                paddingRight: 10,
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={{ uri: 'https://0.s3.envato.com/files/97977535/128/5_resize.png' }}
                    style={{ width: 26, height: 26, borderRadius:13 }}
                  />
                  <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#000', paddingLeft: 6 }}>Koby Bryant</Text>
                </View>
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#000', paddingLeft: 6, position: 'relative', top: -8  }}>...</Text>
              </View>

              <Image
                source={{ uri: 'https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/lg/public/2016/06/17/gettyimages-540885498_0.jpg' }}
                style={{ width: '100%', height: 300 }}
              />

              <View style={{
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: 12,
                paddingRight: 12,
              }}>
                <Text style={{ fontSize: 16 }}>{this.state.comments}</Text>
                <View>
                  <Button rounded danger small onPress={() => this.setState({ comments: this.state.comments + 1 })}>
                    <Icon name='heart' style={{ fontSize: 22, color: '#fff' }}/>
                  </Button>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name='md-time' style={{ fontSize: 20, paddingRight: 3 }}/>
                  <Text style={{ fontSize: 16 }}>3d</Text>
                </View>
              </View>

              {this.state.texts.map((text, i) => (
                <View key={i} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10  }}>
                  <Text style={{ fontWeight: 'bold', paddingLeft: 14, paddingRight: 5 }}>Andrew R.</Text>
                  <Text>{text}</Text>
                </View>
              ))}

              <Form>
                <Item floatingLabel>
                  <Label>Add a comment...</Label>
                  <Input
                    value={this.state.currentInput}
                    onChangeText={text => this.setState({ currentInput: text })}
                    onSubmitEditing={e => {
                      this.setState({ texts: [ ...this.state.texts, e.nativeEvent.text ] })
                      this.setState({ currentInput: '' })
                    }}
                  />
                </Item>
              </Form>
            </Col>
          </Grid>
        </Content>
        <Footer />
      </Container>
    )
  }
}
