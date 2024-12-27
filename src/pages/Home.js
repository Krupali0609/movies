import React, { useState } from 'react'
import Moviecards from '../components/Moviecards'


const Home = () => {
    const [searchq, setSearchq]=useState("")
     const movies=[
        {id:1, title:"abc", released:"2020"},
        {id:2, title:"ghj", released:"2021"},
        {id:3, title:"rtt", released:"2022"},
        {id:3, title:"tyc", released:"2023"},
     ]
     const handlesearch =(e)=>{
        e.preventDefault()
        setSearchq(" ")
     }
  return (
    
    <div className='home'>
        <form onSubmit={handlesearch}className='searchform'>
            <input type='text' placeholder='type movie name...' 
            onChange={(e)=>setSearchq(e.target.value)}
            value={searchq}
            className='searchinput'></input>
            <button type="submit" className='seacrchbtn' > Search</button>
        </form>
        <div className='moviegrid'>
            {movies.map((movie)=>
            
               (<Moviecards movie={movie} key={movie.id}/>
                ))}
            

        </div>

    </div>
    
  )
}

export default Home