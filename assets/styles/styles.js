import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    encabezado: {
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        fontFamily: 'Lato-Black',
        backgroundColor: '#5E49E2',
        paddingBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#FFF',
        marginBottom: 30
    },
    imagen: {
        width: '100%',
        height: 150,
        marginHorizontal: '2.5%'
    },
    contenido: {
        marginHorizontal: '2.5%'
    },
    label: {
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical: 20,
    },
    btnCotizar: {
        backgroundColor: '#5E49E2',
        padding: 10,
        marginTop: 20,
        
    },
    textoCotizar: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    resultado: {
        backgroundColor: '#5E49E2',
        padding: 20
    },
    texto: {
        color: '#FFF',
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        marginBottom: 10
    },
    precio: {
        fontSize: 38
    },
    span: {
        fontFamily: 'Lato-Black',
    }
})

export default styles;