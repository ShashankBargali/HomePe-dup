import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import HomeTopBar from '../components/UserHome/Templates/HomeTopBar'

const Test = () => {
    const slideAnim = useRef(new Animated.Value(-300)).current;
    const [active, setActive] = useState(false)

    useEffect(() => {
        if (active) {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 600,
                useNativeDriver: true,
            }).start();
        }
        else{
            Animated.timing(slideAnim, {
                toValue: -300,
                duration: 600,
                useNativeDriver: true,
            }).start();

        }
    }, [active])
    return (
        <View style={active ? {'backgroundColor': 'rgba(0,0,0,0.2)'} : ''}>
            <HomeTopBar active={active} setActive={setActive} />


            <Animated.View style={[styles.container, { transform: [{ translateX: slideAnim }] }]}>
                <Text style={{color: 'white', fontSize: 20}}>sdfdf</Text>
            </Animated.View>
        </View>
    )
}

export default Test

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: 250,
        backgroundColor: '#023057',
        marginTop: 70,
        // marginLeft: 60
        // left: '0
    },
    f1: {
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    f2: {
        flex: 1
    },
    row: {
        flexDirection: 'row'
    }
})