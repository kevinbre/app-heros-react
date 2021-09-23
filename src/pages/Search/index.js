import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Cards/card";
import { searchService } from "../../services/SearchService";
import Loader from "../../img/loader.gif";
import errorimg from "../../img/batman-noencontrado.gif"
import { Helmet } from "react-helmet"

const Search = () => {
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { searchString } = useParams();
  const title = 'Search | APPHero'

  useEffect(() => {
    async function getSearch(searchString) {
      const response = await searchService(searchString);
      if (response.data.results) {
        setResults(response.data.results);
        setError(null);
        setLoading(true);
      }
      if (response.data.error) {
        setError(response.data.error);
        setResults(null);
        setLoading(true);
      }
    }
    getSearch(searchString);
  }, [searchString]);

  useEffect(() => {
    setLoading(false);
  }, [searchString]);

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
        <title> {title} </title>
        <meta name="description" content={title}/>
      </Helmet>
      <div className="row">
      {results ? (
        results.map((hero) => {
          return (
            <div
              className="col-md-4 my-4 d-flex justify-content-center"
              key={hero.id}
            >
              <Card hero={hero} />
            </div>
          );
        })
      ) : (
        <div className="error-search">
        <h2 className="error-text">{error}</h2>
        <h5 className="error-text text-white"> Please enter a valid Hero or Villian name</h5>
        <img src={errorimg} className="error-img" alt="errorim"/>
        </div>
      )}
    </div>
    </>
  );
};

export default Search;