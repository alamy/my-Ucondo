import { TextInput, View, Text } from 'react-native';
import React, {useState} from 'react';
import { cabecalho } from './style';
import Ionicons from '@expo/vector-icons/Ionicons';


 const Cabecalho = () => {
  const [text, onChangeText] = useState('');
 
  

  return (

      <View style={cabecalho.input}>
      <Ionicons style={cabecalho.lupa} name="search-outline" size={22} color="#C4C4D1" />
       <TextInput
       style={cabecalho.campo}
        onChangeText={onChangeText}
        value={text}
        placeholder="Digite o codigo"
        placeholderTextColor="#C4C4D1"
      />
      </View>
      
      
  

  );
}

export default Cabecalho