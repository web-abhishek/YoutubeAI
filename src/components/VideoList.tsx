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
        console.log(json);
        setVideos(json.items);
    }

    return (
        <div className="flex flex-wrap gap-4 px-4 py-6">
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
        </div>
    )
}

export default VideoList;