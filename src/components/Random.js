import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {
    const {gif,loading,fetchData} = useGif();

  return (
    <div className='w-[60%] bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5'>
        <h1 className='text-2xl mt-3 underline uppercase font-semibold'>A Random Gif</h1>
        {
           loading ?(<Spinner/>): (<img src={gif} alt="" width={450} />)
        }   
        <button onClick={()=>fetchData()} className='w-9/12 bg-yellow-500 py-1 text-md rounded-md mb-5'>Generate</button>
    </div>
  )
}

export default Random