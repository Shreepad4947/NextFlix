import React from "react";
import { View ,Text} from "react-native";
import { Episode } from "../../types";
import styles from "./styles";
import {Video} from 'expo-av'
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Playback } from "expo-av/build/AV";

interface VideoPlayerProps{
episode:Episode;
}


const VideoPlayer=(props:VideoPlayerProps)=>{
const {episode}=props;
const video=useRef<Playback>(null);
const [status,setStatus]=useState({});


useEffect(()=>{
    if(!video){
        return;
    }
(async()=>{
await video?.current?.unloadAsync();
await video?.current?.loadAsync(
    {uri:episode.video},
    {},
    false
);
})();
},[episode])

    return(

    <Video
      ref ={video}
      style={styles.video}
      source={{
          uri:episode.video
      }}
      useNativeControls
      posterSource={{
          uri:episode.poster
      }}
     posterStyle={{
         resizeMode:'cover'
     }}
      usePoster={true}
      resizeMode='contain'
      onPlaybackStatusUpdate={status=>setStatus (()=>status)}
    />

    );
};

export default  VideoPlayer;