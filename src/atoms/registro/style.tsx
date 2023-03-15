import { StyleSheet } from 'react-native';

export const resgitros = StyleSheet.create({   
    registro: {
       backgroundColor: '#fff',
       borderRadius: 30,
       marginTop:12,
       padding:13
    },
    text: {
        alignSelf: 'flex-start'
    },
    icon: {
        alignSelf: 'flex-end',
        marginTop:-23,
        marginRight:10,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonClose: {
        backgroundColor: '#FF6680',
        alignSelf: 'flex-end',
        paddingLeft:20,
        paddingRight:20,
        marginTop: -37,
      },
      buttonYes:{
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
        border: 'none',
        elevation: 0,
      },
      textStyle: {
        color: 'white',
        textAlign: 'center',
      },
      textYes:{
        color: '#FF6680',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
})