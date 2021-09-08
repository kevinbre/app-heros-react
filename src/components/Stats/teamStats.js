import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";
import { getAppearance, getPowerstats } from "../../services/apirest";
import Stat from "./stats";
import "../../styles.css"

const TeamStats = () => {
  const [totalStats, setTotalStats] = useState([]);
  const [average, setAverage] = useState([]);

  const { teamIDS } = useContext(AppContext);


  useEffect(() => {
    async function getStatsList() {
      const array = [...teamIDS.goods, ...teamIDS.bads];
      const response = await getPowerstats(array);
      if (response) {
        setTotalStats(response);
      }
      
    }
    async function getAverageList() {
      const array = [...teamIDS.goods, ...teamIDS.bads];
      const response = await getAppearance(array);
      if (response) {
        setAverage(response);
      }
    }
    if (teamIDS) {
      getStatsList();
      getAverageList();
    } else {
      setTotalStats([]);
      setAverage([]);
    }
  }, [teamIDS]);
    
  if (
    totalStats === [] ||
    totalStats.length <= 0 ||
    average === [] ||
    average.length <= 0
  ) {
    return (
      <div className="container fondo-est pt-3 pb-2">
        <h2 className="text-center">
         Team Stats
        </h2>
        <h3 className="text-center py-4">
         Choose you're Team
        </h3>
      </div>
    );
  }

    

  

  
  return (
    <div className="container fondo-est pt-3 pb-2">
      <h2 className="text-center">
        <i className="text-white">TEAM </i>{" "}
        <strong className="text-warning text-uppercase">
          {totalStats[0][0]}
        </strong>
      </h2>
      {totalStats.map((stat, index) => {
        return <Stat key={index} name={stat[0]} value={stat[1]} />;
      })}
      <div className="row my-3 justify-content-center">
        <div className="col-md-2">
          <h4 className="text-white">Average Weight</h4>
        </div>
        <div className="col-md-8">
          <h4 className="fw-bold text-warning">
            {isNaN([...teamIDS.goods, ...teamIDS.bads]) === true ? (average[1][1] / [...teamIDS.goods, ...teamIDS.bads].length).toFixed(2) + " Kg" : average[1][1]} 
            
            
          </h4>
        </div>
      </div>
      <div className="row my-3 justify-content-center">
        <div className="col-md-2">
          <h4 className="text-white">Average Height</h4>
        </div>
        <div className="col-md-8">
          <h4 className="fw-bold text-warning">
            {isNaN([...teamIDS.goods, ...teamIDS.bads]) === true ? (average[0][1] / [...teamIDS.goods, ...teamIDS.bads].length).toFixed(2) + " Cm" : average[0][1]}
          </h4>
        </div>
      </div>
      
    </div>
    
  );
  
};

export default TeamStats;
