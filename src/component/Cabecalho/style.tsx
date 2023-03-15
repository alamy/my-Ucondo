import { StyleSheet } from 'react-native';

export const cabecalho = StyleSheet.create({

    input: {
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
      titulo: {
        color: "#fff",
        fontSize: 22,
        fontFamily: 'Roboto',
        marginTop:20,
        marginLeft: 16,
        alignSelf: 'flex-start',
      },
      plus: {
        alignSelf: 'flex-end',
        marginRight:20,
        marginTop: -25,
      }
})