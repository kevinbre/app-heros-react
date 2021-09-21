import axios from "axios";
import { HEROS_URL } from './settings'

export async function getHero(id) {
    try {
      const response = await axios(`${HEROS_URL}/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }