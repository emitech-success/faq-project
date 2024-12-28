/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({title, info, id}) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        {id}
        <button className="question-btn" onClick={()=> setShowInfo(!showInfo)}>
          {showInfo?<AiOutlineMinus/>
          : <AiOutlinePlus/>}
          </button>
        </header>
    {showInfo && <p>{info}</p>}
    </article>
  )
}
export default Question