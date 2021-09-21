import React from "react";
import "../../styles.css"


const Stat = ({ name, value }) => { 
 return(
 
      <div className="row my-3 justify-content-center">
        <div className="col-md-2">
          <h4 className="text-white">{name}</h4>
        </div>
        <div className="col-md-8 d-flex justify-content-center align-items-center">
          <div className="progress w-100" style={{ height: "25px"}}>
            <div
              className="progress-bar bg-gradient bg-warning text-center text-dark fw-bold"
              style={{ width: `${value / 6}%` }}
              aria-valuenow={value}
              aria-valuemin="0"
              aria-valuemax="600"
            >
              {value}%
            </div>
            
          </div>
          
        </div>
      </div>     
      );
    };
  
   

  
  
  
  export default Stat;
