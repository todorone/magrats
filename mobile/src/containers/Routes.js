import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import DiscoverScreen from '../screens/DiscoverScreen'
import SocialScreen from '../screens/SocialScreen'
import CameraScreen from '../screens/CameraScreen'
import ProfileScreen from '../screens/ProfileScreen'
import CommentsScreen from '../screens/CommentsScreen'
import PostScreen from '../screens/PostScreen'
import LikesScreen from '../screens/LikesScreen'

const Tabs = TabNavigator({
  Home: { screen: HomeScreen },
  Discover: { screen: DiscoverScreen },
  Camera: { screen: CameraScreen },
  Social: { screen: SocialScreen },
  MyProfile: { screen: ProfileScreen },
}, {
  initialRouteName: 'Home',
  tabBarComponent: TabBarBottom,
  headerMode: 'none',
  swipeEnabled: true,
  lazy: false,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    style: {
      height: 65,
      paddingLeft: 15,
      paddingRight: 15,

      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',

      backgroundColor: '#fcfdfe'
    },
  }
})

const Routes = StackNavigator({
  Main: { screen: Tabs },
  Comments: { screen: CommentsScreen },
  Likes: { screen: LikesScreen },
  Profile: { screen: ProfileScreen },
  Post: { screen: PostScreen }
}, {
  headerMode: 'none',
})

export default Routes
