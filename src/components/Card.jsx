import React from 'react';
import {Link} from 'react-router-dom'
import s from './Card.module.css';

export default function Card (props) {

const convCel= (temp)=>{
  let t = Math.round(temp - 273.15);
  return t
}
function imgStyle(){
  let t = convCel(props.temp)
  if (t < 15) return `${s.imgf}`;
  if (t >= 15 && t <= 23) return `${s.imgmc}`;
  if (t > 23) return `${s.imgc}`;
}
    return (
      <div className={`${s.containerCard} ${imgStyle()}`} id={props.id}>
        <div className={s.city}>
          <div id="closeIcon">
            <button onClick={props.onClose}>X</button>
          </div>
        <Link to={`/ciudad/${props.id}`}>
          <h3>{props.name}</h3>
        </Link>
        </div>
        <img
          className={s.clima} 
          src={`http://openweathermap.org/img/wn/${props.weather}@2x.png`}
          alt='Imagen del clima'
        />
        <div className={s.containtemp}>
          <div className={s.temp}>
            <h4>Max</h4>
            <h3>Temp</h3>
            <h4>Min</h4>
          </div>
          <div className={s.temp}>
            <p>{`${convCel(props.max)}°`}</p>
            <p>{`${convCel(props.temp)}°`}</p>
            <p>{`${convCel(props.min)}°`}</p>
          </div>
        </div>
      </div>
      )
};
