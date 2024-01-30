import React, { useEffect } from "react";
import "./borderproj.css";
import { useState } from "react";

{
  /* <div className="shield">
<div className="plate"></div>
</div> */
}

{
  /* <div className="heal">
<div className="horizontalheal">
</div>
<div className="verticalheal"></div>
</div> */
}






const Ui = () => {
  const [anime,setanime]=useState(false);


  const [final,setfinal]=useState(0);
  const [actualfinal,setactualfinal]=useState(300);
  const time =500/(actualfinal);
  
  
  // function stagechange() {
    
  //   setinside(arr2[(i + 1) % 3]);
  //   setoutercircleclassname(outercirclearr[(i + 1) % 3]);
  //   setoutermostcircleclassname(outermostcirclearr[(i + 1) % 3]);
  //   setanime(true);
  //   console.log("clicked");
  //   setTimeout(()=>{
  //     setanimation(false)
  //   },200);
  //   seti((i + 1) % 3);
  // }

  return (
    <div className="parentcontainer_bproj">
      {/* <div className="upcircle" > 
      <div className="upincircle"></div>
      </div>
      <div className="downcircle"></div> */}
     
     </div>
  );
};
export default Ui;
