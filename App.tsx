import React, { useEffect } from 'react'
import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native'
import messaging from '@react-native-firebase/messaging';

const App = () => {

  //* get notification permision
  useEffect(()=>{
    const requestUserPermission = async () => {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
     const authStatus = await messaging().requestPermission();
     const enabled =
       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

     if (enabled) {
       console.log('Authorization status:', authStatus);
       const token = await messaging().getToken();
       console.log('FCM token:', token);
     }
   };

   requestUserPermission();
   },[])

  return (
    <View>
      <Text>Hello world !</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})