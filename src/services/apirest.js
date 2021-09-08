import axios from "axios";
const herosUrl = "https://www.superheroapi.com/api.php/10218462348685676";
const Apiurl = "http://challenge-react.alkemy.org/";

export async function loginService(email, password) {
    try {
      const response = await axios({
        url: `${Apiurl}`,
        method: "POST",
        data: {
          email: email,
          password: password,
        },
      });
      return response;
    } catch (error) {
      return error.message;
    }
  }

  export async function searchService(searchString) {
    try {
      const response = await axios(`${herosUrl}/search/${searchString}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  
  export async function getHero(id) {
    try {
      const response = await axios(`${herosUrl}/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  
  export async function getHeros(ids) {
    try {
      const array = await ids.map(async (id) => {
        const response = await axios(`${herosUrl}/${id}`);
        return response.data;
      });
      const data = await Promise.all(array).then((values) => values);
  
      const goods = await data.filter(
        (hero) => hero.biography.alignment === "good"
      );
      const bads = await data.filter(
        (hero) => hero.biography.alignment === "bad"
      );
  
      return {
        goods: goods,
        bads: bads,
      };
    } catch (error) {
      console.log(error);
    }
  }
  
  export async function getPowerstats(ids) {
    try {
      if (ids.length > 0) {
        const array = await ids.map(async (id) => {
          const response = await axios(`${herosUrl}/${id}/powerstats`);
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
          .reduce((prev, next) => [
            [prev[0][0], Number(prev[0][1]) + Number(next[0][1])],
            [prev[1][0], Number(prev[1][1]) + Number(next[1][1])],
            [prev[2][0], Number(prev[2][1]) + Number(next[2][1])],
            [prev[3][0], Number(prev[3][1]) + Number(next[3][1])],
            [prev[4][0], Number(prev[4][1]) + Number(next[4][1])],
            [prev[5][0], Number(prev[5][1]) + Number(next[5][1])],
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
  
  export async function getAppearance(ids) {
    try {
      if (ids.length > 0) {
        const array = await ids.map(async (id) => {
          const response = await axios(`${herosUrl}/${id}/appearance`);
          return response.data;
        });
        const data = await Promise.all(array).then((values) => values);
  
        const stats = data.map((e) => {
          return [
            
            ["Height", e.height[0] !== "0 cm" ? e.height[1] : 0],
            ["Weight", e.weight[0] !== "0 kg" ? e.weight[1] : 0],
          ];
        });
  
        const total = stats.reduce((prev, next) => [
          [prev[0][0], parseInt(prev[0][1]) + parseInt(next[0][1])],
          [prev[1][0], parseInt(prev[1][1]) + parseInt(next[1][1])],
        ]);
  
        return total;
      } else {
        return [1];
      }
    } catch (error) {
      console.log(error);
    }
  }
  