import React, { useState } from 'react'
import axios from 'axios';

export default function CourseDetails() {
  const [datas, alldatas] = useState('');

  const url = 'https://pokeapi.co/api/v2/pokemon/';

  const getInfo = () => {
    axios.get(`${url}ditto`)
    .then((res)=>{
      const allinfo = res.data.abilities.ability;

      alldatas(allinfo);
      
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  return (
    <div className='m-5'>
        Course Details
    </div>
  )
}
