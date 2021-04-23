import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../componentes/PassoStack'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="TelaA">
        <Stack.Screen name="TelaA" options={{title: 'Informações Iniciais'}}>
            {props => (
                <PassoStack{...props} avancar="TelaB">
                    <TelaA/>
                </PassoStack>
            )}
        </Stack.Screen>

        <Stack.Screen name="TelaB" options={{title: "Informações Secundarias"}}>
            {props => (
                <PassoStack{...props} voltar avancar="TelaC">
                    <TelaB/>
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaC">
        {props => (
                <PassoStack{...props} voltar avancar="TelaC" >
                    <TelaC {...props}/>
                </PassoStack>
            )}
        </Stack.Screen>


    </Stack.Navigator>
)