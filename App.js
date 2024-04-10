import React from 'react'
import { View, StyleSheet } from 'react-native'


import ContadorV2 from './components/contador/contadorV2'


export default () => (
    <View style={style.App}>
      <ContadorV2 />
    </View>
)

const style = StyleSheet.create({
    App: {
        // flex 1 indica que a area do app pode ocupar a area inteira
        flexGrow: 1,
        // Alinhar no meio verticalmente
        justifyContent: "center",
        // Alinhar no centro horizontalmente
        alignItems: "center",
        // AAplica espaçamento em todas as direções
        padding: 20
    }
})
