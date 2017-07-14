import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Container, Header, Title, Content, Button, Left, Right, Icon,
  Item, Label, Input, Form } from 'native-base'

const SinglePostView = ({
  name,
  photoUrl,
  thumbnailUrl,
  isLiked,
  likesNumber,
  onTapLike,
  comments,
  currentInput,
  onInputChange,
  onInputSubmit,
}) => {
  return (
    <View>
      <View style={styles.topBar}>
        <View style={styles.topBarLeft}>
          <Image
            source={{ uri: thumbnailUrl }}
            style={styles.topThumbnail}
          />
          <Text style={styles.name}>{name}</Text>
        </View>
        <Text style={styles.ellipsis}>...</Text>
      </View>

      <Image
        source={{ uri: photoUrl }}
        style={styles.content}
      />

      <View style={styles.footer}>
        <Text style={{ fontSize: 16 }}>{likesNumber}</Text>
        <View>
          <Button
            rounded
            danger={isLiked}
            small
            onPress={onTapLike}
          >
            <Icon name='heart' style={{ fontSize: 22, color: '#fff' }}/>
          </Button>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name='md-time' style={{ fontSize: 20, paddingRight: 3 }}/>
          <Text style={{ fontSize: 16 }}>3d</Text>
        </View>
      </View>

      {comments.map((text, i) => (
        <View key={i} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10  }}>
          <Text style={{ fontWeight: 'bold', paddingLeft: 14, paddingRight: 5 }}>Andrew R.</Text>
          <Text>{text}</Text>
        </View>
      ))}

      <Form>
        <Item>
          <Input
            placeholder='Add a comment...'
            value={currentInput}
            onChangeText={onInputChange}
            onSubmitEditing={onInputSubmit}
          />
        </Item>
      </Form>
    </View>
  )
}

SinglePostView.propTypes = {
  name: PropTypes.string,
  photoUrl: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  isLiked: PropTypes.bool,
  likesNumber: PropTypes.number,
  onTapLike: PropTypes.func,
  comments: PropTypes.array,
  currentInput: PropTypes.string,
  onInputChange: PropTypes.func,
  onInputSubmit: PropTypes.func,
}

export default SinglePostView

const styles = StyleSheet.create({
  topBar: {
    height: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 8,
    paddingRight: 10,
  },
  topBarLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  topThumbnail: {
    width: 26,
    height: 26,
    borderRadius:13
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 6
  },
  ellipsis: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 6,
    position: 'relative',
    top: -8
  },
  content: {
    width: '100%',
    height: 300
  },
  footer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 12,
  },
})
