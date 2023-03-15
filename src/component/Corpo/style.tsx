import { StyleSheet } from 'react-native';


export const corpo = StyleSheet.create({   

    resultado: {
        backgroundColor: '#F0EDF5',
        borderTopLeftRadius: 30,
        borderTopRightRadius:30,
        paddingTop:20,
        paddingBottom:210,

    },
    titulo: {
        fontSize:26,
        marginLeft:20,
        alignSelf: 'flex-start',
    },
    registro: {
        alignSelf: 'flex-end',
        marginTop: -20,
        marginRight:20,
        fontSize:16,
    },input: {
        height: 40,
        margin: 12,
        borderWidth: 0,
        padding: 10,
        borderRadius: 30,
        backgroundColor: '#fff'
      },
      lupa: {
        alignSelf: 'flex-start',
        width:'10%',
      },
      campo: {
        width:'88%',
        alignSelf: 'flex-end',
        marginTop: -28,
        height: 40,
      },
      plus: {
        alignSelf: 'flex-end',
        marginRight:20,
        marginTop: -25,
      }
    

})