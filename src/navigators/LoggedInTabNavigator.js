import React from 'react';
import PropTypes from 'prop-types';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import ExploreContainer from '../containers/ExploreContainer';
import InboxContainer from '../containers/InboxContainer';
import ProfileContainer from '../containers/ProfileContainer';
import SavedContainer from '../containers/SavedContainer';
import LoansContainer from '../containers/LoansContainer';
import CreateList from '../screens/CreateList';
import colors from '../styles/colors';

const ExploreTab = createStackNavigator({
  ExploreContainer: {
    screen: ExploreContainer,
    navigationOptions: {
      header: null,
    },
  },
  CreateList: { screen: CreateList },
},
{
  mode: 'modal',
});


ExploreTab.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const CustomTabBarIcon = (name, size) => {
  const icon = ({ tintColor }) => (
    <Icon
      name={name}
      size={size}
      color={tintColor}
    />
  );

  icon.propTypes = {
    tintColor: PropTypes.string.isRequired,
  };

  return icon;
};

const LoggedInTabNavigator = createBottomTabNavigator({
  Explore: {
    screen: ExploreTab,
    navigationOptions: {
      tabBarLabel: 'SEARCH',
      tabBarIcon: CustomTabBarIcon('ios-search', 22),
    },
  },
  Saved: {
    screen: SavedContainer,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: CustomTabBarIcon('ios-heart-outline', 22),
    },
  },
  Trips: {
    screen: LoansContainer,
    navigationOptions: {
      tabBarLabel: 'LOANS',
      tabBarIcon: CustomTabBarIcon('ios-ionic', 21),
    },
  },
  Inbox: {
    screen: InboxContainer,
    navigationOptions: {
      tabBarLabel: 'INBOX',
      tabBarIcon: CustomTabBarIcon('ios-archive-outline', 25),
    },
  },
  Profile: {
    screen: ProfileContainer,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: CustomTabBarIcon('ios-contact-outline', 22),
    },
  },
}, {
  tabBarOptions: {
    labelStyle: {
      fontWeight: '600',
      marginBottom: 5,
    },
    activeTintColor: colors.pink,
  },
  tabBarPosition: 'bottom',
});

export default LoggedInTabNavigator;
