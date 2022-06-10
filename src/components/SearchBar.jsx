import React, { useState, useEffect } from "react";
import s from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  const input = document.querySelector('input');
  const [data,setData] = useState('')
  function getData(event){
    setData(event.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
      if(data){
        onSearch(data);
        setData(null)
        input.value = null;
      }else{alert('Debe ingresar una ciudad')}
  }

  useEffect(()=>{
    onSearch('London')
    onSearch('Buenos Aires')
    onSearch('Caba')
    onSearch('Madrid')
  },[])

  return (
    <form onSubmit={(e)=>{handleSubmit(e)}}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={getData}//,clearInput}
        className={s.sbar}
      />
      <input type="submit" value="Add"
        className={s.sbutton}/>
    </form>
  //   <div>
  //   <input 
  //     type='text' 
  //     pattern="[A-Za-z]{1,40}" 
  //     placeholder="City..." 
  //     onChange={getData}
  //     className={s.sbar}
  //   />
  //   <button 
  //     onClick={(e)=>{onSearch(data);
  //     clearInput(e)}}
  //     className={s.sbutton}>
  //     Add
  //   </button>
  // </div>

  );
}
