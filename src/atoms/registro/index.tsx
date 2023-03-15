import { View, Text, Modal, Pressable } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { resgitros } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { registroDTO } from '../../dto/registro.dto';


type Resgitro = {
    id: string;
    name: string;
    color: string
}


const Registro = (props: Resgitro) => {
    var [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    function del(){
        setModalVisible(true)
    } 
    async function apagar(){
      await AsyncStorage.removeItem(props.id)
      let response = await AsyncStorage.getAllKeys()
      registroDTO.valor = response.length
      setModalVisible(false)
    }
    
    return (
        <>
        <View style={resgitros.registro}>
            <View style={resgitros.text}>
                <Text style={{color: props.color,  
                fontSize:20,
                fontFamily: 'Roboto'
                }}>
                    {props.id} - {props.name}
                </Text>
            </View>
            <Ionicons style={resgitros.icon} onPress={del} name="trash-outline" size={22} color="#C4C4D1" />
        </View>
        <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          } }>
          <View style={resgitros.centeredView}>
            <View style={resgitros.modalView}>
            <Ionicons name="trash-outline" size={42} color="#FF6680" />
              <Text style={resgitros.modalText}>Deseja excluir a conta {props.id} - {props.name}?</Text>
              <Pressable
                style={[resgitros.button, resgitros.buttonYes]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={resgitros.textYes}>Não</Text>
              </Pressable>
              <Pressable
                style={[resgitros.button, resgitros.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={resgitros.textStyle} onPress={apagar}>Concerteza</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        </View>
        </>
    )
}

export default Registro

