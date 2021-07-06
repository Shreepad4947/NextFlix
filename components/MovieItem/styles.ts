import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
container:{
flex:1,
paddingTop:40,

},
image:{
    width:100,
    height:170,
    resizeMode:'cover',
    borderRadius:8,
    margin:5,
},
title:{
    fontSize:20,
    fontWeight:'bold',
    color:'black'
}
});

export default styles;