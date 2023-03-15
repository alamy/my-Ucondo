import { TextInput, View, Text, ScrollView } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { formulario } from './style';     
import { cadastroDto } from '../../dto/cadastro.dto';
import {Picker} from '@react-native-picker/picker';
import dbTotal from '../../db/base.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Formulario = () => {
    let [contaPai, setContaPai] = useState('');
    let [codigo, onCodigo] = useState('');
    let [nome, onNome] = useState('');
    let [tipo, onTipo] = useState('');
    let [aceite, onAceite] = useState('');
    let [total, setTotal] = useState([]);
    let [sugestao, setSugestao] = useState('');

    cadastroDto.id = codigo;
    cadastroDto.pai = contaPai;
    cadastroDto.nome = nome;
    cadastroDto.tipo = tipo;
    cadastroDto.lancamento = aceite;

    function Sugestao() {
     let alamy = contaPai.indexOf('.')
     let ultimo = parseInt(contaPai.slice(-1))
     let separar = contaPai.split(".")
     let twd:any;
        if(alamy > 0){
        if(ultimo < 999) {
            for(let t = 0; t < separar.length; t++){
                if(separar[t]){
                    twd = separar[t] + '.' + separar[t-1]
                }
            }
            ultimo = ultimo + 1
            }
        setSugestao(twd + '.' + ultimo)  
        }else{
            setSugestao(contaPai+ '.1')
        }
    
    }
    
    async function allPai(){
       
        const te:any = []
        const response = await AsyncStorage.getAllKeys()
        for(var i = 0; i < response.length; i++) {
            const res:any =  await AsyncStorage.getItem(response[i])
            const t = JSON.parse(res)
            te.push(t)
        }

        setTotal(te)
    }
    useEffect(() => {
        allPai()
        
    },[])
    
    return (

        <View style={formulario.resultado}>
         <ScrollView>
            <Text style={formulario.titulo}>Conta pai</Text>
                <View style={formulario.piker} >
                    
                <Picker 
                onBlur={Sugestao}
                    selectedValue={contaPai}
                    onValueChange={(itemValue) =>
                        setContaPai(itemValue)    
                }>

                    {total.map((total:any) => {
                        let resultado
                        if(total.aceita_Lançamentos === 'Não'){
                            resultado = <Picker.Item key={total.codigo}  label={total.nome_da_conta} value={total.codigo} />
                        }
                        return resultado
                    })}
                    </Picker>
                </View>
            <Text style={formulario.titulo}>Código</Text>
                <View style={formulario.campo}>
                    <TextInput 
                        onChangeText={onCodigo}
                        defaultValue={sugestao} 
                        keyboardType="numeric"
                     />
                </View>
            <Text style={formulario.titulo}>Nome</Text>
                <View style={formulario.campo}>
                    <TextInput  
                        onChangeText={onNome}
                        value={nome} 
                        placeholderTextColor="#C4C4D1" />
                </View>
            <Text style={formulario.titulo}>Tipo</Text>
                <View style={formulario.campo}>
                    <TextInput  
                        onChangeText={onTipo}
                        value={tipo} 
                        placeholderTextColor="#C4C4D1" />
                </View>
            <Text style={formulario.titulo}>Aceite laçamentos</Text>
                <View style={formulario.piker}>
                    <Picker
                        selectedValue={aceite}
                        onValueChange={(itemValue) =>
                            onAceite(itemValue)
                        }>
                        <Picker.Item label="Sim" value="Sim" />
                        <Picker.Item label="Não" value="Não" />
                    </Picker>
                </View>    
        </ScrollView>
        </View>

    )
}

export default Formulario


