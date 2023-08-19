import { useEffect, useState } from 'react'
import axios from 'axios';

// console.log(API_KEY)
// TODO : create account on giphy
// console.log(url)



const useGif = (tag) => {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const [gif,setGif] = useState('');
    const [loading,setLoading] = useState(false);
    
    async function fetchData(tag){
        setLoading(true)
        const output = await axios.get(tag ? `${url}&tag=${tag}` : url);
        console.log(output.data.data)
        const data = output.data.data;
        const imageSource =data.images.downsized_large.url;
        console.log(imageSource)
        setGif(imageSource)
        setLoading(false)

    }

    useEffect(() => {
      fetchData();
    }, [])
    
    return {gif,loading,fetchData}
}

export default useGif