import * as React from 'react';
import { StyleSheet } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Alert } from 'react-native';
import { useEffect } from 'react';















export default function LibraryScreen() {


//   const getPermission= async ()=>{
//     const permission =await MediaLibrary.getPermissionsAsync()
//     if (permission.granted){
//       getAudioFiles();
//     }
//     if(!permission.granted && permission.canAskAgain){
//       const {status,canAskAgain} = await MediaLibrary.requestPermissionsAsync()
//       if (status == 'denied' && canAskAgain){
//         permissionAlert();
//    } 
//    if(status=='granted'){
//   getAudioFiles();
//    }
//    if (status == 'denied' && !canAskAgain){
  
//    }
//    }
//   } 
   
//    const permissionAlert=()=>{
//      Alert.alert("Permission Required", "This App Neeeds to Read Audio From Device",
//      [{text:"Allow",
//      onPress:()=> getPermission()
//    },
   
//    {
//    text:"Deny",
//    onPress:()=> permissionAlert()
//   }])
//   }
  
//   const getAudioFiles= async()=>{
//   const media=await MediaLibrary.getAssetsAsync({
//      mediaType:'audio',
  
//    });
    
  
 
//  useEffect(() =>{
//   getPermission();
// },[]);











  return (
    <View style={styles.container}>
      <Text style={styles.title}>Library</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
