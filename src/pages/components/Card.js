import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material';

import styles from '@/styles/Card.module.css'

export default function ActionAreaCard({ pokemon }) {

  const colors = {
    'normal': '#a9aa78',
    'fighting': '#c13128',
    'flying': '#99a5e1',
    'poison': '#bb5b9d',
    'ground': '#e5d7a8',
    'rock': '#bea563',
    'bug': '#a8bc40',
    'ghost': '#6662b1',
    'steel': '#b0afc1',
    'fire': '#fe4a34',
    'water': '#1f93f6',
    'grass': '#76d96c',
    'electric': '#fcc545',
    'psychic': '#fe6ea2',
    'ice': '#46cee4',
    'dragon': '#8568ef',
    'dark': '#755b4e',
    'fairy': '#feb6f4'
  }

  return (
    <Card sx={{ maxWidth: 345, bgcolor: '#0F0F0F' }}>
      <CardActionArea>
        <CardMedia
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
          component="img"
          height="400"
          width="200"
          alt={pokemon.name}
          sx={{
            p: 8,
            borderRadius: '5%',
            width: 300,
            height: 290,
            bgcolor: '#0F0F0F'
          }}

        />
        <CardContent>

          <Typography className={styles.id}>{pokemon.id}</Typography>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: '#BBBBBB' }}>
            {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
          </Typography>

          <div className={styles.abilities}>
            {pokemon.abilities.map((ability, index) => (
              <Typography className={styles.ability} sx={{ backgroundColor: colors[pokemon.type] }} key={index}>{ability}</Typography>
            ))}
          </div>


        </CardContent>
      </CardActionArea>
    </Card>
  );
}