import React, { useState } from 'react';
import { View, 
    Text, 
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFileImage } from '@fortawesome/free-solid-svg-icons';
import {Picker} from '@react-native-community/picker';
import * as ImagePicker from 'expo-image-picker';

const ImageUpload = () => {

    const [riceImage, setRiceImage] = useState('');
    const [riceType, setRiceType] = useState('Please select Rice Type');
    
    const _getPhotoLibrary = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
         allowsEditing: true
        });
        if (!result.cancelled) {
            setRiceImage(result.uri);
            alert(typeof(result.uri));
        }
    }

    return (
        <View style={styles.container}>
            <Animatable.View 
                animation="fadeInUpBig"
            >
                {
                    riceImage===''?
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
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <TouchableOpacity
                    style={styles.primaryButton}
                    onPress={() => {}}
                >
                    <Text style={styles.buttonText}>START GRADING</Text>
                </TouchableOpacity>
            </Animatable.View> 
        </View>
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
        padding: 10,
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
        borderRadius: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
  });

  export default ImageUpload
