import { Image, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import styles from '../../../../assets/styles'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppContext from '../../../../context/AppContext'

const LogOutSect = () => {
    const navigation = useNavigation();
    const context = useContext(AppContext);

    const LogOut = async () => {
        await AsyncStorage.clear();
        context.setAuthToken('')
        navigation.navigate('Login')
    }
    return (
        <TouchableOpacity style={styles.sideBarSt.sideBarSect} onPress={LogOut}>
            <Image style={[styles.ftrStyles.iconImg, { height: 30, width: 30, tintColor: '#fff', position: 'absolute', left: 20 }]} source={require('../../../../assets/Images/signOut.png')} />
            <Text style={[styles.txtStyles.head3, styles.txtStyles.whiteTxt, styles.txtStyles.fontUbuntu]}>Log Out</Text>
        </TouchableOpacity>
    )
}

export default LogOutSect