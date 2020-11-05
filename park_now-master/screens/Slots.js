import React, { useState } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,Modal, Button,Alert} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { IconButton, Colors } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import ReviewForm from './FormikReview';



const Slots=({navigation})=>{
 
   const [modalOpen, setModaleOpen] = useState(false);
   const [priceModalOpen, setPriceModaleOpen] = useState(false);
   const [soltPrice, setslotPrice]=useState(0);
   

   const [SlotIdTitle,setSlotId] = useState("0");
   const[disableOk, setdisableOk] = useState(true);
    
   const[colorbtn0, setcolorbtn0]=useState("#445454");
   const[colorbtn1, setcolorbtn1]=useState("#445454");
   const[colorbtn2, setcolorbtn2]=useState("#445454");
   const[colorbtn3, setcolorbtn3]=useState("#445454");
   const[colorbtn4, setcolorbtn4]=useState("#445454");
   const[colorbtn5, setcolorbtn5]=useState("#445454");

   const[isDisabled0,setisDisabled0]=useState(false);
   const[isDisabled1,setisDisabled1]=useState(false);
   const[isDisabled2,setisDisabled2]=useState(false);
   const[isDisabled3,setisDisabled3]=useState(false);
   const[isDisabled4,setisDisabled4]=useState(false);
   const[isDisabled5,setisDisabled5]=useState(false);




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


  ];



  var rightSlots = [
    {id: "1", isAvaliable: true},
    {id: "2", isAvaliable: true},
    {id: "3", isAvaliable: true},
    {id: "4", isAvaliable: false},

    {id: "5", isAvaliable: true},
    {id: "6", isAvaliable: true},
    {id: "7", isAvaliable: true},
    {id: "8", isAvaliable: true},

    {id: "9", isAvaliable:  true},
    {id: "10", isAvaliable: true},
    {id: "11", isAvaliable: true},
    {id: "12", isAvaliable: false},
    
    {id: "13", isAvaliable: false},  
    {id: "14", isAvaliable: true},
    {id: "15", isAvaliable: true},
    {id: "16", isAvaliable: false},
    

    
    {id: "17", isAvaliable: false},  
    {id: "18", isAvaliable: true},
    {id: "19", isAvaliable: true},
    {id: "20", isAvaliable: false},
    
   
  ];


  const closeModal=()=>{
    setModaleOpen(false);
  }

  const ChnageSlotColor=()=>{
    
  }

  const confirmBook=()=>{
    Alert.alert(
        'Alert Title',
        'Confirm  choosed booking duration ',
        [
       
          {
            text: 'Cancel',
            style: 'cancel'
          },
          { text: 'OK', onPress: () =>{ 
           // setTotalDuration(0);
           setPriceModaleOpen(false);
           setModaleOpen(true);
            } }
        ],
        { cancelable: false }
      );
  }

   const CancleBook=()=>{

    setcolorbtn0("#445454");
    setcolorbtn1("#445454");
    setcolorbtn2("#445454");
    setcolorbtn3("#445454");
    setcolorbtn4("#445454");
    setcolorbtn5("#445454");
  
    setdisableOk(true);
   setisDisabled0(false);     
    setisDisabled1(false);
    setisDisabled2(false);
    setisDisabled3(false);
    setisDisabled4(false);
    setisDisabled5(false);
   }

    const bookSlot=(id,price)=>{
        
        
        setslotPrice(price); 
        if(id == 0){
            setcolorbtn0("green");
            setdisableOk(false);
            setisDisabled1(true);
            setisDisabled2(true);
            setisDisabled3(true);
            setisDisabled4(true);
            setisDisabled5(true);

          
        }
        else if(id == 1){
            setcolorbtn1("green");
            setdisableOk(false);
            setisDisabled0(true);
            setisDisabled2(true);
            setisDisabled3(true);
            setisDisabled4(true);
            setisDisabled5(true);

        }

        else if(id == 2){
            setdisableOk(false);
            setcolorbtn2("green");
            setisDisabled0(true);
            setisDisabled1(true);
            setisDisabled3(true);
            setisDisabled4(true);
            setisDisabled5(true);

        }

        else if(id == 3){
            setcolorbtn3("green");
            setdisableOk(false);
            setisDisabled0(true);
            setisDisabled1(true);
            setisDisabled2(true);
            setisDisabled4(true);
            setisDisabled5(true);

        }

        else if(id == 4){
            setcolorbtn4("green");
            setdisableOk(false);
            setisDisabled0(true);
            setisDisabled1(true);
            setisDisabled2(true);
            setisDisabled3(true);
            setisDisabled5(true);

        }

        else if(id == 5){
            setcolorbtn5("green");
            setdisableOk(false);
            setisDisabled0(true);
            setisDisabled1(true);
            setisDisabled2(true);
            setisDisabled3(true);
            setisDisabled4(true);

        }
    }

  let Reserve=0;
  let Empty= slotinfo.length;

    return(
    <View style={styles.container}>
        < ScrollView style={styles.Boody}>
             <View  style={styles. top_bttn}>
                <Text>Entrance</Text>
             </View>
         <View style={styles.left_btn}>
            <Text style={{ transform:[{rotate:"90deg"}],paddingTop:250,
            width:300,//position:'absolute',
           marginTop:80,
            }}>
           _          Left Building         _</Text>
         </View>
         
         <View style={styles.right_btn}>
           <Text style={{ transform:[{rotate:"90deg"}],
          paddingTop:250,
          width:300,//position:'absolute',
         marginTop:80,
        }}>_            Right Building         _</Text>
         </View>
         <Modal  visible={priceModalOpen} animationType="slide">
             <ScrollView style={styles.ModalContent}>
             <IconButton 
               style={styles.modalToggle}
               icon="close"
               color="#00457C"
               size={20}
               onPress={() =>setPriceModaleOpen(false)}
           />
           <View>
               <Text style={{margin:10,marginLeft:80,fontSize:16,color:"#0b2f4d"}}>Choose booking duration</Text>
               <TouchableHighlight style={styles.priceContainer}>
                  <ScrollView>
                      <View style={{flexDirection:"row"}}>
                          <Text style={styles.PriceTxt}>30  minutes</Text>
                          <FontAwesome
                          style={{
                              paddingTop:20
                          }}
                            name="long-arrow-right"
                            color="#445454"
                            size={26}
                        />
                         <Text style={styles.PriceTxt}>{10} Ponits</Text>
                         <IconButton 
                          color={colorbtn0}  
                          icon="checkbox-multiple-marked-circle"
                          size={35}
                          disabled={isDisabled0}
                        
                          onPress={()=>{bookSlot(0,10)}}

                        />

                      </View>

                      <View style={{flexDirection:"row"}}>
                          <Text style={styles.PriceTxt}>60  minutes</Text>
                          <FontAwesome
                          style={{
                              paddingTop:20
                          }}
                            name="long-arrow-right"
                            color="#445454"
                            size={26}
                        />

                        
                         <Text style={styles.PriceTxt}>{20} Ponits</Text>

                         <IconButton 
                          color={colorbtn1}  
                          icon="checkbox-multiple-marked-circle"
                          disabled={isDisabled1}
                          size={35}
                          onPress={()=>{bookSlot(1,20)}}

                        />
                    
                      </View>

                      <View style={{flexDirection:"row"}}>
                          <Text style={styles.PriceTxt}>90  minutes</Text>
                          <FontAwesome
                          style={{
                              paddingTop:20
                          }}
                            name="long-arrow-right"
                            color="#445454"
                            size={26}
                        />

                        
                         <Text style={styles.PriceTxt}>{30} Ponits</Text>
                         <IconButton 
                          color={colorbtn2}  
                          icon="checkbox-multiple-marked-circle"
                          disabled={isDisabled2}
                          size={35}
                          onPress={()=>{bookSlot(2,30)}}

                        />
                      </View>

                      <View style={{flexDirection:"row"}}>
                          <Text style={styles.PriceTxt}>120 minutes</Text>
                          <FontAwesome
                          style={{
                              paddingTop:20
                          }}
                            name="long-arrow-right"
                            color="#445454"
                            size={26}
                        />

                        
                         <Text style={styles.PriceTxt}>{40} Ponits</Text>
                         <IconButton 
                          color={colorbtn3}  
                          icon="checkbox-multiple-marked-circle"
                          disabled={isDisabled3}
                          size={35}
                          onPress={()=>{bookSlot(3,40)}}

                        />
                      </View>
                     
                      <View style={{flexDirection:"row"}}>
                          <Text style={styles.PriceTxt}>150 minutes</Text>
                          <FontAwesome
                          style={{
                              paddingTop:20
                          }}
                            name="long-arrow-right"
                            color="#445454"
                            size={26}
                        />

                        
                         <Text style={styles.PriceTxt}>{50} Ponits</Text>
                         <IconButton 
                          color={colorbtn4}  
                          icon="checkbox-multiple-marked-circle"
                          disabled={isDisabled4}
                          size={35}
                          onPress={()=>{bookSlot(4,50)}}

                        />
                      </View>
                       

                      <View style={{flexDirection:"row"}}>
                          <Text style={styles.PriceTxt}>180 minutes</Text>
                          <FontAwesome
                          style={{
                              paddingTop:20
                          }}
                            name="long-arrow-right"
                            color="#445454"
                            size={26}
                        />

                        
                         <Text style={styles.PriceTxt}>{60} Ponits</Text>
                         <IconButton 
                          color={colorbtn5}  
                          icon="checkbox-multiple-marked-circle"
                          disabled={isDisabled5}
                          size={35}
                          onPress={()=>{bookSlot(5,20)}}

                        />
                      </View>

                      <View>
                         

                      </View>
                  </ScrollView>
                     
               </TouchableHighlight>
               <View style={{marginBottom:10,marginTop:10,marginLeft:50,marginRight:50}}>
               <Button title="cancle" color="#00457C"
               onPress={()=>{CancleBook();  setslotPrice(0); }}/>
               </View>
                <View style={{marginLeft:50,marginRight:50}}>
                <Button title="ok"  color="#00457C"  disabled={disableOk}
                onPress={()=>{confirmBook();CancleBook()}}
                />
                </View>
           </View>

        </ScrollView>
        </Modal>

         <Modal  visible={modalOpen} animationType="slide"
         onRequestClose={() => closeModal()}
                       >
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
                    <Text style={{fontSize:22,color:"#07243b",fontFamily:'Courgette-Regular'}}>Price: {soltPrice} </Text>
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
               width:45,             
               height:45,
            }}>
            <IconButton 
               disabled={ !item.isAvaliable}
               color={item.isAvaliable ?  "#2f5d82" : "#5e0707"}
               icon="slot-machine"
               size={42}
               onPress={() =>{setPriceModaleOpen(true);setSlotId(item.id)}}

            />
            </View>
           )
            }
          </View>
          
         
         <View style={styles.rightCarView}>
         { 
            rightSlots.map(item=>
            <View  key={item.id}  style={{
               width:45,             
               height:45,
            }}>
            <IconButton 
               disabled={ !item.isAvaliable}
               color={item.isAvaliable ?    "#2f5d82" : "#5e0707"}
               icon="slot-machine"
               size={42}
               onPress={() =>{setPriceModaleOpen(true);setSlotId(item.id)}}

            />
            </View>
           )
            }
          </View>
              
          <View style={styles.middle_btn}>
            <Text style={{ transform:[{rotate:"90deg"}],
              paddingTop:250,
              width:300,//position:'absolute',
             marginTop:80,}}>_           Center Street         _</Text>
         </View>  
        </ ScrollView>

      <View style={styles.Footer}>
        <Text style={styles.text}>Empty: {Empty=(slotinfo.filter(item=>item.isAvaliable).length+rightSlots.filter(item=>item.isAvaliable).length)} </Text>     
        
        <Text style={styles.text}> Reserve: {Reserve= (slotinfo.length+rightSlots.length)-Empty} </Text> 
      </View>
    </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        
    },
    Boody:{
        flex:1,
        backgroundColor:"white",
        
          
      },
    Footer:{
        flex:0.1,
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
       flex:1,
       position:'absolute',
         flexWrap:"wrap",
         flexDirection:'row',
         marginBottom:20,
         marginLeft:42,
         marginRight:200,
        marginTop:60,

     },
     rightCarView:{
      //  position:'absolute',
         flexWrap:"wrap",
         flexDirection:'row',
       //  marginTop:60,
         marginBottom:20,
         marginLeft:200,
         marginRight:70,
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
     
     priceContainer:{
        borderWidth:2,
        borderColor:"#00457C",
        backgroundColor:"#fff",
        marginLeft:20,
        marginRight:20,
        paddingHorizontal:20,
        paddingTop:10,
        height:390,
        marginBottom:10,
     },
     PriceTxt:{
        fontFamily:'Courgette-Regular',
       paddingLeft:3,
        paddingRight:5,
        marginRight:5,
        color:"#445454",
        fontSize:15,
        paddingTop:20
     },

     left_btn:{
       position:'absolute',
       backgroundColor:"#678691",
       opacity:0.4,
       height:440,
    //   paddingVertical:200,
       width:50,
       marginTop:70,

        
      
     },

     right_btn:{
      position:'absolute',
      backgroundColor:"#678691",
      opacity:0.4,
      height:440,

     // paddingVertical:200,
      width:50,
      marginTop:70,
      marginLeft:310,
 
     },
     middle_btn:{
      position:'absolute',
      backgroundColor:"#678691",
      opacity:0.4,
      height:440,

     // paddingVertical:200,
      width:50,
      marginTop:70,
      marginLeft:155,
     },

  
});
export default Slots;
