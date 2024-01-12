import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import './rout.css'
import Ecard from './Ecard';
function Sportsdesc() {
   const [spor,setspor] = useState([])
    let params = useParams();
    let id = params.id;
    const fetchDetails = async()=>{
   db.collection('Sports').doc(id).get().then((snapshot)=>setspor(snapshot.data()))
      
    };
    useEffect(()=>{
fetchDetails();
    },[id])
  return (
    <div className='show'>
      <Ecard id={spor.id} desc={spor.description} title={spor.title} timestamp={spor.date}  image={spor.image} links={spor.links}/>
    </div>
  )
}

export default Sportsdesc