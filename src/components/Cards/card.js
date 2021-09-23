import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/context";
import dictionary from "../../i18n";
import "../../styles.css"

const Card = ({ hero }) => {
  const { teamIDS, handleTeam } = useContext(AppContext);

  return (
    <>
    <div className="carta-box">
      <div className="carta">    
      <div className="card" style={{ width: "240px"}}>
        <img src={hero.image.url} className="carta-img" alt={hero.name}/>
        <div className="nombre-carta">{hero.name}</div>
        <ul className="list-group list-group-flush">
        <div className="cara">
          </div>
          </ul>
          {/* Powerstats inicio */}
          <div className="cara detras">
          <ul className="list-group carta-atras">
            <li className="list-group carta-atras carta-medida">
              <strong>Powerstats</strong>
            </li>
            <li className="list-group-item text-center">
              <strong>Combat</strong>
              {hero.powerstats.combat !== "null" ? (
                <div className="progress">
                  <div
                    className="progress-bar-yellow"              
                    style={{ width: `${hero.powerstats.combat}%` }}
                    aria-valuenow={hero.powerstats.combat}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {hero.powerstats.combat}%
                  </div>
                </div>
                
              ) : ( 
              <p>Unknown statistic</p>
              )}
              
            </li>
            <li className="list-group-item text-center">
              <strong>Durability</strong>
              {hero.powerstats.durability !== "null" ? (
                <div className="progress">
                  <div
                    className="progress-bar-yellow"
                    style={{ width: `${hero.powerstats.durability}%` }}
                    aria-valuenow={hero.powerstats.durability}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {hero.powerstats.durability}%
                  </div>
                </div>
              ) : (
                <p>Unknown statistic</p>
              )}
            </li>
            <li className="list-group-item text-center">
            <strong>Intelligence</strong>
              {hero.powerstats.intelligence !== "null" ? (
                <div className="progress">
                  <div
                    className="progress-bar-yellow"
                    style={{ width: `${hero.powerstats.intelligence}%` }}
                    aria-valuenow={hero.powerstats.intelligence}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {hero.powerstats.intelligence}%
                  </div>
                </div>
              ) : (
                <p>Unknown statistic</p>
              )}
            </li>
            <li className="list-group-item text-center">
            <strong>Power</strong>
              {hero.powerstats.power !== "null" ? (
                <div className="progress">
                  <div
                    className="progress-bar-yellow"
                    style={{ width: `${hero.powerstats.power}%` }}
                    aria-valuenow={hero.powerstats.power}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {hero.powerstats.power}%
                  </div>
                </div>
              ) : (
                <p>Unknown statistic</p>
              )}
            </li>
            <li className="list-group-item text-center">
              <strong>Speed</strong>
              {hero.powerstats.speed !== "null" ? (
                <div className="progress">
                  <div
                    className="progress-bar-yellow"
                    style={{ width: `${hero.powerstats.speed}%` }}
                    aria-valuenow={hero.powerstats.speed}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {hero.powerstats.speed}%
                  </div>
                </div>
              ) : (
                <p>Unknown statistic</p>
              )}
            </li>
            <li className="list-group-item text-center">
             <strong>Strength</strong> 
              {hero.powerstats.strength !== "null" ? (
                <div className="progress">
                  <div
                    className="progress-bar-yellow"
                    style={{ width: `${hero.powerstats.strength}%` }}
                    aria-valuenow={hero.powerstats.strength}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {hero.powerstats.strength}%
                  </div>
                </div>
              ) : (
                <p>Unknown statistic</p>
              )}

            </li>
          </ul>
          </div>
        </div>
        </div>

{/* fin stats */}
      
        <div className="container py-3 d-flex align-items-center carta-caja text-white d-flex justify-content-between">
          <button className="btn btn-primary">
            <Link
              to={`/details/${hero.id}`}
              className="text-decoration-none text-white"
            >
               {dictionary.CARD_BUTTONS.DETAIL_BUTTON}
            </Link>
          </button>
          {teamIDS.goods.includes(Number(hero.id)) ||
          teamIDS.bads.includes(Number(hero.id)) ? (
            <button
              onClick={() =>
                handleTeam(hero.biography.alignment, Number(hero.id))
              }
              className="btn btn-danger"
            >
              {dictionary.CARD_BUTTONS.DELETE_BUTTON}
            </button>
          ) : (
            <button
              onClick={() =>
                handleTeam(hero.biography.alignment, Number(hero.id))
              }
              className="btn btn-success"
            >
               {dictionary.CARD_BUTTONS.ADD_BUTTON}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
