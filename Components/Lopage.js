import React from 'react'
import { Link } from 'react-router-dom'

function Lopage({title,image,desc,dat,id}) {
    const dats = new Date(dat?.toDate()).toLocaleString()
  return (
    <>
    <Link to={'/స్థానిక వార్తలు/'+ id }>
    <div className='card' >
    <div className='image'>
         <img src={image}/>
         <p>{title}</p>
    </div>
    <div className='descti'>
        <p>{JSON.stringify(desc).substring(0,190).replace(/['"]+/g, '')}........</p>
        {dats}
        {/* above p is 
        conversion to 
        string and 
        substring and 
        removing quotations from string*/}
    </div>
</div></Link></>
  )
}

export default Lopage