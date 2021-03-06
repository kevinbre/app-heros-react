import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getHero } from "../../services/GetHero.js";
import { Helmet } from "react-helmet";
import Loader from "../../img/loader.gif";
import "./Details.css";

const Details = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const title = "Details | APPHero";

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
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>
      <div className="detalles">
        <img
          src={data.image.url}
          className="detalles-img"
          alt="superhero-alt"
        />
        <div className="detalles-text">
          <h1 className="detalles-name">{data.name}</h1>
          <p className="detalles-info">DETAILS AND INFO</p>
          <p>
            <a className="detalles-text-title" href="/#">
              WEIGHT{" "}
            </a>
            <a className="detalles-text-info" href="/#">
              {data.appearance.weight[1]}
            </a>
          </p>
          <p>
            <a className="detalles-text-title" href="/#">
              HEIGHT{" "}
            </a>
            <a className="detalles-text-info" href="/#">
              {data.appearance.height[1]}
            </a>
          </p>
          <p>
            <a className="detalles-text-title" href="/#">
              NAME{" "}
            </a>
            <a className="detalles-text-info" href="/#">
              {data.biography["full-name"]}
            </a>
          </p>
          <p>
            <a className="detalles-text-title" href="/#">
              ALIAS{" "}
            </a>
            <a className="detalles-text-info" href="/#">
              {data.biography.aliases.map((e) => `${e}, `)}
            </a>
          </p>
          <p>
            <a className="detalles-text-title" href="/#">
              EYE COLOR{" "}
            </a>
            <a className="detalles-text-info" href="/#">
              {data.appearance["eye-color"]}
            </a>
          </p>
          <p>
            <a className="detalles-text-title" href="/#">
              HAIR COLOR{" "}
            </a>
            <a className="detalles-text-info" href="/#">
              {data.appearance["hair-color"]}
            </a>
          </p>
          <p>
            <a className="detalles-text-title" href="/#">
              WORK BASE{" "}
            </a>
            <a className="detalles-text-info" href="/#">
              {data.work.base}
            </a>
          </p>
          <button className="detalles-button" onClick={() => history.goBack()}>
            GO BACK
          </button>
        </div>
      </div>
    </>
  );
};

export default Details;
