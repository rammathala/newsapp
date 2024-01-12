import React, { useEffect, useState } from 'react'
import db from '../firebase';
import Cupage from './Cupage';
function Culturepage() {
  const [culture, setculture] = useState([])
     useEffect(()=>{
        getpnps();
      },[]);
      function getpnps(){
        db.collection('Cultural').orderBy('date','desc').onSnapshot(function(querySnapshot){
          setculture(
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
        culture.map(po=>
             (
            <Cupage id ={po.id} title={po.title} image={po.image} desc={po.desc} dat={po.date}/>
             )
        )
    }
  </div>
  )
}

export default Culturepage