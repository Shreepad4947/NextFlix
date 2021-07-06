import React ,{useEffect,useState}from 'react';
import { StyleSheet,Image,FlatList } from 'react-native';
import styles from './styles'
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import categories from '../../assets/data/categories';
import { Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import MovieDetailScreen from '../../screens/MovieDetailScreen';
import { Category,Movie } from '../../src/models';
import { DataStore } from 'aws-amplify';
import {Storage} from 'aws-amplify';
import MovieItem from '../../components/MovieItem';

interface  HomeCategoryProps{
   category:Category;
}


const HomeCategory=(props:HomeCategoryProps)=> {
const{category}=props;

const [movies,setMovies]=useState<Movie[]>([]);




useEffect(()=>{
const fetchMovies=async()=>{
  const result =(await DataStore.query(Movie)).filter((movie)=>movie.categoryID==category.id)
  setMovies(result);
};
fetchMovies();
},[])





  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
   <FlatList
   data={movies}
   renderItem={({item})=><MovieItem  movie={item}/>}
   horizontal
   showsHorizontalScrollIndicator={false}
   />

    </>
  );
}

export default HomeCategory;
