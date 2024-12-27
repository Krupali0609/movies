import React from 'react'

const Moviecards = ({movie}) => {
    function handlefav(){
        alert("clicked")
    }
  return (
    <div className='moviecard'>
        <div className='novieposter'>
            <img src={movie.url} alt={movie.title}/>
            <div className='movieoverlay'>
                <button className="favbtn"onClick={handlefav}>
                    heart
                    </button> 

            </div>

    </div>
    <div className='movieinfo'>
        <h3> {movie.title}</h3>
        <p> {movie.released}</p>

    </div>

    </div>
  )
}

export default Moviecards