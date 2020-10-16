import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    
    containerBtn: {
        margin: 15,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    btn: {
        backgroundColor: '#00f',
        padding: 9,
    },
    
    textBtn: {
        fontSize: 12,
        color: "#fff"
    },

    pokeInfo: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    pokeInfoBody: {
        width: 200,
        height: 200,
        backgroundColor: '#FFF',
    },

    containerLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});