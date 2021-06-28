import React, { useRef, useState } from 'react'
import {Animated,StyleSheet, Text,View, Pressable,Dimensions,TextInput} from 'react-native'

function Header(props) {

    const [clickSearch,setClickSearch] = useState(false)
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000
      }).start();
    };

    return (
        <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
            <Text style={styles.header}>
                Danh Bạ
            </Text>
            <Pressable style={styles.pressable} onPressOut={() => setClickSearch(!clickSearch)}>
                <Text style={{color:"#fff"}}>Tìm</Text>
            </Pressable>
            {clickSearch ? <TextInput style={{paddingLeft:10,fontSize:16}} placeholder="Enter name or number phone..."/> : undefined }
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize:24,
        textAlign: 'center',
        paddingVertical:10,
        fontWeight:"700",
        width:Dimensions.get('window').width*0.9
    },
    pressable: {
        marginRight: 10,
        backgroundColor:'blue',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:30,
        borderRadius:5
    }
})

export default Header