import { StyleSheet } from 'react-native'

const loginStyles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 100,
        margin: 20,
        paddingTop: 50,
        padding: 50,
        elevation: 1,
        shadowColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20
    },
    inp: {
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
        width: '100%',
        borderRadius: 10,
        marginVertical: 20
    },
    btn: {
        paddingHorizontal: 40,
        paddingVertical: 15,
        backgroundColor: '#023057',
        borderRadius: 20,
        width: '100%'
    },
    hp: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        flexDirection: 'row',
        transform: [{translateY: -50}],
        borderRadius: 100,
        zIndex: 2,
        width: 100,
        elevation: 2,
        shadowColor: 'rgba(0,0,0,0.3)',
        backgroundColor: 'white',
        height: 100
    },
    
    h: {
        color: "#00baf2",
        fontSize: 50,
        fontFamily: 'FiraCode-Regular',
    },
    
    p: {
        color: "#023057",
        fontSize: 70,
        fontFamily: 'Ubuntu-Regular',
    }
})

export default loginStyles