import Card from "./card";

export const CardsListHeroes = ({ team }) => {
  return (
    <div className="container fondo-est text-center">       
      <div>
        <div className="row fondo-good">
        <h3 className="margen-sup">Type <strong className="text-success">Hero</strong></h3>
        {team.goods.length > 0 ? (
          team.goods.map((hero) => {
            return (
              <div
                className="col-md-4"
                key={hero.id}
              >
                <Card hero={hero} />
              </div>
            );
          })
        ) : (
          <h5 className="margen-inf">Don't have <strong>Heros</strong></h5>
        )}
      </div>
      </div>
      </div>
  );
};
export const CardsListVillians = ({ team }) => {
    return(
      <div className="container fondo-est text-center"> 
      <div className="row">
      <h3 className="margen-sup">Type <strong className="text-danger">Villian</strong></h3>      
        {team.bads.length > 0 ? (
          team.bads.map((hero) => {
            return (
              <div
                className="col-md-4"
                key={hero.id}
              >
                <Card hero={hero} />
              </div>
            );
          })
        ) : (
          <h5 className="margen-inf">Don't have <strong>Villians</strong></h5>
        )}
        </div>
      </div>
     
    )
  
  }
