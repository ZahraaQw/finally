import React, { useState } from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';



const EnterenceQr=({navigation})=>{

     const[qrdata,setQrdata]=useState("1234567");
    return(
    <View  style={ styles.container }>
          <View style={{flexDirection:'row'}}>
          <View  style={styles.top_bttn}>
                <Text style={styles.txt1Stl}>Street Name</Text>
                <Text style={styles.txt2Stl}>14</Text>
          </View>

           <TouchableOpacity style={styles.btn_stl}>
               <Text style={{color:"white",fontSize:15}}>Cancle this Booking</Text>
           </TouchableOpacity>
           </View>

           <Text style={styles.txt3Stl}>Scan the code when enter the gate </Text>
           <View style={styles.QrView}>
           <QRCode
                value={qrdata+"entercode"}
                color="#011424"
                backgroundColor='white'
                size={200}       
                />
  
           </View>
    </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
         
    },
    top_bttn:{
        backgroundColor:"#00457C",
         marginTop:10,
        // marginLeft:5,
         marginRight:5,
         marginBottom:10,
         height:130,
         width:160,
     },

     txt1Stl:{
         paddingLeft:35,
         paddingTop:20,
        color:"white",

     },
     txt2Stl:{
      color:"white",
      fontSize:40,
      paddingLeft:55,
      paddingTop:10   
     },

     btn_stl:{
        backgroundColor:"#8cb9de",
        marginTop:50,
        height:60,
        justifyContent:'center',
        padding:16
        
     },
     txt3Stl:{
         color:"#677d91",
         marginLeft:40,
        // marginTop:5,
         fontSize:17
     },
     QrView:{
         marginLeft:85,
         marginTop:60
     }

});
export  default EnterenceQr;