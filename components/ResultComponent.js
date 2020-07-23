import React, { useState } from 'react';
import { View, 
    Text, 
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements'

const ResultScreen = (props) => {
    const grade_color = {"P":'#0688bf', "G_1":'#54f21f', "G_2":'#f2ee0c', "G_3": '#f21f0c'}  
    const grade_name = {"P":'PREMIUM', "G_1":'GRADE 1', "G_2":'GRADE 2', "G_3": 'GRADE 3'}
    return (
        <ScrollView style={styles.container}>
            <Animatable.View 
                animation="fadeInUpBig"
            >
                <Image 
                    source={{ uri: 'http://'+global.ipAdress+'/get_images/image/Image_result/foo.png?' + Date.now() }} 
                    style={{ aspectRatio: 1, resizeMode: 'contain', }} 
                    onTouchStart={() => _getPhotoLibrary()}
                />  

                <Animatable.View 
                    animation="rubberBand"
                    iterationCount="infinite"
                    direction="alternate"
                    style={styles.footer}
                >
                    <TouchableOpacity
                        style={[styles.primaryButton, {backgroundColor: grade_color[props.route.params.grade]}]}
                    >
                        <Text style={styles.buttonText}>{grade_name[props.route.params.grade]}</Text>
                    </TouchableOpacity>
                </Animatable.View>

                <Card
                    title='Details of Given Rice Grain Sample'
                    containerStyle={styles.cardStyle}
                    titleStyle={{fontWeight: 'bold', fontSize: 20, color: "#000"}}
                >
                    <View>
                        <Text style={styles.result_text}>Given Rice Grain is : {props.route.params.grain_type}</Text>
                        <Text style={styles.result_text}>Total Number of Grains : {props.route.params.total_grains}</Text>
                        <Text style={styles.result_text}>Number of Damage Grains : {props.route.params.total_damage}</Text>
                        <Text style={styles.result_text}>Number of Correct Grains : {props.route.params.total_correct}</Text>
                    </View>
                </Card>
            </Animatable.View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00313f',
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    primaryButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 320,
        height: 45,
        marginTop: 15,
        borderRadius: 8
    },
    buttonText: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    cardStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 60,
        width: 320,
        borderRadius: 8,
        marginStart: 0,
        fontSize: 20,
        fontWeight: 'bold'
    },
    result_text: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 10
    }
  });

  export default ResultScreen
