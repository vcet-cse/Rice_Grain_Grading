import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faLock, faAddressCard, faHome, faList, faHeart, faCartArrowDown, faCartPlus, faShoppingBag, faSignOutAlt, faSign, faSignInAlt, faStar, faUserAstronaut, faUserFriends, faUserCircle, faUserAltSlash, faUserCog, faLevelDownAlt, } from '@fortawesome/free-solid-svg-icons';
import {
    Avatar,
    Drawer,
    Title,
    Caption,
    Text
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

const Drawercontent = (props) => {
    
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15, }}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>

                                <Text>Hello World</Text>

                            </View>
                        </View>

                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem 
                                icon={() => (
                                    <FontAwesomeIcon icon={faHome} size={20} color={"black"} />
                                )}
                                label="Home"
                                onPress={() => {props.navigation.navigate('Home')}}
                            />
                            <DrawerItem 
                                icon={() => (
                                    <FontAwesomeIcon icon={faStar} size={20} color={"black"} />
                                )}
                                label="Grade Your Rice"
                                //onPress={() => {props.navigation.navigate('Products')}}
                            />
                            <DrawerItem 
                                icon={() => (
                                    <FontAwesomeIcon icon={faUserCog} size={20} color={"black"} />
                                )}
                                label="How to use"
                                onPress={() => {props.navigation.navigate('Howtouse')}}
                            />
                            <DrawerItem 
                                icon={() => (
                                    <FontAwesomeIcon icon={faUserFriends} size={20} color={"black"} />
                                )}
                                label="About us"
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
                        <FontAwesomeIcon icon={faLevelDownAlt} size={20} color={"black"} />
                    )}
                    label="Exit"
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
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
});