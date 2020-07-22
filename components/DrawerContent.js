import React from 'react';
import { View, StyleSheet, ImageBackground, BackHandler } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faSignOutAlt, faStar, faUserFriends, faUserCog } from '@fortawesome/free-solid-svg-icons';
import {
    Drawer
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';


const Drawercontent = (props) => {
    
    return(
        <View style={{flex:1, backgroundColor: "#00303d"}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View>
                        <ImageBackground
                            resizeMode={'cover'} 
                            style={{width: 280, height: 150}}
                            source={require('../assets/header_wallpaper.jpg')}
                        >
                        </ImageBackground>
                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem 
                                icon={() => (
                                    <FontAwesomeIcon icon={faHome} size={20} color={"white"} />
                                )}
                                label="Home"
                                labelStyle={styles.lable_style}
                                onPress={() => {props.navigation.navigate('Home')}}
                            />
                            <DrawerItem 
                                icon={() => (
                                    <FontAwesomeIcon icon={faStar} size={20} color={"white"} />
                                )}
                                label="Grade Your Rice"
                                labelStyle={styles.lable_style}
                                onPress={() => {props.navigation.navigate('ImageUpload')}}
                            />
                            <DrawerItem 
                                icon={() => (
                                    <FontAwesomeIcon icon={faUserCog} size={20} color={"white"} />
                                )}
                                label="How to use"
                                labelStyle={styles.lable_style}
                                onPress={() => {props.navigation.navigate('Howtouse')}}
                            />
                            <DrawerItem 
                                icon={() => (
                                    <FontAwesomeIcon icon={faUserFriends} size={20} color={"white"} />
                                )}
                                label="About us"
                                labelStyle={styles.lable_style}
                                onPress={() => {props.navigation.navigate('Aboutus')}}
                            />
                        </Drawer.Section>
                    </View>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.drawerSection}>
            </Drawer.Section>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={() => (
                        <FontAwesomeIcon icon={faSignOutAlt} size={20} color={"white"} />
                    )}
                    label="Exit"
                    labelStyle={styles.lable_style}
                    onPress={() => BackHandler.exitApp()}
                />
            </Drawer.Section>
        </View>
    );
}

export default Drawercontent;

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
      paddingTop: 50
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#000',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    lable_style: {
        color:"#fff", 
        fontWeight: "bold", 
        fontSize: 15
    }
});