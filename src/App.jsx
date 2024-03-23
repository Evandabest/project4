import './App.css'
import SideBar from './Sidebar'
import Call from './content'
import Intro from './intro'
import Team from './team'
import Seen from './Seen'
import { useState, useEffect } from 'react';

function App() {
const [pokemon, setPokemon] = useState({
  name: "",
  img: "",
  types: [],
  regions: [],
});
const [team, setTeam] = useState([]);
const [seenalr, setSeenAlr] = useState([]);
const [ban, setBan] = useState({
  types: [],
  regions: [],
});
const makeURL = () => {
    const randomIndex = Math.floor(Math.random() * 1025) + 1;
    const URL = `https://pokeapi.co/api/v2/pokemon/${randomIndex}`
    return URL;
}
const fetchData = async () => {
  let found = false;
  while (!found) {
    try {
      const URLs = makeURL();
      const response = await fetch(URLs);
      const data = await response.json();
      const typed = data.types.map((type) => type.type.name);
      const versions = data.game_indices.map((index) => index.version.name);
      const isBanned = typed.some(type => ban.types.includes(type));

      if (!isBanned) {
        setPokemon({
          name: data.name,
          img: data.sprites.front_default,
          types: typed,
          regions: versions
        });

        setSeenAlr(prevSeenAlr => [...prevSeenAlr, {
          name: data.name,
          img: data.sprites.front_default,
          types: typed,
          regions: versions
        }]);
        found = true; 
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      break; 
    }
  }
};

useEffect(() => { 
    fetchData();
    //setTeam();
},[])

/*const removeTeam = (pokemonToRemove) => {
  setTeam((prevTeam) => {
      const newTeam = prevTeam.filter((member) => member.name !== pokemonToRemove.name);
      if (newTeam.length !== prevTeam.length) {
          setTeamCount((prevCount) => prevCount - 1);
      }
      return newTeam;
  });
};
*/
const removeTeam = (pokemonToRemove) => {
  setTeam((prevTeam) => {
      const newTeam = prevTeam.filter((member) => member.img !== pokemonToRemove.img);
      return newTeam;
  });
};

const removeBan = (type) => {
  setBan((prevBan) => ({
      ...prevBan,
      types: prevBan.types.filter((banType) => banType !== type)
  }));
};

const removebannedr = (region) => {
  setBan((prevBan) => ({
    ...prevBan,
    regions: prevBan.regions.filter((regiontype) => regiontype !== region)
  }));
}


const addTeam = () => {
  if (team.length < 6) {
    setTeam([...team, pokemon])
  }
}


const banned = (type) => {
  setBan(prevBan => {
      if (!prevBan.types.includes(type)) {
          return {
              ...prevBan,
              types: [...prevBan.types, type]
          };
      }
      return prevBan;
  });
}

const bannedr = (region) => {
  setBan(prevBan => {
      if (!prevBan.regions.includes(region)) {
          return {
              ...prevBan,
              regions: [...prevBan.regions, region]
          };
      }
      return prevBan;
  });
}


  return (
    <>
      <Seen alr = {seenalr}></Seen>
      <Intro></Intro>
      <Team team = {team}remove = {removeTeam}></Team>
      <Call pokemon = {pokemon} fetch = {fetchData} banned = {banned} bannedr = {bannedr} update = {addTeam}></Call>
      <SideBar banned = {ban} remover = {removebannedr} removeBan = {removeBan}></SideBar>
    </>
  )
}

export default App
