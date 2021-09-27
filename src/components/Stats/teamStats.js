import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";
import { getPowerStats } from "../../services/GetPowerStats";
import { getAppearance } from "../../services/GetAppearance";
import Stat from "./stats";
import "../../styles.css";

const TeamStats = () => {
  const [totalStats, setTotalStats] = useState([]);
  const [average, setAverage] = useState([]);

  const { teamIDS } = useContext(AppContext);

  useEffect(() => {
    async function getStatsList() {
      const array = [...teamIDS.goods, ...teamIDS.bads];
      const response = await getPowerStats(array);
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
        <h2 className="text-center text-uppercase">Team Stats</h2>
        <h3 className="text-center py-4">Choose you're Team</h3>
      </div>
    );
  }

  return (
    <div className="container fondo-est pt-3 pb-2">
      <h1 className="text-center text-uppercase">
        <strong><i>Team Statistics</i></strong>
      </h1>
      <div className="row align-items-center">
        <div className="col-md-3">
          <h2 className="text-center text-uppercase">
            <strong>
              {" "}
              <i>TEAM TYPE</i>
            </strong>
          </h2>
          <h4 className="text-center">
            <i className="text-white margen-sup">TEAM </i>{" "}
            <strong className="text-warning text-uppercase">
              {totalStats[0][0]}
            </strong>
          </h4>
          <h2 className="text-center text-uppercase margen">
            {" "}
            <strong>
              {" "}
              <i>Average</i>{" "}
            </strong>
          </h2>
          <h4 className="text-center text-uppercase">
            <strong className="text-white ">
              <i>Weight</i>
            </strong>{" "}
            <strong>
              {isNaN([...teamIDS.goods, ...teamIDS.bads]) === true
                ? (
                    average[1][1] / [...teamIDS.goods, ...teamIDS.bads].length
                  ).toFixed(2) + " Kg"
                : average[1][1]}
            </strong>
          </h4>
          <h4 className="text-center">
            <strong className="text-white text-uppercase">
              <i>Height</i>
            </strong>{" "}
            <strong>
              {isNaN([...teamIDS.goods, ...teamIDS.bads]) === true
                ? (
                    average[0][1] / [...teamIDS.goods, ...teamIDS.bads].length
                  ).toFixed(2) + " Cm"
                : average[0][1]}
            </strong>
          </h4>
        </div>

        <div className="col-md-9">
          {totalStats.map((stat, index) => {
            return <Stat key={index} name={stat[0]} value={stat[1]} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamStats;
