import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

function Content(props) {

    const {contact} = props

    return (
        <View style={{marginBottom:5}}>
            <Text style={styles.name}>{contact.name}</Text>
            <View style={{display:'flex',flexDirection:'row'}}>
                <Text style={styles.numberPhone}>{contact.numberPhone}</Text>
                {contact.device ? <Text style={{marginLeft:10,opacity:0.3}}>{contact.device}</Text> : undefined}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    name: {
        fontWeight:'700',
        paddingLeft:1,
        fontSize:18
    },
    numberPhone: {
        paddingLeft:5,
        fontWeight:"500",
        fontSize:15,
    }
})

export default Content;