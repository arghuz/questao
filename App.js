import React from 'react'
import { View , Text } from 'react-native'
import estilos from './src/componentes/estilos'
import Imagem from './src/componentes/imagem'
import TextInput from './src/componentes/textbox'
import Button from './src/componentes/botao'


export default props => {
       return (
     <View style={estilos.BackGround}>
        <Imagem/>        
        <TextInput interno='Digite seu E-mail' icone='user'/>
        <TextInput interno='Digite sua senha' icone='lock'/>
       
        <Text>
          
        </Text>
        <Button titulo='Entrar'  />
      </View> 
        
    
       )
}