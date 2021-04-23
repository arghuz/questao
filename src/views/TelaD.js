import React from 'react'
import { Button, View } from 'react-native'
import { Text } from 'react-native-elements'


export default props => {

    return (
        <View style={{flex:1, paddingTop:30}}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Button
                    title='Abrir'
                    color='purple'
                    onPress={()=> {
                        props.navigation.openDrawer()
                        setTimeout(() => {
                            props.navigation.closeDrawer()
                            setInterval(() => {
                                props.navigation.toggleDrawer()
                            },10000)
                        }, 3000)
                    }}/>
            </View>
            <View style={{flex:1}}>
            <Text>
                Tela d - 
            </Text>
            </View>
            
        </View>
        
       )
}