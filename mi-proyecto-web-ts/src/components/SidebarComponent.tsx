import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import YouTube from 'react-youtube';

import heroesData from '../data/heroes.json';

interface Hero {
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}

const allHeroes: Hero[] = heroesData;
const marvelHeroes = allHeroes.filter(hero => hero.publisher === "Marvel Comics");

const SidebarComponent: React.FC = () => {
  
  const videoOptions = {
    height: '240',
    width: '100%', 
    playerVars: {
      autoplay: 0,
    },
  };

  const videoId = "6ZfuNTqbHE8"; 

  return (
    <aside style={{ backgroundColor: '#f4f4f4', padding: '20px', height: '100%' }}>
      <h3>Tus heroes favoritos 😉</h3>
      
      <p> Marvel :</p>
      
      <Autocomplete
        disablePortal
        id="marvel-autocomplete"
        options={marvelHeroes} 
        
        getOptionLabel={(option: Hero) => option.superhero}
        
        sx={{ width: '100%', marginBottom: 4 }}
        renderInput={(params) => <TextField {...params} label="Héroe de Marvel" />}
      />

      <p>Vídeo de YouTube:</p>
      <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <YouTube videoId={videoId} opts={videoOptions} />
      </div>
    </aside>
  );
}

export default SidebarComponent;