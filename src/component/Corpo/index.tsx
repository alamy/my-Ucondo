import {  View, Text, ScrollView, TextInput } from 'react-native';
import React, { useEffect, useState, memo } from 'react';
import { corpo } from './style';
import Registro from '../../atoms/registro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';
import { registroDTO } from '../../dto/registro.dto';

export type Teste ={
     key: string
}

const Corpo = () => {
    const [text, onChangeText] = useState('');
    const [registro, setRegistro] = useState(registroDTO.valor);
    const [total, setTotal]:any = useState([]);

    async function preeencher() {
            const te:any = []
            let response = await AsyncStorage.getAllKeys()
            setRegistro(response.length)
            for(var i = 0; i < response.length; i++) {
                const res =  await AsyncStorage.getItem(response[i])
                const t = JSON.parse(res)
                te.push(t)
            }
            setTotal(te) 
        }

    function search(){
        if(text.length === 0){
            preeencher()
        }
        const updatedData = total.filter((item:any) => {
            const item_data = item.codigo;
            const text_data = text;
            let data:any
            if(item_data === text_data){
                data = item
            }
            return data;
          });
          setTotal(updatedData);
    }

    useEffect(() => {
        
       preeencher()
    },[registro]);
    
    return (
        <>
        <View style={corpo.input}>
            <Ionicons style={corpo.lupa} name="search-outline" size={22} color="#C4C4D1" />
            
            <TextInput
            style={corpo.campo}
            onChangeText={onChangeText}
            onBlur={search}
            value={text}
            placeholder="Digite o codigo"
            placeholderTextColor="#C4C4D1"
            />
        </View>
        <View style={corpo.resultado}>

           <Text style={corpo.titulo}>Listagem</Text>
           <Text style={corpo.registro}>{registro} registro</Text>
        <ScrollView>
           {total.map((total:any)=> {
            let resultado;
          switch (total.codigo.charAt(0)){
                case '1':
                    resultado =  <Registro id={total.codigo} name={total.nome_da_conta} key={total.codigo} color='#1BA803'/>;
                break;
                case '2':
                    resultado = <Registro id={total.codigo} name={total.nome_da_conta} key={total.codigo} color='#E28856'/>;
                    break;
                case '3':   
                    resultado = <Registro id={total.codigo} name={total.nome_da_conta} key={total.codigo} color='#4a4999'/>;
                    break;
                default: 
                    resultado = <Registro id={total.codigo} name={total.nome_da_conta} key={total.codigo} color='gray'/>;
            }
           
            return resultado
        })} 
        </ScrollView>   
        </View>
        </>
    )
}

export default Corpo

