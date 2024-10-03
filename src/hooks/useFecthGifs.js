import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFecthGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() =>{
    const resp = await getGifs(category);
    setTimeout(() => {
      setIsLoading(false)
      setImages(resp);
    }, 2000);
  }

  useEffect(()=>{
    getImages();
  },[])
  
  return {
    images,
    isLoading
  }
}
