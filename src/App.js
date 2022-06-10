import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import About from './components/About.jsx'
import City from './components/City.jsx'
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';



export default function App() {

  const [cities, setCities] = useState([]);
  let contiene = false;
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
          contiene = false
          for(let i=0; i<cities.length; i++){
            if(cities[i].id === ciudad.id) contiene = true
          }
          if(!contiene) {
            return setCities(oldCities => [ciudad,...oldCities])
          }else{
            alert('Ciudad ya registrada. Ingrese otra, por favor.')
          };
        } else {
          alert("Ciudad no encontrada");
          console.log(recurso)
        }
      });

    }
    function onFilter(id){
      let ciudad = cities.filter(c=> c.id === parseInt(id))
      if(ciudad.length > 0) return ciudad[0]
      else return null
    }
  return (
    <>
      {/* <Route path='/' element={<Home/>}/> */}
      <Route path='/' render={()=><Nav onSearch={onSearch}/>}/>
      <Route exact path='/' render={()=><Cards cities={cities} onClose={onClose}/>}/>
      <Route path='/about' component={About}/>
      <Route path='/ciudad/:id' render={({match})=><City id={match.params.id}/>}/>
    </>
  );
}
