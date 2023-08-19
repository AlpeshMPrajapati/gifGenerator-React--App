import React, { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
    const [tag,setTag] = useState('');
    
    const {gif,loading,fetchData} = useGif(tag);

  return (
    <div className='w-[60%] bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5'>
        <h1 className='text-2xl mt-3 underline uppercase font-semibold'>Random {tag} Gif</h1>
        {
           loading ?(<Spinner/>): (<img src={gif} alt="" width={450} />)
        }   

        <input type="text" className='w-9/12 bg-[#e2e2e2] py-1 text-md rounded-md text-center' onChange={(event)=> setTag(event.target.value)} value={tag} />

        <button onClick={()=>fetchData(tag)} className='w-9/12 bg-yellow-500 py-1 text-md rounded-md mb-5'>Generate</button>
    </div>
  )
}

export default Tag