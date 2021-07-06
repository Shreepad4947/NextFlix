import  React,{useEffect,useState} from 'react';
import { StyleSheet,Image,FlatList } from 'react-native';
import styles from './styles'
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
// import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';
import {DataStore} from 'aws-amplify'
import {Category} from '../../src/models'
 
// const firstcategory = categories.items[1]

const HomeScreen=()=> {

const [categories,setCategories]=useState<Category[]>([]);

useEffect(()=>{
const fetchCategories=async()=>{
  setCategories(await DataStore.query(Category));

};
fetchCategories();
},[])

  return (
    <View style={styles.container}>
   <FlatList
   data={categories}
   renderItem={({item})=> <HomeCategory category={item}/>}
   
   
   />
     
 

    </View>
  );
}

export default HomeScreen;
