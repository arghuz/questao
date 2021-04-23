import React, { useContext } from 'react'
import { Alert, FlatList, View } from 'react-native'
import { Avatar , ListItem,  Icon, Button } from 'react-native-elements'
import Botao from '../componentes/botao'
import UsersContext from '../context/UsersContext'
import users from '../data/users'


export default props => {

    const {state} = useContext(UsersContext)

        function getUserItem({ item: user }) {
            return(
                <ListItem
               
                    key={user.id}
                    bottomDivider
                    onPress={() => props.navigation.navigate('TelaC')}
                    
                >
                   
                   <ListItem.Content>
                   <View style={{justifyContent:'flex-start'}}>
                       
                        <ListItem.Title>{user.Pergunta}</ListItem.Title>
                        <View>
                        <ListItem.Subtitle>{ <Botao interno={'user.A'}
                        />
                        }
              </ListItem.Subtitle>
                        </View>
                        <View>
                        <ListItem.Subtitle>B) {user.B}</ListItem.Subtitle>
                        </View>
                        <View>
                        <ListItem.Subtitle>C) {user.C}</ListItem.Subtitle>
                        </View>
                        
                       
                        
                    </View>                   
                    </ListItem.Content>                  
                </ListItem>
            ) 
        }

       return (
           <View>
            <FlatList
            keyExtractor={user => user.id.toString()}
            data={users}
            renderItem={getUserItem}
            />

           </View>
        
       )
}