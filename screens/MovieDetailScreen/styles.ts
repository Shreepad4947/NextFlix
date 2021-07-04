import { StyleSheet } from "react-native";


const styles=StyleSheet.create({
image:{
    width:'100%',
    aspectRatio:16/9,
    resizeMode:'cover',
},
title:{
    fontSize:24,
    fontWeight:'bold',
},
match:{
color:'#00aa00',
fontWeight:'bold',
marginRight:5,
},
year:{
color:'#757575',
},
ageContainer:{
    backgroundColor:'#e6e229',

justifyContent:'center',
alignContent:'center',
borderRadius:2,
paddingHorizontal:3,
marginRight:5,
height:25


},
age:{
color:'black',
fontWeight:'bold'
},

playButton:{
backgroundColor:'black',
justifyContent:'center',
alignItems:'center',
padding:5,
borderRadius:3,
marginVertical:3,
},

playbuttontext:{
color:'white',
fontSize:18,
fontWeight:'bold'
},

DownloadButton:{
    backgroundColor:'#2b2b2b',
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    borderRadius:3,
    marginVertical:3
    
}
,downloadbuttontext:{
    color:'white',
    fontSize:18,
    fontWeight:'bold'
}
})

export default styles;