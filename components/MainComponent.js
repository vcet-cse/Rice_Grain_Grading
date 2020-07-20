import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import HomeScreen from './HomeComponent';
import Drawercontent from './DrawerContent';
import { createAppContainer, SafeAreaView } from 'react-navigation';

const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator 
      screenOptions = {{
        headerStyle: {
          backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options = {{
            headerLeft: () => (
              <Icon 
                reverse
                name='menu' 
                size={25} 
                color='#512DA8'
                onPress= {() => {navigation.openDrawer()}}
              />
            )
          }}
      />
    </HomeStack.Navigator>
);

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <Drawercontent {...props}/>} >
        <Drawer.Screen name="Home" component={HomeStackScreen} />
      </Drawer.Navigator>
   </NavigationContainer>
  );
}

class Main extends React.Component {

  render() {
    return(
      <MainNavigator />
    );
  }
}

export default Main;