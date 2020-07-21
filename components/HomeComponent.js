import * as React from 'react';
import { View, 
    Text, 
    Image,
    StyleSheet
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const HomeScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.header}>
              <Image source={require('../assets/rice_home_page.jpg')} style={styles.header_image}/>
            </View>
            <Animatable.View 
              animation="fadeInUpBig"
              style={styles.footer}
            >
              <Text style={styles.text_header}>Rice graing grading system</Text>
              <Text style={styles.text_instructions}>
                Quality of grain is of great importance for human beings as it directly impacts the human health.
                Hence there is a great need to measure a quality of grain and identifying adulteration or non-quality elements
                and analyzing the grain sample manually is more time consuming and complicated process, and having more chances of errors with the subjectivity of human perception.
                Demand for the quality of the food grains we consume day by day.
                India is the second largest producers of food grains.
                With increasing demand traders cheat shopkeepers by poor quality of rice and farmers by giving them less money than they deserve.
                The main purpose of grading algorithm is to find out the grade of the rice.
                The quality analysis of the grain type is done and graded the grain type as Premium grade 1, grade2 and grade 3 depending  on features.
              </Text>
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => {navigation.navigate('ImageUpload')}}
              >
                <Text style={styles.buttonText}>START GRADING</Text>
              </TouchableOpacity>
            </Animatable.View>
          </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00313f',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    footer: {
        flex: 2,
        backgroundColor: '#00313f',
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        paddingStart: 7,
        marginBottom: 10
    },
    text_instructions: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
      paddingStart: 5,
      marginTop: 5
    },
    instructions_image: {
      marginStart:55, 
      height: 180,
      width: 200
    },
    header_image: {
      flex:1,
      height: 200,
      width: 320
    },

    button: {
      color: '#000'
    },
    primaryButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 320,
      height: 45,
      marginTop: 15,
      borderRadius: 20,
      backgroundColor: '#ba831e',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
    }
  });

  export default HomeScreen
