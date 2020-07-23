import React, { Component } from 'react';
import Main from './components/MainComponent';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator, View } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ipAdress: '',
      isLoading: true
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('ipadress')
    .then((ipadress) => {
      this.setState({ipAdress: ipadress});
    })
    .then(() => {this.setState({isLoading: false})});
  }

  render(){
    if(!this.state.isLoading){
      if(this.state.ipAdress){
        global.ipAdress = this.state.ipAdress;
      }
      else{
        global.ipAdress = "192.168.225.44:3001";
      }
      return (
        <Main />
      );
    }
    else{
      return(
        <View style={{flex:1, alignItems: 'center', justifyContent: "center"}}>
          <ActivityIndicator size={60} color="red" />
        </View>
      );
    }
  }
}