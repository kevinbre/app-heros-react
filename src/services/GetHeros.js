import axios from "axios";
import { HEROS_URL } from "./settings";

export async function getHeros(ids) {
  try {
    const array = await ids.map(async (id) => {
      const response = await axios(`${HEROS_URL}/${id}`);
      return response.data;
    });
    const data = await Promise.all(array).then((values) => values);

    const goods = data.filter((hero) => hero.biography.alignment === "good");
    const bads = data.filter((hero) => hero.biography.alignment === "bad");

    return {
      goods: goods,
      bads: bads,
    };
  } catch (error) {
    console.log(error);
  }
}
