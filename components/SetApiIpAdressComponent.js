import React, { useState } from 'react';
import { View, 
    Text, 
    StyleSheet,
    Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

const SetIpAdress = () => {
    const [ipAdress, setIpAdress] = useState('');

    const updateIpAdress = async () => {
        global.ipAdress = ipAdress;
        try {
          await AsyncStorage.setItem('ipadress', "ipAdress")
          Alert.alert(
            'Sucess',
            'Successfully Updated ' +  global.ipAdress
          );
        } catch (e) {
            Alert.alert(
                'Error',
                'Error While Updating IP Adress',
            );
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>
            <Animatable.View 
                animation="fadeInUpBig"
            >
               <TextInput 
                    placeholder="Enter Ip Adress with port Number"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => setIpAdress(val)}
                />
                <TouchableOpacity
                    style={styles.primaryButton}
                    onPress={() => updateIpAdress()}
                >
                    <Text style={styles.buttonText}>UPDATE IP ADRESS</Text>
                </TouchableOpacity>
            </Animatable.View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00313f',
      alignItems: "center",
      justifyContent: "center"
    },
    textInput: {
        paddingLeft: 10,
        color: '#05375a',
        height: 45,
        width: 320,
        borderRadius: 10,
        fontWeight: "bold",
        fontSize: 18
    },
    primaryButton: {
        marginTop: 15,
        alignItems: "center",
        justifyContent: "center",
        width: 320,
        height: 45,
        borderRadius: 10,
        backgroundColor: '#0ff'
      },
    buttonText: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    }
  });

  export default SetIpAdress
