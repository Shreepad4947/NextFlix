import React from "react";
import styles from "./styles";
import { View,Text } from "../../components/Themed";
import {Image} from 'react-native';
import {AntDesign} from '@expo/vector-icons'

interface EpisodeItemProps{
    episode:{
        id:string,
        title:string,
        poster:string,
        duration:string,
        plot:string,
        video:string,
    }
}

const EpisodeItem=(props:EpisodeItemProps)=>{
const{episode}=props;

    return(
        <View style={{margin:10}}>
<View style={styles.row}>
<Image style={styles.image} source={{uri:episode.poster}}/>
<View style={styles.titlecontainer}>
    <Text style={styles.title}>
        {episode.title}
    </Text>
    <Text style={styles.duration}>
        {episode.duration}
    </Text>
</View>
<AntDesign style={{margin:5}} name='download' size={20} color={'black'}/>
</View>

<Text style={styles.plot}> {episode.plot}</Text>
        </View>
    )
};

export default EpisodeItem;