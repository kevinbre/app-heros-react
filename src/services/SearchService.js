import axios from "axios";
import { HEROS_URL } from "./settings";

export async function searchService(searchString) {
  try {
    const response = await axios(`${HEROS_URL}/search/${searchString}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}
