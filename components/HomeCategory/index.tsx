import * as React from 'react';
import { StyleSheet,Image,FlatList } from 'react-native';
import styles from './styles'
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import categories from '../../assets/data/categories';
import { Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import MovieDetailScreen from '../../screens/MovieDetailScreen';


interface  HomeCategoryProps{
   category:{
    id:string,
    title:string,
    movies:{
        id:string,
        poster:string,
    
   }[]
}
}


const HomeCategory=(props:HomeCategoryProps)=> {
const{category}=props;

const navigation = useNavigation();

const onMoviePress=(movie)=>{
 navigation.navigate('MovieDetailScreen', {id:movie.id})
}

  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
   <FlatList
   data={category.movies}
   renderItem={({item})=>(
     <Pressable onPress={()=> onMoviePress(item)}>
       <Image style={styles.image} source={{uri:item.poster}}/>
     </Pressable>
     
   )}
   horizontal
   showsHorizontalScrollIndicator={false}
   />

    </>
  );
}

export default HomeCategory;
