import React from 'react';
import {Text,View,StyleSheet} from 'react-native';


const EnterQr=({navigation})=>{
    return(
    <View  style={ styles.container }>
        <Text>Enter Qr Page </Text>
    </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        textAlign: "center",
      
    }

});
export  default EnterQr;