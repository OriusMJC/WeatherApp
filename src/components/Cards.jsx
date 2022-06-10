import React from 'react';
import Card from './Card.jsx';
import s from './Cards.module.css'


export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className={s.containerCards}>
        {
          cities.map((city)=>
          <Card
          id={city.id}
          key={city.id}
          name={city.name}
          temp={city.temp}
          max={city.max}
          min={city.min}
          weather={city.img} 
          onClose={() => onClose(city.id)}
          />
          )
        }
  </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}
