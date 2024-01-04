import { useEffect, useState } from "react"

export default function Main() {
    let apiKey = import.meta.env.VITE_YoutubeAPIKey
    const url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCabBd1g8nBWWCx2YT4yeXOA&maxResults=10&order=viewCount&key=AIzaSyBb0htRDLTA8aNiZAU1yzNlVrKTGmeVfck'
    
    const [data, setData] = useState({})
    const [videos, setVideos] = useState({})

    async function getData(){
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
        setVideos(data.items)
        for(video of videos){
            v
        }

    }

    useEffect(()=> {
        getData()
    },[])
    

    return (
        <div>Main Page</div>
    )
}