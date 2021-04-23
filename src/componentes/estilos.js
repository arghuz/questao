import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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
