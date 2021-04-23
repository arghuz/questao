import React, { useState } from 'react'
import { TextInput } from 'react-native'
import estilos from './estilos'


export default props => {
    const [txt, setTexto] = useState(props.interno )
    return (                
       
         <TextInput
                placeholder= {props.interno}
                selectionColorn="gray"
                onChangeText={value => setTexto(txt)}
                style={estilos.TextoMedio}
                
            />
             
        
       )
}