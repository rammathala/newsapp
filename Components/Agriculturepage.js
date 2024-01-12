import React, { useEffect, useState } from 'react'
import db from '../firebase';
import Apage from './Apage';
function Agriculturepage() {
  const [agri, setagri] = useState([])
     useEffect(()=>{
        getpaps();
      },[]);
      function getpaps(){
        db.collection('Agricultural').orderBy('date','desc').onSnapshot(function(querySnapshot){
          setagri(
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
          agri.map(ao=>
               (
              <Apage id ={ao.id}  title={ao.title} image={ao.image} desc={ao.desc} dat={ao.date}/>
               )
          )
      }
    </div>
  )
}

export default Agriculturepage