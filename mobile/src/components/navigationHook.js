import { setProfileScreenToMyself } from '../actions'

export function hookNavigation ({
  prevNavigationState,
  nextNavigationState,
  action,
  reduxState,
  dispatch,
}) {
  // console.log('navigation hook', action)

  // When switching to Profile screen through main tabs, set user id to myself
  if ((action.type === 'Navigation/NAVIGATE') && (action.routeName === 'MyProfile')) {
    dispatch(setProfileScreenToMyself())
  }
}
