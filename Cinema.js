import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import db from './firebase';
import Ci from './home pages/Ci';

function Cinema() {
  const [cini, setcini] = useState([])
  useEffect(()=>{
     getpns();
   },[]);
   function getpns(){
     db.collection('Cinema').orderBy('date','desc').limit(3).onSnapshot(function(querySnapshot){
       setcini(
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
         <p>చిత్ర సీమ</p>
        <Link  to={'/చిత్ర సీమ'}>More</Link>
    </div>
   
    <div className='Polihome'>
    {
      cini.map(po=>(
        <Ci id={po.id} title={po.title} stitle={po.subtitle} image={po.image} desc={po.desc} stamp={po.date} links={po.artlinks}/>
      ))
    }
    </div>
    </div>
  )
}

export default Cinema