import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfileScreen from './EditProfileScreen';
import FindMyPosition from './FindMyPosition';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const FindStack = createStackNavigator();
const FindPosition=({navigation})=>{
    return(
      
        <FindStack.Navigator
        screenOptions ={{
          headerStyle:{
            backgroundColor:"#00457C",   
            height:55,
          },
          
          headerTitleAlign: 'center',
          headerShown: true,
          headerTintColor:"#ebf7fc",
          headerTitleStyle:{
          },
         
  
       }}
     
        
        >
          <FindStack.Screen name="Find My Position" component={FindMyPosition}   options={{
        headerLeft: () => (
          <View style={{marginLeft: 20}}>
            <Icon.Button
              name="chevron-left"
              size={25}
              color='#ebf7fc'
              backgroundColor="#00457C"
              onPress={() => navigation.goBack()}
            />
          </View>
        ),}}/>
        </FindStack.Navigator>
      );
}

export default FindPosition;