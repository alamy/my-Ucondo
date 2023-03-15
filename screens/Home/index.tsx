
import { Button, View } from 'react-native';
import * as React from 'react';
import Cabecalho from '../../src/component/Cabecalho';
import { home } from './style';
import { useFonts } from 'expo-font';
import Corpo from '../../src/component/Corpo';
import Cadastrar from '../cadastrar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { registroDTO } from '../../src/dto/registro.dto';



export default function Home() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('../../assets/fonts/Roboto-Regular.ttf'),
  });
  return (
    
    <View style={home.body}>
      <Corpo />
    </View>
  );
}