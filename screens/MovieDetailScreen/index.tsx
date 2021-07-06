import React  from "react";
import styles from './styles';
import movie from "../../assets/data/movie";
import {Image}from 'react-native';
import { MaterialIcons,Entypo,AntDesign,Feather, Ionicons } from "@expo/vector-icons";
import {DataStore} from 'aws-amplify';
import { Text, View } from '../../components/Themed';
import { Pressable,FlatList } from "react-native";
import EpisodeItem from "../../components/Episodeitem";
import { Picker } from "@react-native-picker/picker";
import { useState ,useEffect} from "react";
import VideoPlayer from "../../components/VideoPlayer";
import { Movie } from "../../src/models";
import { useRoute } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { Season } from "../../src/models";
import { Episode } from "../../src/models";




const firstSeason=movie.seasons.items[0];
const firstEpisode=firstSeason.episodes.items[0];


 const  MovieDetailScreen=()=>{
   const [movie,setMovie]=useState<Movie|undefined>(undefined);
const [seasons,setSeasons]= useState<Season[]>([]);
const [episodes,setEpisodes]= useState<Episode[]>([]);


const [currentEpisode,setCurrentEpisode]=useState<Episode|undefined>(undefined);
  const [currentSeason, setCurrentSeason]= useState<Season|undefined>(undefined);
    // const seasonNames =movie.seasons.items.map(season=>season.name);
    const seasonNames = seasons?seasons.map(season=>season.name):[];



const route=useRoute();

useEffect(()=>{
const fetchMovie =async()=>{
setMovie(await DataStore.query(Movie,route?.params?.id))
};
fetchMovie();
},[])


useEffect(()=>{
if(!movie){
  return;
}
  const fetchSeasons=async()=>{
    const movieSeasons=(  await DataStore.query(Season)).filter(s=> s.movie?.id==movie.id);

  setSeasons(movieSeasons);
  setCurrentSeason(movieSeasons[0]);
}
fetchSeasons();
},[movie])


useEffect(()=>{
  if(!currentSeason){
    return;
  }
  const fetchEpisode=async()=>{
  const seasonEpisode =(
    await DataStore.query(Episode)

  ).filter(o=> o?.season?.id==currentSeason.id);
  setEpisodes(seasonEpisode);
  setCurrentEpisode(seasonEpisode[0]);
  }
  fetchEpisode();
},[currentSeason])


if(!movie){
  return<ActivityIndicator style={{backgroundColor:'blue'}}/>
}

// console.log(seasons);
// console.log(seasonNames);
    return(
<View>
  {currentEpisode &&
   <VideoPlayer episode={currentEpisode}
/>} 
 
 <FlatList
 data={episodes}
 renderItem={({item})=> (
 <EpisodeItem 
 episode={item} 
 onPress={setCurrentEpisode}
  />)}
 
 style={{marginBottom:250}}
 ListHeaderComponent={( 
 
 <View style={{padding:14}}>



    <Text style={styles.title}>{movie.title}</Text>
<View style={{flexDirection:'row'}}>
    <Text style={styles.match}>98% match</Text>
    <Text style={styles.year}>{movie.year}</Text>
    <View style={styles.ageContainer}>
        <Text style={styles.age}> 12+ </Text>
    </View>
<Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
<MaterialIcons name="hd" size={30} color="black"/>
</View>


{/* {Play Button} */}
<Pressable onPress={()=> {console.warn('play')}} style={styles.playButton}>
<Text style={styles.playbuttontext}> 
<Entypo name="controller-play" size={16} color='white'/>
    Play</Text>
</Pressable>

{/* {Download Button} */}
<Pressable onPress={()=> {console.warn('Download')}} style={styles.DownloadButton}>
<Text style={styles.downloadbuttontext}> 
<AntDesign name="download" size={16} color='white' />
  {' '}  Download</Text>
    </Pressable>


    {/* {plot} */}
    <Text style={{marginVertical:10}}> {movie.plot}</Text>


    <Text style={styles.year}>Cast: {movie.cast} </Text>
<Text style={styles.year}>Creater: {movie.creator}</Text>

{/* {Icon} */}
<View style={{flexDirection:'row'}}>

<View style={{alignItems:'center',margin:20}}>
  <AntDesign name='plus' size={25} color={'black'}/>
  <Text style={{color:'darkgrey'}}> My List </Text>
</View>


<View style={{alignItems:'center',margin:20}}>
  <Feather name='thumbs-up' size={25} color={'black'}/>
  <Text style={{color:'darkgrey'}}> Share </Text>
</View>

<View style={{alignItems:'center',margin:20}}>
  <Ionicons name='share-social' size={25} color={'black'}/>
  <Text style={{color:'darkgrey'}}> Rate </Text>
</View>



</View>

{currentSeason && (
  <Picker
selectedValue ={currentSeason.name}
onValueChange={(itemValue,itemIndex) => {
  setCurrentSeason(seasons[itemIndex])
}}
style={{width:200}}
itemStyle={{backgroundColor:'red'}}
dropdownIconColor={"black"}
>
  {seasonNames.map(seasonName=>(
    <Picker.Item label={seasonName} value={seasonName} key={seasonName} />
  ))}
  
</Picker>
)}


</View>)}
 />

</View>
    )
};

export default MovieDetailScreen;