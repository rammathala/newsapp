import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import db from './firebase';
import Lo from './home pages/Lo';

function Local() {
  const [lo, setlo] = useState([])
  useEffect(()=>{
     getpns();
   },[]);
   function getpns(){
     db.collection('Local').orderBy('date','desc').limit(3).onSnapshot(function(querySnapshot){
       setlo(
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
         <p>స్థానిక వార్తలు</p>
         <Link to={'/స్థానిక వార్తలు'}>More</Link>
    </div>
   
    <div className='Polihome'>
   
    {
      lo.map(po=>(
        <Lo id={po.id} title={po.title} image={po.image} desc={po.desc} stamp={po.date} links={po.artlinks} stitle={po.subtitle}/>
      ))
    }
    </div>
    </div>
  )
}

export default Local