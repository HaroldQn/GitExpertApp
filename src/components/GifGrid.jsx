import {GitItem} from './GifItem'
import { useFecthGifs } from '../hooks/useFecthGifs'

export const GifGrid = ({category}) =>{

  const {images, isLoading} = useFecthGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (
          <div class="loader-container">
            <div class="loader"></div>
          </div>
        )
      }
      <div className='card-grid'>
        {images.map((image) =>(
          <GitItem 
            key={image.id}
            {...image}
          />
        ))}
      </div>
    </>
  )
}