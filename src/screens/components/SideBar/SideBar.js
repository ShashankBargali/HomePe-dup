import { View, Text, Animated, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useEffect, useContext, useState } from 'react'
import styles from '../../../assets/styles';
import AppContext from '../../../context/AppContext';
import LogOutSect from '../UserHome/Templates/LogOutSect';

const SideBar = (props) => {
    const slideAnim = useRef(new Animated.Value(-300)).current;
    const { active, setActive } = props
    const context = useContext(AppContext)
    const [bankDetails, setBankDetails] = useState({ name: '', acno: '' })

    useEffect(() => {
        if (active) {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 600,
                useNativeDriver: true,
            }).start();
        }
        else {
            Animated.timing(slideAnim, {
                toValue: -300,
                duration: 600,
                useNativeDriver: true,
            }).start();

        }
    }, [active])

    useEffect(() => {
        getUserBankDetails()

        return () => {
            setBankDetails({ name: '', acno: '' })
        }
    }, [])


    const getUserBankDetails = async () => {
        const data = await context.fetchBankDetails();
        setBankDetails({ name: data.response.name, acno: data.response.acno })
        console.log(data)
        setLoader(false)
        setTimeout(() => {
            setBnk(false)
        }, 30000);
    }
    
    return (
        <View>
            <Animated.View style={[styles.sideBarSt.container, { transform: [{ translateX: slideAnim }] }]}>
                <View style={styles.sideBarSt.card}>
                    <View style={styles.sideBarSt.innerView}>
                        <Image style={[styles.ftrStyles.iconImg, { height: 80, width: 80, tintColor: '#023057' }]} source={require('../../../assets/Images/profileUser.png')} />
                        <Text style={[styles.txtStyles.head2, styles.txtStyles.fontNunito]}>{bankDetails.name}</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.sideBarSt.sideBarSect} onPress={() => setActive(false)}>
                    <Image style={[styles.ftrStyles.iconImg, { height: 30, width: 30, tintColor: '#fff', position: 'absolute', left: 20 }]} source={require('../../../assets/Images/home.png')} />
                    <Text style={[styles.txtStyles.head3, styles.txtStyles.whiteTxt, styles.txtStyles.fontUbuntu]}>Home</Text>
                </TouchableOpacity>

                <LogOutSect/>

                <Text style={[styles.txtStyles.desc, styles.txtStyles.whiteTxt, styles.txtStyles.fontFiraCode]}>*Many functionalities will arrive soon*</Text>

                <View style={styles.sideBarSt.versionNum}>
                    <Text style={[styles.txtStyles.desc, styles.txtStyles.fontSermar]}>v1.0.1</Text>
                </View>
            </Animated.View>
        </View>
    )
}

export default SideBar