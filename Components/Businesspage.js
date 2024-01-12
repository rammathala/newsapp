import React, { useEffect, useState } from 'react'
import Bpage from './Bpage'
import db from '../firebase';
function Businesspage() {
  const [business, setbusiness] = useState([])
  useEffect(()=>{
     getpbps();
   },[]);
   function getpbps(){
     db.collection('Business').orderBy('date','desc').onSnapshot(function(querySnapshot){
       setbusiness(
         querySnapshot.docs.map((doc)=>({
           id:doc.id,
           title:doc.data().title,
           image: doc.data().image,
           desc: doc.data().description,
           artlink:doc.data().links,
           date:doc.data().date
         }))
       );
     });
  
   }
  return (
    <div className='Politicalpage'>
      {
        business.map((bo)=>(
          <Bpage id ={bo.id} title={bo.title} image={bo.image} desc={bo.desc} dat={bo.date}/>
        ))
      }
    
    </div>
  )
}

export default Businesspage