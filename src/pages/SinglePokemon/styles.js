import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },

    backBtn: {
        backgroundColor: '#00f',
        width: 90,
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        marginVertical: 15,
    },

    titleBtn: {
        color: '#fff',
    },

    bodyCard: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        height: 200,
        width: 200,
        flex: 1
    },

    title: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },

    infos: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        marginTop: 15,
    },

    pokeData: {
        fontWeight: 'bold'
    },

    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#000'
    },

    abilitys: {
        marginVertical: 5,
    },
});