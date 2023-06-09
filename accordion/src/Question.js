import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({...quest}) => {
  const [showInfo,setShowInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{quest.title}</h4>
        <button className='btn' onClick={()=>setShowInfo
        (!showInfo)}>
        {showInfo? <AiOutlineMinus/>:<AiOutlinePlus/>}
        </button>
      </header>
      {showInfo && <p>{quest.info}</p>}
    </article>
  )
};

export default Question;
