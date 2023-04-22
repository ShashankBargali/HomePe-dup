import { View, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const ContLoader = () => {
    // return (
    //     <View style={[styles.ctrStyles.fjCenter, styles.ctrStyles.faCenter]}>
    //         <ActivityIndicator size={100} color="#008068" />
    //     </View>
    // )
    const [loader, setLoader] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setTimeout(() => {
                setLoader(1)
            }, 0);
            setTimeout(() => {
                setLoader(2)
            }, 200);
            setTimeout(() => {
                setLoader(3)
            }, 400);
            setTimeout(() => {
                setLoader(4)
            }, 600);
            setTimeout(() => {
                setLoader(5)
            }, 800);
        }, 1000);

    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.loader}>
                <View style={loader === 1 ? styles.loading : styles.loaded}></View>
                <View style={loader === 2 ? styles.loading : styles.loaded}></View>
                <View style={loader === 3 ? styles.loading : styles.loaded}></View>
                <View style={loader === 4 ? styles.loading : styles.loaded}></View>
                <View style={loader === 5 ? styles.loading : styles.loaded}></View>
            </View>
        </View>
    )
}

export default ContLoader

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 3
    },
    loader: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 20,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 5
    },
    loading: {
        width: 20,
        height: 20,
        borderRadius: 30,
        backgroundColor: '#0587f5',
        margin: 5
    },
    loaded: {
        backgroundColor: '#023057',
        width: 30,
        height: 30,
        borderRadius: 30,
        margin: 5
    }
})