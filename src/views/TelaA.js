import React, { useState } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Text, Button} from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'


export default  props =>  {
    console.warn({props})
    const [txt, setTexto] = useState(props)
return(
    <Stack.Navigator initialRouteName="TelaA">
    <Stack.Screen name="TelaA" >
        {props => (
           
                <TelaA/>
            
        )} 
    <View style={style.BackGround} >
    <Image source =  { require('../componentes/logo.png')}/>        
    
    <TextInput
                placeholder= {'Digite seu E-mail'}
                selectionColorn="gray"
                onChangeText={value => setTexto(txt)}
                style={style.TextoMedio}
                
            />
    <TextInput
                placeholder= {'Digite sua senha ' }
                selectionColorn="gray"
                onChangeText={value => setTexto(txt)}
                style={style.TextoMedio}
                
            />
    <Text>
      
    </Text>
    <Button titulo='Entrar'
        //onPress={ props.navigation.push('TelaB') }
    />
  </View> 
        
  </Stack.Screen>


</Stack.Navigator>
       )
}

const style = StyleSheet.create({
    TextoMedio: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        textAlign: "justify",
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 15        
      },
      TextoGrande: {
        fontSize: 50,
        fontWeight: '600',
        color: 'black',
        textAlign: "center",
        borderBottomColor: "gray",
        padding: 20
      },
      BackGround: {
        position: "absolute",
        flexGrow: 1,
        width:400,
        height: 800,
        alignSelf: "center",
        backgroundColor:"#daebfd" ,
        padding: 100,
      },
      Button: {
        position: "absolute",
        flexGrow: 1,
        padding: 100,
        color: 'gray',
        borderRadius: 15 
      },
      Imagens: {
        position: 'absolute',
        justifyContent: 'center',
        alignContent: 'center',        
        padding: 10,
        borderRadius: 15
      }
})