import React from 'react'
import './Title.css'


/*add titles like new arrivals ,best sellers..*/
const Title = ({title}) => {
  return (
    <div className='title'>
       <h1>{title}</h1> 
    </div>
    
  )
}

export default Title
