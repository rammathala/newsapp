import React, { useEffect, useState } from 'react'
import db from '../firebase';
import Epage from './Epage';
function Educationpage() {
  const [edu, setedu] = useState([])
  useEffect(()=>{
     getpeps();
   },[]);
   function getpeps(){
     db.collection('Education').orderBy('date','desc').onSnapshot(function(querySnapshot){
       setedu(
         querySnapshot.docs.map((doc)=>({
           id:doc.id,
           title:doc.data().title,
           image: doc.data().image,
           desc: doc.data().description,
           artlink:doc.data().artlink,
           date:doc.data().date
         }))
       );
     });
  
   }
  return (
    <div className='Politicalpage'>
    {
        edu.map(po=>
             (
            <Epage id ={po.id} title={po.title} image={po.image} desc={po.desc} dat={po.date}/>
             )
        )
    }
  </div>
  )
}

export default Educationpage