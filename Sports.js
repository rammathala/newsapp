import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import db from './firebase';
import So from './home pages/So';

function Sports() {
  const [spo, setspo] = useState([])
  useEffect(()=>{
     getpns();
   },[]);
   function getpns(){
     db.collection('Sports').orderBy('date','desc').limit(3).onSnapshot(function(querySnapshot){
       setspo(
         querySnapshot.docs.map((doc)=>({
           id:doc.id,
           title:doc.data().title,
           subtitle:doc.data().Stitle,
           image: doc.data().image,
           desc: doc.data().description,
           artlink:doc.data().artlink,
           date:doc.data().date
         }))
       );
     });
     
   }
  return (
    <div className='Polihome1'>
    <div className='Poliindex'>
         <p>క్రీడలు</p>
         <Link  to={'/క్రీడలు'}>More</Link>
    </div>
   
    <div className='Polihome'>
   
    {
      spo.map(po=>(
        <So id={po.id} title={po.title} image={po.image} desc={po.desc} stamp={po.date} links={po.artlinks} stitle={po.subtitle}/>
      ))
    }
    </div>
    </div>
  )
}

export default Sports