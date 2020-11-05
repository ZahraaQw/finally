import React, { useState } from 'react';
import {StyleSheet,Button,TextInput,View,Text,TouchableOpacity,ScrollView,Modal} from 'react-native';
import {Formik} from 'formik';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
//import { IconButton, Colors } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';

export default ReviewForm=({navigation})=>{
  const [ModaleOpen, setModaleOpen] = useState(false);
   const [qrdata, setQRdata] = useState('');
  [isValidNumber, setisValidNumber]= useState(true);
  [isValidPass, setisValidPass]= useState(true);
  [isQrdisadled, setisQrdisadled]= useState(true);
  
 const validate=(text,type)=>{
    num=/[0-9]+$/
    numP =/^[0-9a-zA-Z]+$/
    if(type=='Number'){
    if((num.test(text)) && (text.trim().length ==7))
    {
  
        setisValidNumber(true);
       setisQrdisadled(false);
        setQRdata(text);
 
    }
    else{

        setisValidNumber(false);
        setisQrdisadled(true);

    }
     

   }else if(type=='password'){
    if((numP.test(text)) && (text.trim().length >7))
    {
  
        setisValidPass(true);
        setisQrdisadled(false);

 
    }
    else{

        setisValidPass(false);
        setisQrdisadled(true);

    }

   }
}
    
    return(
        <ScrollView>
            <Modal  visible={ModaleOpen} animationType="fade" >
                <View>

                <View style={styles.qrContainer}>
                    <Text style={styles.txtqr}>Enterance QR code</Text>
                <QRCode
                value={qrdata}
                color="#011424"
                backgroundColor='white'
                size={180}       
                />
                </View>
                <View style={[styles.qrContainer,{marginTop:10,paddingBottom:28,marginBottom:13}]}>
                    <Text style={styles.txtqr}>Exit QR code</Text>
                <QRCode
                value={qrdata+"exitcode"}
                color="#011424"
                backgroundColor='white'
                size={180}       
                />
  
                </View>

                <TouchableOpacity 
                 
                 onPress={() =>{setModaleOpen(false);
                }}
                  >
                <View style={styles.canslbuttStl}>
                    <Text style={styles.txtStl}>OK  </Text>
                    <FontAwesome
                        name="check"
                        color="#99d4e9"
                        size={20}
                    />
                    </View>
                    </TouchableOpacity>
                </View>
            
                </Modal>

            <Formik
            initialValues={{Carpalette:'',Passwrod:''}}
            onSubmit={(values)=>{
               
            }}
            >
                {
                (props)=>(
                    <ScrollView>
            
                        <TextInput
                    
                        style={styles.inputStl}
                        placeholder='Car palette number'
                       // onChangeText={props.handleChange('Carpalette')}
                        //value={props.values.Carpalette}
                        keyboardType='numeric'
                        onChangeText={(text)=>{validate(text,'Number')}}
                        
                        />
                                 {isValidNumber ? null : 
                      <View> 
                        <Text style={styles.ErrMsg}>Car palette number must be 7 long  . </Text>
                        </View>
                 }
                        <TextInput
                         secureTextEntry
                        style={styles.inputStl}
                        placeholder='********'
                   //     onChangeText={props.handleChange('password')}
                        value={props.values.password}
                        onChangeText={()=>{(text)=>validate(text,'password');props.handleChange('password')}}
                        
                        />
                          {isValidPass ? null : 
                      <View> 
                        <Text style={styles.ErrMsg}>Password must be 8 long  . </Text>
                        </View>
                 }
                        <TouchableOpacity 
                        disabled={isQrdisadled}
                        style={{ opacity: isQrdisadled? 0.7 : 1 }}
                        onPress={()=>{
                        props.handleSubmit;
                        setModaleOpen(true);//setQRdata(props.values.Carpalette);
                        
                      
                        }}>
                        <View style={styles.buttStl}>
                           <Text style={styles.txtStl}>Book and Gerate QR   </Text>
                           <FontAwesome
                                name="qrcode"
                                color="#5b6f80"
                                size={30}
                            />
                          </View>

                          </TouchableOpacity>

                          </ScrollView>

                       
                

                    
                )
                }

            </Formik>
     
        </ScrollView>
    );
}

const styles = StyleSheet.create({

inputStl:{
  borderWidth:1.4,
  borderColor:"#00457C",
  
  padding:10,
  fontSize:14,
  borderRadius:6,
  marginLeft:30,
  marginRight:30,
  marginBottom:10,
},

buttStl:{
    flexDirection:'row',
   backgroundColor:'#00457C',
   paddingVertical:20,
   marginTop:15,
   marginLeft:31,
   marginRight:31,
  // marginBottom:40,
   justifyContent:'center',
   alignItems:'center',
   //opacity:0.6
},
txtStl:{
    color:'#99d4e9',
    fontSize:16,
    fontWeight:"800"
},
canslbuttStl:{
    flexDirection:'row',
    backgroundColor:'#455f75',
    paddingVertical:10,
    marginTop:12,
    marginLeft:100,
    marginRight:100,
    borderRadius:70,
   // marginBottom:40,
    justifyContent:'center',
    alignItems:'center',
},
modalToggle:{
    //marginTop:20,
    //marginBottom:20,
    backgroundColor:'#f2f2f2',    
    padding:2,
    alignSelf:'center',

     
},
txtqr:{
  marginBottom:10,
  color:"#00457C"
},
qrContainer:{
    borderWidth:1.4,
    borderColor:"#00457C",
    borderRadius:25,
    marginLeft:65,
    marginRight:65,
    marginTop:35,
    paddingBottom:20,
    alignItems:'center',
   
},
ErrMsg:{
    color:"#c90c16",
    fontSize:10,
    paddingLeft:30,

}

})