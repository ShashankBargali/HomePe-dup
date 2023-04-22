import { StyleSheet, Dimensions } from 'react-native'

const sideBarSt = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height,
        width: '75%',
        alignItems: 'center',
        backgroundColor: '#023057',
        paddingVertical: 90,
        paddingHorizontal: 30,
        position: 'absolute',
        zIndex: 1,
        elevation: 2,
    },
    innerView: {
        borderWidth: 2,
        borderColor: 'black',
        borderStyle: 'dashed',
        borderRadius: 10,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 3,
        paddingHorizontal: 3,
        width: "100%",
        height: 150,
        marginVertical: 20
    },
    sideBarSect : {
        flexDirection: 'row',
        padding: 10,
        borderColor: 'white',
        borderWidth: 1,
        width: 200,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    versionNum: {
        position: 'absolute',
        top: '100%',
        left: 20,
        backgroundColor: '#fff',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5
    }
})

export default sideBarSt