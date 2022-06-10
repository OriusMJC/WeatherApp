import {useState,useEffect} from 'react'
import s from './Card.module.css';
import c from './City.module.css';

export default function City({id}){
  console.log(id)
  // console.log(ciudadRecibida.city)
  const [city,setCity] = useState('')
  // setCity(ciudadRecibida.city)
  const apiKey = '45aee5a7810b0cba3b0c344f2f1a1878'
  
    const convCel= (temp)=>{
        let t = Math.round(temp - 273.15);
        return t
      }

    function imgStyle(){
      let t = convCel(city.temp)
      if (t < 15) return `${s.imgf}`;
      if (t >= 15 && t <= 23) return `${s.imgmc}`;
      if (t > 23) return `${s.imgc}`;
    }
    function onSearch(){
      fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
            };
            return setCity(ciudad)
            // contiene = false
            // for(let i=0; i<cities.length; i++){
            //   if(cities[i].id === ciudad.id) contiene = true
            // }
            // if(!contiene) {
            //   return setCities(ciudad)
            // }else{
            //   alert('Ciudad ya registrada. Ingrese otra, por favor.')
            // };
          } else {
            alert("Ciudad no encontrada");
          }
        });
    }

    useEffect(()=>{
      onSearch()
    },[])
    // if(ciudadRecibida.city !== null){
    //   onSearch()
    // }else{
    //   setCity(ciudadRecibida.city)
    // }
    
    return(
      <div className={c.cityContent}>
        <div className={`${s.containerCard} ${s.containerCityLeft} ${imgStyle()}`} id={city.id}>
          <div className={s.city}>
            <h3>{city.name}</h3>
          </div>
          <img
            className={s.clima} 
            src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
            alt='Imagen del clima'
          />
          <div className={s.containtemp}>
            <div className={s.temp}>
              <h4>Max</h4>
              <h3>Temp</h3>
              <h4>Min</h4>
            </div>
            <div className={s.temp}>
              <p>{`${convCel(city.max)}°`}</p>
              <p>{`${convCel(city.temp)}°`}</p>
              <p>{`${convCel(city.min)}°`}</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Wind: {`${city.wind}`}</h3>
          <h3>Clouds: {`${city.clouds}`}</h3>
          <h3>Latitud: {`${city.latitud}`}</h3>
          <h3>Longitud: {`${city.longitud}`}</h3>
        </div>  
      </div>    
    )
}