import * as React from 'react';
import { View, 
    Text, 
    Image,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';

const HowTouse = () => {

    return (
        <View style={styles.container}>
          <ImageBackground
            resizeMode={'cover'} 
            style={{flex: 1}}
            source={require('../assets/splash_screen.gif')}
          >
            <View style={styles.header}>
            </View>
            
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <ScrollView>
                  <Text style={styles.text_header}>Here is the simple steps that you can follow.</Text>
                  <Text style={styles.text_instructions}>1. Take a picture of the sample of Rice using smartphone.</Text>
                  <Text style={styles.text_instructions}>2. Upload it using the Application we built.</Text>
                  <Text style={styles.text_instructions}>3. Know the grade instanty.</Text>
                  <Image source={require('../assets/rice.png')} style={styles.instructions_image}/>
                </ScrollView>
            </Animatable.View> 
            
          </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 10
    },
    footer: {
        flex: 5,
        backgroundColor: '#00313f',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22,
        paddingStart: 5,
        marginBottom: 10
    },
    text_instructions: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
      paddingStart: 5,
      marginTop: 10
    },
    instructions_image: {
      marginStart:55, 
      height: 180,
      width: 200
    }
  });

  export default HowTouse
