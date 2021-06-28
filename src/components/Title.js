import React from 'react'
import {StyleSheet, Text} from 'react-native'

function Title(props) {

    const { title } = props

    return (
        <Text style={styles.title}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    title:{
        backgroundColor:'#333',
        color:'#fff',
        paddingLeft:2
    }
})

export default Title