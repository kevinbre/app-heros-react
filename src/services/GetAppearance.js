import axios from "axios";
import { HEROS_URL } from './settings'

export async function getAppearance(ids) {
    try {
      if (ids.length > 0) {
        const array = await ids.map(async (id) => {
          const response = await axios(`${HEROS_URL}/${id}/appearance`);
          return response.data;
        });
        const data = await Promise.all(array).then((values) => values);
  
        const stats = data.map((e) => {
          return [
            
            ["Height", e.height[0] !== "0 cm" ? e.height[1] : 0],
            ["Weight", e.weight[0] !== "0 kg" ? e.weight[1] : 0],
          ];
        });
  
        const total = stats.reduce((prev, act) => [
          [prev[0][0], parseInt(prev[0][1]) + parseInt(act[0][1])],
          [prev[1][0], parseInt(prev[1][1]) + parseInt(act[1][1])],
        ]);
  
        return total;
      } else {
        return [1];
      }
    } catch (error) {
      console.log(error);
    }
  }