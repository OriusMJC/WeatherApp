import React , {useState}from 'react';
import './App.css';
import s from './components/Cards.module.css'
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';

export default function App() {
  const [cities, setCities] = useState([]);
  const apiKey = '45aee5a7810b0cba3b0c344f2f1a1878'
  
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
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
          setCities(oldCities => [ciudad,...oldCities]);
        } else {
          alert("Ciudad no encontrada");
          console.log(recurso)
        }
      });

    }

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <div className={s.containerCards}>
        <Cards
          cities={cities}
          onClose={onClose}
        />
      </div>
    </div>
  );
}