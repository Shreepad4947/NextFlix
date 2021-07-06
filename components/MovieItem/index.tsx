import React from "react";
import { Pressable } from "react-native";
import { View,Text ,Image} from "react-native";
import {useNavigation} from '@react-navigation/native'
import { Category,Movie } from '../../src/models';
import styles from './styles'
import { useEffect } from "react";
import { useState } from "react";
import {Storage}from 'aws-amplify'
// import { Movie } from "../../src/models";


const MovieItem=({movie}:{movie:Movie})=>{
    const navigation = useNavigation();
    const [imageurl,setImageurl]=useState('');

    const onMoviePress=()=>{
        navigation.navigate('MovieDetailScreen', {id:movie.id})
       }

useEffect(()=>{
if(movie.poster.startsWith('http')){
    setImageurl(movie.poster);
    return;
}

    Storage.get(movie.poster)
    .then(result=>console.log(result))
},[])


return(
    <Pressable onPress={onMoviePress}>
       <Image style={styles.image} source={{uri:imageurl}}/>
     </Pressable>
)

}
export default MovieItem;