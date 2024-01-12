import React, { useState } from 'react'
import InsertLinkIcon from '@mui/icons-material/InsertLink';
function Scard({title,image,timestamp,desc,links,stitle}) {
  const tstamps = new Date(timestamp?.toDate()).toLocaleString() /*question mark verify the date then only it works */
  return (
   < div className='Pcards'>
    <h1>{title}</h1>
    <h3>{stitle}</h3>
 <h5 className='date'>{tstamps}</h5>
<img src={image} alt='Image'/>
<h5>Image:{title}</h5>
<p className='descr'>{desc}</p>
<a   href={links}>Related articles<InsertLinkIcon/></a>
</div>
  )
}

export default Scard