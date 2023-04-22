import { TouchableOpacity, Text, View, Alert, BackHandler } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import React, { useState, useContext, useEffect } from 'react'
import styles from '../../assets/styles';
import AppContext from '../../context/AppContext';
import Loader from '../components/General/Loader'


const Login = ({ navigation }) => {

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', disableBackButton);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', disableBackButton)
        }
    }, [])

    const context = useContext(AppContext);
    const [loader, setLoader] = useState(false)
    const [acno, setAcno] = useState('');
    const [code, setCode] = useState('');

    const disableBackButton = () => {
        BackHandler.exitApp();
        return true;
    }
    const setData = async () => {
        if (acno.length !== 6 || code.length !== 4) {
            Alert.alert("Can't Login", "Please fill the acno and pin sector")
            return;
        }
        setLoader(true);
        const data = await context.login(acno, code)
        if (data.success === true) {
            setCode('')
            try {
                setLoader(false)
                await AsyncStorage.setItem("authToken", data.response)
                context.setAuthToken(await AsyncStorage.getItem('authToken'))
            } catch (error) {
                console.log(err)
            }
        }
        else if (data.response === 'Server_error') {
            setLoader(false)
            Alert.alert("Network Problem", "Please check the internet connection before trying again!")
            return;
            
        }
        else {
            setLoader(false)
            Alert.alert("Can't Login", "Please enter correct acno and pin")
            return;
        }
        navigation.navigate('Home')
    }
    return (
        <View style={{backgroundColor: '#fff', height: '100%'}}>

            {loader ? <Loader /> : <></>}

            <View style={styles.loginStyles.container}>

                <>
                    <View style={styles.loginStyles.hp}>
                        <Text style={styles.loginStyles.h}>H</Text>
                        <Text style={styles.loginStyles.p}>P</Text>
                    </View>
                    <View style={{ width: '100%' }}>
                        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: '500', fontFamily: 'Sigmar-Regular', color: 'grey' }}>Welcome Back!</Text>
                    </View>
                    <View style={styles.ctrStyles.faCenter}>
                        <View style={styles.ctrStyles.myContainer}>
                            <Text style={[styles.txtStyles.fontNunito, styles.txtStyles.txtCenter, styles.ctrStyles.myContainer]}>Enter Acno: </Text>
                            <SmoothPinCodeInput
                                codeLength={6}
                                mask={<View style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: 15,
                                    backgroundColor: '#0259a1',
                                }}></View>}
                                maskDelay={200}
                                password={true}
                                cellStyle={{
                                    width: 45,
                                    height: 45,
                                    borderRadius: 15,
                                    borderWidth: 2,
                                    borderColor: '#023057',
                                    marginHorizontal: 20
                                }}
                                cellStyleFocused={{
                                    backgroundColor: 'white'
                                }}
                                value={acno}
                                onTextChange={num => setAcno(num)}
                                keyboardType='decimal-pad'
                            />
                        </View>
                        <View style={[styles.ctrStyles.myContainer]}>
                            <Text style={[styles.txtStyles.fontNunito, styles.txtStyles.txtCenter, styles.ctrStyles.myContainer]}>Enter Pin: </Text>
                            <SmoothPinCodeInput
                                mask={<View style={{
                                    width: 15,
                                    height: 15,
                                    borderRadius: 25,
                                    backgroundColor: '#0259a1',
                                }}></View>}
                                maskDelay={200}
                                password={true}
                                cellStyle={{
                                    width: 45,
                                    height: 45,
                                    borderRadius: 15,
                                    borderWidth: 2,
                                    borderColor: '#023057',
                                    marginHorizontal: 20
                                }}
                                cellStyleFocused={{
                                    backgroundColor: 'white'
                                }}
                                value={code}
                                onTextChange={code => setCode(code)}
                                keyboardType='decimal-pad'
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.loginStyles.btn} onPress={setData}>
                        <Text style={{ fontSize: 15, color: 'white', textAlign: 'center', fontFamily: 'Nunito-Regular' }}>Login</Text>
                    </TouchableOpacity>
                </>

            </View>
        </View>

    )
}

export default Login