import { useEffect, useState } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';

export default function Main() {
    const apiKey = import.meta.env.VITE_YoutubeAPIKey; // Ensure this is securely handled
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCw2L9e-QtC2E7-LHgC25QwA&maxResults=10&order=viewCount&key=${apiKey}`;
    
    const [videos, setVideos] = useState([]);

    const fetchVideos = async () => {
        try { // Used try catch to make system more robust against bogus network requests
            const response = await axios.get(url);
            setVideos(response.data.items);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    useEffect(() => {
        fetchVideos();
    }, []);

    // Defining a react component to wrap around the Youtube component, allowing us to just feed it a video Id
    const VideoPlayer = ({ videoId }) => {
        return <YouTube videoId={videoId} loading = 'lazy'/>; // I don't really understand what lazy does except that it optimizes performance for pages with multiple videos
    };


    return (
        <div>
            <h1>Main Page</h1>
            {/* Renders the list of VideoPlayer components created by feeding the created react component VideoPlayer the id */}
            {videos.map((video, index) => (
                <VideoPlayer key={index} videoId={video.id.videoId} />
            ))}
        </div>
    );
}
