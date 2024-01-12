import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import Pcard from '../../Pcard';
import './rout.css'
function Politicaldescription() {
   const [pols,setpols] = useState([])
    let params = useParams();
    let id = params.id;
    const fetchDetails = async()=>{
   db.collection('Political').doc(id).get().then((snapshot)=>setpols(snapshot.data()))
      
    };
    useEffect(()=>{
fetchDetails();
    },[id])
  return (
    <div className='show'>
      <Pcard id={pols.id} stitle={pols.Stitle} desc={pols.Description} title={pols.Ntitle} timestamp={pols.date}  image={pols.image} links={pols.links}/>
    </div>
  )
}

export default Politicaldescription