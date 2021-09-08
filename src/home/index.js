import { useContext, useEffect, useState } from "react";
import { CardsListHeroes, CardsListVillians } from "../components/Cards/cardList";
import TeamStats from "../components/Stats/teamStats";
import { AppContext } from "../context/context";
import { getHeros } from "../services/apirest";
import Loader from "../img/loader.gif"



const Home = () => {
    const [team, setTeam] = useState({});
    const [loading, setLoading] = useState(false); 
    const { teamIDS, setTeamIDS } = useContext(AppContext);
  
    useEffect(() => { 
      const heroList = window.localStorage.getItem("teamList");
      if (heroList) {
        const list = JSON.parse(heroList);
        setTeamIDS(list);
      };
    },[setTeamIDS]);
  
    useEffect(() => {
        async function getHerosList() {
          try {
            const array = [...teamIDS.goods, ...teamIDS.bads];
            const response = await getHeros(array);
            if (response) {
              setTeam(response);
              setLoading(true);
            }
          } catch (error) {
            console.log(error);
          }
        };
        getHerosList();
    }, [teamIDS]);
  
    if (!loading) {
      return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <img className="loader text-primary" src={Loader} alt="loader"></img> 
        </div>
      );
    }

    return (
        <>
          <div className="mb-5">
            <TeamStats team={teamIDS} />
          </div>
            <CardsListHeroes team={team} />
            <CardsListVillians team={team} />
        </>
      );
    };
    
    export default Home;