import * as React from 'react';
import { StyleSheet,Image,FlatList } from 'react-native';
import styles from './styles'
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';


const firstcategory = categories.items[1]

const HomeScreen=()=> {
  return (
    <View style={styles.container}>
   <FlatList
   data={categories.items}
   renderItem={({item})=> <HomeCategory category={item}/>}
   
   
   />
     
 

    </View>
  );
}

export default HomeScreen;
