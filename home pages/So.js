import React from 'react'
import { Link } from 'react-router-dom';

function So({title,image,desc,stamp,id}) {

  const stamps = new Date(stamp?.toDate()).toLocaleString()
 

  return (
    <>
    <Link to={'క్రీడలు/'+ id}>
    <div className='card' >
    <div className='image'>
         <img src={image}/>
         <p>{title}</p>
    </div>
    <div className='descti'>
        <p>{JSON.stringify(desc).substring(0,190).replace(/['"]+/g, '')}........</p>
        <p className='time'>{stamps}</p>
        {/* above p is 
        conversion to 
        string and 
        substring and 
        removing quotations from string*/}
    </div>
</div></Link>

</>
  )
}

export default So