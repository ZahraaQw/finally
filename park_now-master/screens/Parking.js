import React, { useState } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,Modal} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { IconButton, Colors } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import ReviewForm from './FormikReview';



const Parking=({navigation})=>{
 
   const [modalOpen, setModaleOpen] = useState(false);
   const [SlotIdTitle,setSlotId] = useState("0");

 
   var slotinfo = [
    {id: "1", isAvaliable: true},
    {id: "2", isAvaliable: true},
    {id: "3", isAvaliable: false},
    {id: "4", isAvaliable: false},
    
    {id: "5", isAvaliable: true},
    {id: "6", isAvaliable: true},
    {id: "7", isAvaliable: true},
    {id: "8", isAvaliable: false},

    {id: "9", isAvaliable:  false},
    {id: "10", isAvaliable: true},
    {id: "11", isAvaliable: false},
    {id: "12", isAvaliable: false},
    
    {id: "13", isAvaliable: false},  
    {id: "14", isAvaliable: true},
    {id: "15", isAvaliable: false},
    {id: "16", isAvaliable: false},
    
    
    {id: "17", isAvaliable: false},
    {id: "18", isAvaliable: true},
    {id: "19", isAvaliable: true},
    {id: "20", isAvaliable: false},

    
    
    {id: "21", isAvaliable: false},
    {id: "22", isAvaliable: true},
    {id: "23", isAvaliable: true},
    {id: "24", isAvaliable: true},
 
    {id: "25", isAvaliable: true},
    {id: "26", isAvaliable: true},
    {id: "27", isAvaliable: true},
    {id: "28", isAvaliable: false},


    {id: "29", isAvaliable: true},
    {id: "30", isAvaliable: true},
    {id: "31", isAvaliable: true},
    {id: "32", isAvaliable: true},

    {id: "33", isAvaliable: true},
    {id: "34", isAvaliable: true},
    {id: "35", isAvaliable: true},
    {id: "36", isAvaliable: true},

  ];
  let Reserve=0;
  let Empty= slotinfo.length;

    return(
    <View style={styles.container}>
        < ScrollView style={styles.Boody}>
         <TouchableOpacity>
             <View  style={styles. top_bttn}>
                <Text>Entrance</Text>
             </View>
         </TouchableOpacity>

         <Modal  visible={modalOpen} animationType="slide">
             <ScrollView style={styles.ModalContent}>
             <IconButton 
               style={styles.modalToggle}
               icon="close"
               color="#00457C"
               size={20}
               onPress={() =>setModaleOpen(false)}
           />
         
           <TouchableOpacity>
             <View  style={styles.slotContaier}>
                <Text style={{fontSize:35,color:"#00457C",fontFamily:'Courgette-Regular'}}>Slot</Text>
                <Text style={{fontSize:25,color:"#00457C",fontWeight:'bold'}}>{SlotIdTitle}</Text>
                <View style={{flexDirection:'row'}}>  
                    <Text style={{fontSize:22,color:"#07243b",fontFamily:'Courgette-Regular'}}>Price: {5} </Text>
                <FontAwesome
                name="money"
                 color="gold"
                 size={30}
              /></View>

                </View>
         </TouchableOpacity>
               <ReviewForm />
               </ScrollView>
               </Modal>
         <View style={styles.car_view}>
         { 
             slotinfo.map(item=>
            <View  key={item.id}  style={{
            
               width:50,
               height:62
               

            }}>

            <IconButton 
               disabled={ !item.isAvaliable}
               color={item.isAvaliable ?  "#587e8a" : "#8f090d"}
               icon="car"
               size={50}
               onPress={() =>{setModaleOpen(true);setSlotId(item.id)}}

            />

            </View>
           )
            }

        
            </View>
     
     

        </ ScrollView>

      <View style={styles.Footer}>
        <Text style={styles.text}>Empty: {Empty=(slotinfo.filter(item=>item.isAvaliable).length)} </Text>     
        
        <Text style={styles.text}> Reserve: {Reserve= slotinfo.length-Empty} </Text> 
      </View>
    </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Boody:{
        flex:0.5,
        backgroundColor:"white",
        
          
      },
    Footer:{
        flex:0.12,
        backgroundColor:"#00457C",
        flexDirection:'row',
        paddingLeft:25,
        

    },
    text:{
        color:"#99d4e9",
        fontSize:13,
        paddingLeft:25,
        fontWeight:"bold",
        paddingTop:16,

    },
    txt_l:{
        flexDirection:"column"
    },
    top_bttn:{
       // backgroundColor:"#6f1282",
       backgroundColor:"#678691",
       opacity:0.4,
        paddingVertical:12,
        marginTop:5,
        marginLeft:65,
        marginRight:65,
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center'
    },
    view_btns:{
        flexDirection:'column',

    },
     car_view:{
        // flex:1,
         flexWrap:"wrap",
         flexDirection:'row',
         marginLeft:12

     },

     modalToggle:{
         marginTop:20,
         backgroundColor:'#99d4e9',    
         padding:2,
         alignSelf:'center'
     },
     ModalContent:{
         flex:1,
         backgroundColor:"#ebf6fa",
     },
     slotContaier:{
        //backgroundColor:"gray",
         paddingVertical:25,
         marginTop:35,
         marginLeft:100,
         marginRight:100,
         marginBottom:40,
         justifyContent:'center',
         alignItems:'center',
         borderRadius:40,
         borderWidth:4,
         borderColor:"white",
     },


});
export default Parking;
