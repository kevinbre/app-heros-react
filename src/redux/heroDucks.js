import axios from "axios";
import { HEROS_URL } from "../services/settings";

//Constantes
const dataInicial = {
  array: [],
  id: [],
  appearance: {},
  biography: {},
  powerstats: {}
};
//Types
const GET_HERO_DETAIL = "GET_HERO_DETAIL";


//Reducer
export default function heroReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_HERO_DETAIL:
      return {
        ...state,
        id: action.payload.id,
        biography: action.payload.biography,
        appearance: action.payload.appearance,
      };

    default:
      return state;
  }
}
//HERO DETALLES
export const getHeroAction = (id) => async (dispatch, getState) => {
  // console.log('getState', getState().heroid.object)
  const { appearance, biography } = getState().heroid;
  console.log({ appearance, biography });
  try {
    const response = await axios(`${HEROS_URL}/${id}`);
    dispatch({
      type: GET_HERO_DETAIL,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

