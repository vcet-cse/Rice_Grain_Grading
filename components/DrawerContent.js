import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faLock, faAddressCard, faHome, faList, faHeart, faCartArrowDown, faCartPlus, faShoppingBag, faSignOutAlt, faSign, faSignInAlt, faStar, faUserAstronaut, faUserFriends, faUserCircle, faUserAltSlash, faUserCog, faLevelDownAlt, } from '@fortawesome/free-solid-svg-icons';
import {
    Avatar,
    Drawer,
    Text
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
                                labelStyle={{color:"#fff"}}
                                onPress={() => {props.navigation.navigate('Home')}}
                            />
                            <DrawerItem 
                                icon={() => (
                                    <FontAwesomeIcon icon={faStar} size={20} color={"white"} />
                                )}
                                label="Grade Your Rice"
                                labelStyle={{color:"#fff"}}
                                //onPress={() => {props.navigation.navigate('Products')}}
                            />
                            <DrawerItem 
                                icon={() => (
                                    <FontAwesomeIcon icon={faUserCog} size={20} color={"white"} />
                                )}
                                label="How to use"
                                labelStyle={{color:"#fff"}}
                                onPress={() => {props.navigation.navigate('Howtouse')}}
                            />
                            <DrawerItem 
                                icon={() => (
                                    <FontAwesomeIcon icon={faUserFriends} size={20} color={"white"} />
                                )}
                                label="About us"
                                labelStyle={{color:"#fff"}}
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
                    labelStyle={{color:"#fff"}}
                    //onPress={() => {props.logoutUser()}}
                />
            </Drawer.Section>
        </View>
    );
}

//export default Drawercontent;
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
});