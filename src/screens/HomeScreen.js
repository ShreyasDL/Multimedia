import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const HomeScreen = () => {
    
    return (
            <View>
            <View style = { styles.view }>
                <TouchableOpacity 
                    style = { s.touch }
                    ></TouchableOpacity>
                <TouchableOpacity style = {styles.touch}></TouchableOpacity>
            </View>
            <View style = { styles.view }>
                <TouchableOpacity style = {styles.touch}></TouchableOpacity>
                <TouchableOpacity style = {styles.touch}></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view :{
        flexDirection : 'row'
    },
    touch : {
        borderColor : 'black',
        borderWidth : 1,
        height : 100,
        width : 100
    },
    touchPress : {
        borderColor : 'black',
        borderWidth : 1,
        height : 100,
        width : 100
    }
})

export default HomeScreen