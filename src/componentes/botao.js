import React from 'react'
import { Button, View } from 'react-native'
import estilos from './estilos'
import Icon from './icone'


export default props => {
       
       return (
              <View>
              <Button
              style={estilos.Button}
              title={props.titulo}
              width="17%"
              height={23}
              onPress={() => {console.warn('Executado3');}}
              color="#66C4F2">
                     <Icon nome='heart'/>
              </Button>
              </View>
              
              
              
       )
}