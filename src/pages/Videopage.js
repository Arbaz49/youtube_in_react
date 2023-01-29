import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Videopage.css";



const Videopage = () => {
  let { id } = useParams();
  const [likecounter,setlikecounter]=useState(0);

  const increaseLike=()=>{
    setlikecounter(likecounter+1);

  }

  return (
    <div style={{display:"flex",justifyContent:"space-between",hight:"100vh"}}>

      <div className="vidContainer">
        <iframe
          width="100%"
          height="450"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          
          allowFullscreen
        ></iframe>
      {/* <i className="fa-sharp fa-solid fa-thumbs-up likebtn" onClick={increaseLike} >{likecounter}</i> */}
      </div>

      <div style={{width:"38%",hight:"100vh",borderLeft:"2px solid red"}}>
      <div style={{width:"100%",border:"1px solid black"}}>
        h
      </div>
      </div>
     
    </div>
  );
};

export default Videopage;
