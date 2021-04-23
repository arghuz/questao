import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import { Ionicons } from '@expo/vector-icons'
import TelaD from '../views/TelaD'


const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator 
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          switch(route.name){
              case 'TelaA':
                iconName = focused
                    ? 'flag'
                    : 'flag-outline'
                break;
                case 'TelaB':
                iconName = focused
                    ? 'fast-food'
                    : 'fast-food-outline'
                break;
                case 'TelaC':
                iconName = focused
                    ? 'key'
                    : 'key-outline'
                break;
          }
            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            );
         
        },
      })}
        tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'orange',
        showLabel: false
        //labelStyle: { fontSize: 30 }
    }} initialRouteName = "TelaB">
        <Tab.Screen name = "TelaA" component={TelaA} options={{}}/>
        <Tab.Screen name = "TelaB" component={TelaB}/>
        <Tab.Screen name = "TelaC" component={TelaC}/>
    </Tab.Navigator>
)