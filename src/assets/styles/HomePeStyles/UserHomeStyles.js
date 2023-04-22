import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("screen")

const imgStyles = StyleSheet.create({
    img: {
        height: 200,
        width: '100%',
        marginTop: 60
    }
})

const topBar = StyleSheet.create({
    container: {
        height: 70,
        width: '100%',
        margin: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        position: 'absolute',
        zIndex: 1,
        backgroundColor: '#023057',
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3)'
    },
    burger: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 35,
        position: 'absolute',
        left: 30
    },
    burg: {
        height: 2,
        width: 25,
        backgroundColor: '#fff',
        margin: 2,
        borderRadius: 10
    },
    activeBurg1: {
        margin: 0,
        transform: [{rotate: '45deg'} ,{translateX: 1}]
    },
    activeBurg2: {
        margin: 0,
        transform: [{rotate: '-45deg'} ,{translateX: 1}]
    }
})

const topsStyles = StyleSheet.create({
    ftrContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        width: '100%',
    },
    scanContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: '100%'
    }
})

const midsStyles = StyleSheet.create({
    card: {
        backgroundColor: '#00ebc0',
        borderRadius: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        width: width / 1.2,
        height: 200,
        marginVertical: 20
    }
})

const ftrStyles = StyleSheet.create({
    iconCtr: {
        borderRadius: 50,
        elevation: 1,
        shadowColor: 'rgba(0,0,0,0.3)',
        width: 60,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    }, 
    iconImg: {
        width: '100%', 
        height: '100%', 
        tintColor: '#00baf2'
    },
    iconImgLg: {
        width: '100%', 
        height: '100%', 
        tintColor: 'white'
    },
    ftrOptn:{
        fontSize: 10, 
        fontFamily: 'FiraCode-Regular', 
        textAlign: 'center', 
        width: 67
    },
    iconCtrLg: {
        backgroundColor: '#0f4a8a',
        borderRadius: 10,
        width: 112, 
        height: 112,
        padding: 20
    },
    ftrOptnLg:{
        fontSize: 20, 
        fontFamily: 'FiraCode-Regular', 
        textAlign: 'center', 
        width: 112
    },
})

const btmsStyles = StyleSheet.create({
    ftrImg: {
        height: 100,
        width: "100%",
        borderRadius: 20,
    }
})
export {topBar, imgStyles, topsStyles, midsStyles, ftrStyles, btmsStyles}