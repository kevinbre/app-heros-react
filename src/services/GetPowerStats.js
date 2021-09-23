import axios from "axios";
import { HEROS_URL } from './settings'

export async function getPowerStats(ids) {
    try {
      if (ids.length > 0) {
        const array = await ids.map(async (id) => {
          const response = await axios(`${HEROS_URL}/${id}/powerstats`);
          return response.data;
        });
        const data = await Promise.all(array).then((values) => values);
  
        const stats = data.map((e) => {
          return [
            ["COMBAT", e.combat !== "null" ? e.combat : 0],
            ["DURABILITY", e.durability !== "null" ? e.durability : 0],
            ["INTELLIGENCE", e.intelligence !== "null" ? e.intelligence : 0],
            ["POWER", e.power !== "null" ? e.power : 0],
            ["SPEED", e.speed !== "null" ? e.speed : 0],
            ["STRENGTH", e.strength !== "null" ? e.strength : 0],
          ];
        });
  
        const total = stats
          .reduce((prev, act) => [
            [prev[0][0], Number(prev[0][1]) + Number(act[0][1])],
            [prev[1][0], Number(prev[1][1]) + Number(act[1][1])],
            [prev[2][0], Number(prev[2][1]) + Number(act[2][1])],
            [prev[3][0], Number(prev[3][1]) + Number(act[3][1])],
            [prev[4][0], Number(prev[4][1]) + Number(act[4][1])],
            [prev[5][0], Number(prev[5][1]) + Number(act[5][1])],
            
          ])
          
          .sort((a, b) => b[1] - a[1]);
  
        return total;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  }