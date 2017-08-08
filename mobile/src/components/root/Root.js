import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'

import Home from '../home/Home'
import Discover from '../discover/Discover'
import Social from '../social/Social'
import Camera from '../camera/Camera'
import Profile from '../profile/Profile'
import Comments from '../comments/Comments'
import Post from '../post/Post'
import Likes from '../likes/Likes'

const styles = {
  tabsContainer: {
    height: 65,
    paddingLeft: 15,
    paddingRight: 15,

    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',

    backgroundColor: '#fcfdfe'
  },
}

const Tabs = TabNavigator({
  Home: { screen: Home },
  Discover: { screen: Discover },
  Camera: { screen: Camera },
  Social: { screen: Social },
  MyProfile: { screen: Profile },
}, {
  initialRouteName: 'Home',
  tabBarComponent: TabBarBottom,
  headerMode: 'none',
  swipeEnabled: true,
  lazy: false,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    style: styles.tabsContainer,
  }
})

const Root = StackNavigator({
  MainScreen: { screen: Tabs },
  Comments: { screen: Comments },
  Likes: { screen: Likes },
  Profile: { screen: Profile },
  Post: { screen: Post }
}, {
  headerMode: 'none',
})

export default Root
