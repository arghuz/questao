import React from 'react'
import { Text } from 'react-native-elements'



export default props => {
    const r = props.route 
    const numero = r && r.params && r.params.numero 
    ? props.route.params.numero: 0
    return (
        <Text>
            Tela C - {numero}
        </Text>
       )
}