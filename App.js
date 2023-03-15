
import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Cadastrar from './screens/cadastrar';
import { Text, TouchableHighlight, Modal, View, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { cadastroDto } from './src/dto/cadastro.dto';
import { body } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { registroDTO } from './src/dto/registro.dto';


 function MyStack() {
 
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  var [modalVisible, setModalVisible] = useState(false);
  let [mensagem, setMensagem] = useState('')
  let [validador, setValidador] = useState(true)
  let [icon, setIcon] = useState('');
 async function salve(){
    const salvar = 
      {
      codigo: cadastroDto.id,
      nome_da_conta: cadastroDto.nome,
      tipo: cadastroDto.tipo,
      aceita_Lançamentos: cadastroDto.lancamento
    }
  
    const response = await AsyncStorage.getAllKeys()
    response.forEach(element => {
      if(element === cadastroDto.id){
        setValidador(false)
      }else{
        setValidador(true)
      }
    });
    if(validador){
      await AsyncStorage.setItem(cadastroDto.id, JSON.stringify(salvar));
      setMensagem('Conta Inserida com sucesso')
      setIcon('checkmark-circle-outline')
    }else{
      setMensagem('Este Codigo ja existe')
      setIcon('alert-outline')
    }
    setModalVisible(true) 
  }

  function irParaHome(){
    navigation.reset({
      index: 0,
      routes: [{name: 'Plano de Contas'}],
    });
    if(validador){
      setModalVisible(false)
      
    }else{
      setModalVisible(false)
    }
  }
  
 let icone = icon
  return (
<> 
    <Stack.Navigator
      screenOptions={{ headerStyle: { 
          backgroundColor: '#622490',
          borderBottomColor: '#622490'  ,
          borderWidth: 0,
          shadowOpacity: 1,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 22,
          fontFamily: 'Roboto',
        },
      }}>
      <Stack.Screen 
        name="Plano de Contas" 
        component={Home}  
        options={{
          headerRight: () => (
            <TouchableHighlight 
            onPress={() => navigation.navigate('Inserir Conta', {name: 'Inserir Conta'})}
            >
              <Ionicons name="add-outline" size={32} color="#fff" />
            </TouchableHighlight >
          ),
        }}/>
      <Stack.Screen 
        name="Inserir Conta" 
        component={Cadastrar} 
        options={{
          headerRight: () => (
            <TouchableHighlight 
            onPress={salve}
            >
              <Ionicons name="checkmark-outline" size={32} color="#fff" />
            </TouchableHighlight >
          ),
        }}/>
    </Stack.Navigator>
    <View>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      } }>
      <View style={body.centeredView}>
        <View style={body.modalView}>
        <Ionicons name={icone} size={42} color="#1BA803" />
          <Text style={body.modalText}>{mensagem}</Text>
          <Pressable
            style={[body.button, body.buttonClose]}
            onPress={irParaHome}>
            <Text style={body.textStyle}>Fechar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    </View>
    </>
  );
}

export default function App() {

  return (
    
      <NavigationContainer>
        <MyStack />
      </NavigationContainer> 

      
     
  );
}

