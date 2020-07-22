import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import HomeScreen from './HomeComponent';
import HowTouse from './HowtoUseComponent';
import AboutUs from './AboutUsComponent';
import ImageUpload from './ImageUploadComponent';
import Drawercontent from './DrawerContent';
import ResultScreen from './ResultComponent';

const HomeStack = createStackNavigator();
const HowToUseStack = createStackNavigator();
const ImageUploadStack = createStackNavigator();
const AboutusStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator 
      screenOptions = {{
        headerStyle: {
          backgroundColor: '#00313f'
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
                color='#00313f'
                onPress= {() => {navigation.openDrawer()}}
              />
            )
          }}
      />
    </HomeStack.Navigator>
);

const HowToUseStackScreen = ({ navigation }) => (
  <HowToUseStack.Navigator 
    screenOptions = {{
      headerStyle: {
        backgroundColor: '#00313f'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}
  >
    <HowToUseStack.Screen
        name="How to use"
        component={HowTouse}
        options = {{
          headerLeft: () => (
            <Icon 
              reverse
              name='menu' 
              size={25} 
              color='#00313f'
              onPress= {() => {navigation.openDrawer()}}
            />
          )
        }}
    />
  </HowToUseStack.Navigator>
);

const AboutUsStackScreen = ({ navigation }) => (
  <AboutusStack.Navigator 
    screenOptions = {{
      headerStyle: {
        backgroundColor: '#00313f'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}
  >
    <AboutusStack.Screen
        name="About us"
        component={AboutUs}
        options = {{
          headerLeft: () => (
            <Icon 
              reverse
              name='menu' 
              size={25} 
              color='#00313f'
              onPress= {() => {navigation.openDrawer()}}
            />
          )
        }}
    />
  </AboutusStack.Navigator>
);

const ImageUploadStackScreen = ({ navigation }) => (
  <ImageUploadStack.Navigator 
    screenOptions = {{
      headerStyle: {
        backgroundColor: '#00313f'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}
  >
    <ImageUploadStack.Screen
        name="Rice Grain Grading"
        component={ImageUpload}
        options = {{
          headerLeft: () => (
            <Icon 
              reverse
              name='menu' 
              size={25} 
              color='#00313f'
              onPress= {() => {navigation.openDrawer()}}
            />
          )
        }}
    />
    <ImageUploadStack.Screen name="ResultScreen" component={ResultScreen} />
  </ImageUploadStack.Navigator>
);

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <Drawercontent {...props}/>} >
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Howtouse" component={HowToUseStackScreen} />
        <Drawer.Screen name="Aboutus" component={AboutUsStackScreen} />
        <Drawer.Screen name="ImageUpload" component={ImageUploadStackScreen} />
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
