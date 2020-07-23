import React, { useState } from 'react';
import { View, 
    Text, 
    Image,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFileImage } from '@fortawesome/free-solid-svg-icons';
import {Picker} from '@react-native-community/picker';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { Loading } from './LoadingComponent';
import { Modal } from 'react-native-paper';

const ImageUpload = ( {navigation} ) => {

    const [riceImage, setRiceImage] = useState('');
    const [riceType, setRiceType] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [resultData, setResultData] = useState({'resultsAreset': false});


    const displayResult = () => {
        setResultData({resultsAreset: false})
        setLoading(false)
	    navigation.navigate('ResultScreen', {grain_type: resultData['grain_type'], total_grains: resultData['total_grains'], total_damage: resultData['total_damage'], total_correct: resultData['total_correct'], grade: resultData['grade']})
    }
    
    const _getPhotoLibrary = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
         allowsEditing: true
        });
        if (!result.cancelled) {
            setRiceImage(result.uri);
        }
    }
    
    const handleUploadImage = () => {
    	if(riceImage === ''){
    		Alert.alert(
		    'Error',
		    'Please select Image'
                );
    	}
    	else if(riceType === '' || riceType === "0"){
    		Alert.alert(
		    'Error',
		    'Please select Rice Type'
		);
    	}
    	else{
		setLoading(true)
		let body = new FormData();
		body.append('image', {uri: riceImage, name: riceType, filename :riceType, type: 'image/png'});
		    body.append('Content-Type', 'image/png');

		fetch('http://'+global.ipAdress+'/upload',{ method: 'POST',headers:{  
		    "Content-Type": "multipart/form-data",
		    "otherHeader": "foo",
		},
		 body : body} )
		.then((res) => res.json())
		.then((res) => {
		    setResultData({'grain_type': res['Grain_Type'], 'total_grains': res['Total'], 'total_damage': res['Damage'], 'total_correct': res['Correct'], 'grade': res['Result'], 'resultsAreset': true})
		 })
		.catch((e) => {
		    setLoading(false)
		    alert(e)
		})
		.done() 
    	}   
    }

    return (
        <ScrollView style={styles.container}>
                <Animatable.View 
                    animation="fadeInUpBig"
                >
                    { console.log("Ip adress is " + global.ipAdress) }
                    {
                        riceImage === '' ?
                        <View onTouchStart={() => _getPhotoLibrary()} style={styles.ImageSelect}>
                            <FontAwesomeIcon icon={faFileImage} size={150} color={"black"} style={styles.Image_icon}/>
                            <Text style={styles.upload_text}>Click Here to Select Image</Text>
                        </View>
                        :
                        <Image 
                            source={{ uri: riceImage }} 
                            style={{ aspectRatio: 1, resizeMode: 'contain', }} 
                            onTouchStart={() => _getPhotoLibrary()}
                        />  
                    }
                    <View
                        style={styles.primaryButton}
                    >
                        <Picker
                            selectedValue={riceType}
                            style={[{height: 50, width: 150}, styles.buttonText]}
                            onValueChange={(itemValue, itemIndex) => setRiceType(itemValue)}
                        >
                            <Picker.Item label="Select Rice Type" value="0" />
                            <Picker.Item label="Boiled basmathi" value="BOILED_BASMATI" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="Boiled [Polished Red]" value="BOILED_POLISHED_RED" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                            <Picker.Item label="7" value="7" />
                            <Picker.Item label="8" value="8" />
                        </Picker>
                    </View>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => handleUploadImage()}
                    >
                        <Text style={styles.buttonText}>START GRADING</Text>
                    </TouchableOpacity>
                </Animatable.View> 
                {
                    resultData['resultsAreset'] ?
                        displayResult()
                    :
                        null
                }
                {   
                    isLoading ?
                    <Modal visible="true">
                        <View>
                            <Loading />
                        </View>
                    </Modal>
                    :
                        null
                }
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
    ImageSelect: {
        backgroundColor: "#fff", 
        height: 340, 
        borderColor: "#000", 
        borderWidth: 2,
        marginBottom: 20
    },
    Image_icon: {
        marginTop: 70,
        marginStart: 70
    },
    upload_text: {
        padding: 20,
        fontWeight: "bold",
        fontSize: 23
    },
    primaryButton: {
        backgroundColor: '#ba831e',
        justifyContent: 'center',
        alignItems: 'center',
        width: 320,
        height: 45,
        marginTop: 15,
        borderRadius: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
  });

  export default ImageUpload
