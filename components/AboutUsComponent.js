import * as React from 'react';
import { View, 
    Text, 
    Image,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';

const AboutUs = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/about_us.gif')} style={styles.header_image}/>
            </View>
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <ScrollView>
                  <Text style={styles.text_header}>Our Team</Text>
                  <Text style={styles.text_name}>Premnath</Text>
                  <Text style={styles.text_detail}>premnathkulal1998@gmail.com</Text>
                  <Text style={styles.text_name}>U Akshay Nayak</Text>
                  <Text style={styles.text_detail}>uakshaynayak@gmail.com</Text>
		  <Text style={styles.text_name}>Vishwas M S</Text>
                  <Text style={styles.text_detail}>vishwasms@gmail.com</Text>
                  <Text style={styles.text_name}>Vishwas Prabhu</Text>
                  <Text style={styles.text_detail}>prabhuvishwas@gmail.com</Text>
                </ScrollView>
            </Animatable.View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00313f'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingTop: 80
    },
    footer: {
        flex: 3,
        backgroundColor: '#00313f',
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginRight:20,
        marginLeft: 20, 
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        paddingStart: 5,
        marginBottom: 10
    },
    text_name: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 22,
      paddingStart: 5,
      marginTop: 14
    },
    text_detail:{
      color: '#777',
      fontWeight: 'bold',
      fontSize: 15,
      paddingStart: 5,
    },
    header_image: {
      marginRight:0,
      marginLeft: 0, 
      height: 200,
      width: 320
    },
  });

  export default AboutUs
