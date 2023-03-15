
import { View } from 'react-native';
import Cabecalho from '../../src/component/Cabecalho';
import { cadastrar } from './style';
import { useFonts } from 'expo-font';
import Formulario from '../../src/component/formulario';


export default function Cadastrar() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('../../assets/fonts/Roboto-Regular.ttf'),
  });
  return (
    
    <View style={cadastrar.body}>
      <Formulario />
    </View>
  );
}