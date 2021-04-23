import React, { useState } from 'react'
import { View, Image } from 'react-native'
import { Text, Button} from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'

export default props =>  {
    const [txt, setTexto] = useState(props)
return(
        
    <View >
    <Image source =  { require('../componentes/logo.png')}/>        
    
    <TextInput
                placeholder= {'Digite seu E-mail'}
                selectionColorn="gray"
                onChangeText={value => setTexto(txt)}
                
                
            />
    <TextInput
                placeholder= {'Digite sua senha ' }
                selectionColorn="gray"
                onChangeText={value => setTexto(txt)}
                
                
            />
    <Text>
      
    </Text>
    {/*<Button titulo='Entrar'   />*/}
  </View> 
        

       )
}