import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API_KEY } from "../utils/Constant";

const VideoList = () => {
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        getVideos();
    }, [])
    
    const getVideos = async () => {
        const data = await fetch(YOUTUBE_API_KEY);
        const json = await data.json();
        // console.log(json);
        setVideos(json.items);
    }
    if (!videos) return null;
    return (
        <div className="flex flex-wrap gap-4 px-4 py-6">
            {videos.map((video)=> <VideoCard key={video.id} info={video} />) }
        </div>
    )
}

export default VideoList;