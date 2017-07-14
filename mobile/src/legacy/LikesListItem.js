import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'native-base'

import Thumbnail from '../shared/Thumbnail'

const LikesListItem = ({ name, status, imageSrc }) => {
  return (
    <View style={styles.tabsContainer}>
      <Thumbnail src={imageSrc} />

      <View style={styles.body}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>

      <View>
        <Button rounded small>
          <Text style={styles.buttonText}>Follow</Text>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tabsContainer: {
    width: '100%',
    height: 66,
    flexDirection: 'row',
    alignItems: 'center',

    paddingLeft: 8,
    paddingRight: 10,

    backgroundColor: '#eee',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  body: {
    flex: 1,

    paddingLeft: 10,
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 13,
    color: '#333',
  },
  buttonText: {
    color: '#fff',
  },
})

export default LikesListItem
