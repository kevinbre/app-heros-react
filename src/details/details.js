import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getHero } from "../services/apirest";
import Loader from "../img/loader.gif"

const Details = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function getData() {
      const response = await getHero(id);
      if (response) {
        setData(response.data);
        setLoading(true);
      }
    }
    getData();
  }, [id]);

  if (!loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
          <img className="loader text-primary" src={Loader} alt="loader"></img> 
      </div>
    );
  }




  return (
  
      <div className="detalles">
      <img src={data.image.url} className="detalles-img" alt="superhero-alt"/>
        <div className="detalles-text">
        <h1 className="detalles-name">{data.name}</h1>
        <p className="detalles-info">DETAILS AND INFO</p>
              <p>
                <a className="detalles-text-title" href="/#">WEIGHT </a>
                <a className="detalles-text-info" href="/#">
                {data.appearance.weight[1]}
                </a>
              </p>
              <p>
                <a className="detalles-text-title" href="/#">HEIGHT </a>
                <a className="detalles-text-info" href="/#">
                  {data.appearance.height[1]}
                </a>
              </p>
              <p>
                <a className="detalles-text-title" href="/#">NAME </a>
                <a className="detalles-text-info" href="/#">
                {data.biography["full-name"]}
                </a>
              </p>
              <p>
                <a className="detalles-text-title" href="/#">ALIAS </a>
                <a className="detalles-text-info" href="/#">
                {data.biography.aliases.map((e) => `${e}, `)}
                </a>
              </p>     
              <p>
                <a className="detalles-text-title" href="/#">EYE COLOR </a>
                <a className="detalles-text-info" href="/#">
                {data.appearance["eye-color"]}
                </a>
              </p>
              <p>
                <a className="detalles-text-title" href="/#">HAIR COLOR </a>
                  <a className="detalles-text-info" href="/#">
                    {data.appearance["hair-color"]}
                  </a>
              </p>
              <p>
                <a className="detalles-text-title" href="/#">WORK BASE </a>
                  <a className="detalles-text-info" href="/#">
                    {data.work.base}
                  </a>
              </p>
              <a className="detalles-button" href="/#" onClick={() => history.push("/")}>
                  GO BACK
              </a>
      </div>
       
    </div>
   
  );
};

export default Details;
