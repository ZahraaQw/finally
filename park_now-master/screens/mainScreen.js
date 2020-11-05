import React, { useState } from 'react';
import {Text,View,StyleSheet, Button,Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Title} from "react-native-paper";

import Home from "./home";
import ProfilScreen from "./ProfilScreen";
import SettingScreen from "./SettingScreen";
import PaymentScreen from "./PaymentScreen";


const HomeStack = createStackNavigator();

 function goProfile(){
   console.log("goprofile");
return Selected;
}

function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator
    screenOptions ={{
      headerStyle:{
        backgroundColor:"#00457C",   
       // borderBottomRightRadius:80,
        height:55,
      },
      
      headerTitleAlign: 'center',
      headerShown: true,
      headerTintColor:"#99d4e9",
      headerTitleStyle:{
         // fontWeight:"bold"
      },
     


   }}
 
    
    >
      <HomeStack.Screen name="Home" component={Home}   options={{
    headerLeft: () => (
      <View style={{marginLeft: 20}}>
        <Icon.Button
          name="navicon"
          size={25}
          color='#99d4e9'
          backgroundColor="#00457C"
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
    ),}}/>
    </HomeStack.Navigator>
  );
}
const SettingsStack = createStackNavigator();

function SettingsStackScreen({navigation}) {
  return (
    <SettingsStack.Navigator
    screenOptions ={{
      headerStyle:{
        backgroundColor:"#00457C",   
      //  borderBottomRightRadius:80,
        height:55,
      },
      
      headerTitleAlign: 'center',
      headerShown: true,
      headerTintColor:"#99d4e9",
      headerTitleStyle:{
         // fontWeight:"bold"
      }

   }}
    >
      <SettingsStack.Screen name="MyBooking" component={SettingScreen} options={{
    headerLeft: () => (
      <View style={{marginLeft: 20}}>
        <Icon.Button
          name="navicon"
          size={25}
          color='#99d4e9'
          backgroundColor="#00457C"
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
    ),}} />
     
    </SettingsStack.Navigator>
  );
}



const ProfilStackScreen = createStackNavigator();
//const EditProfilStackScreen = createStackNavigator();

function ProfStackScreen({navigation,props}) {
  const [Selected,setSelected]=useState(false);

  onSelect = () => {
    //Selected=data;
   // goProfile();
   setSelected(true);
  };
  SelectedDone=()=>{
    return Selected;
  }
  return (
    <ProfilStackScreen.Navigator 
    screenOptions ={{
      headerStyle:{
        backgroundColor:"#00457C",   
        //borderBottomRightRadius:80,
        height:55, 
      },
      
      headerTitleAlign: 'center',
      headerShown: true,
      headerTintColor:"#99d4e9",
      headerTitleStyle:{
         // fontWeight:"bold"
      },
     

   }}
    >

      <ProfilStackScreen.Screen name="My Profile" //component={ProfilScreen} 
       
      options={{
    headerLeft: () => (
      <View style={{marginLeft: 20}}>
        <Icon.Button
          name="navicon"
          size={25}
          color='#99d4e9'
          backgroundColor="#00457C"
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
    ),
  
    headerRight: () => (
      <View style={{marginLeft: 30}}>
        <Icon.Button
          name="edit"
          size={25}
          color='#99d4e9'
          backgroundColor="#00457C"
          onPress={() =>{setSelected(false);navigation.navigate("EditProfile",{onSelect:onSelect });
         
        }}
        />
      </View>
      
    ), 
  
  }} 
    
 
    >
  {(props) => <ProfilScreen  {...props}   SelectedDone={SelectedDone} />}   

    </ProfilStackScreen.Screen>
    </ProfilStackScreen.Navigator>
  
       
    
  );
}

const PaymentStack = createStackNavigator();

function PaymentStackScreen({navigation}) {
  return (
    <PaymentStack.Navigator
    screenOptions ={{
      headerStyle:{
        backgroundColor:"#00457C",   
      //  borderBottomRightRadius:80,
        height:55,
      },
      
      headerTitleAlign: 'center',
      headerShown: true,
      headerTintColor:"#99d4e9",
      headerTitleStyle:{
         // fontWeight:"bold"
      }

   }}
    >
   <PaymentStack.Screen name="Payment" component={PaymentScreen}  options={{
    headerLeft: () => (
      <View style={{marginLeft: 20}}>
        <Icon.Button
         name="navicon"
          size={25}
          color='#99d4e9'
          backgroundColor="#00457C"
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
    ),}} />
     
    </PaymentStack.Navigator>
  );
}


const Tab = createMaterialBottomTabNavigator();

export default function MainScreen({navigation}) {
  return (
   
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
       style={{
        marginBottom:0.1,  
       
      }} 
      
    
      >
         <Tab.Screen
            name="Home"
            component={HomeStackScreen}
           
            options={{
                tabBarLabel: 'Home',
                tabBarColor:"#00457C",
                tabBarIcon: ({ color }) => (
                <Icon name="home" color={color} size={26} />
                ),
            
            }}
            />
        
    
 
         <Tab.Screen
            name="Profile"
            component={ProfStackScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor:"#00457C",
                tabBarIcon: ({ color }) => (
                <Icon name="user" color={color} size={26} />
                ),
            }}
            />
         <Tab.Screen
            name="Payment"
            component={PaymentStackScreen}
            options={{
                tabBarLabel: 'Payment',
                tabBarColor:"#00457C",
                tabBarIcon: ({ color }) => (
                    <Icon name="credit-card" color={color} size={23} />
                    ),
               
            }}
            />
        <Tab.Screen
            name="MyBooking"
            component={SettingsStackScreen}
            options={{
                tabBarLabel: 'MyBooking',
                tabBarColor:"#00457C",
                
                tabBarIcon: ({ color }) => (
                    <Icon name="clock-o" color={color} size={28} />
                    ),
               
            }}
            />
     </Tab.Navigator>

  );
}