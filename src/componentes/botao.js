import React from 'react'
import {  View } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button'
import estilos from './estilos'
import Icon from './icone'


export default props => {
       
       return (
              <Button title={'resposta'}
                            width="17%"
                            height={10}
                            onPress={() => {console.warn('Executado3');}}
                            color="#fff"
                            icon={<Icon nome='heart'/>}
                            >
                                   {props.interno}
                            </Button>
              
              
              
       )
}