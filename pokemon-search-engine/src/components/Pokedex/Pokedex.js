import { useState, useEffect } from "react";


export default function Pokedex(){
    const numbers=1000;
    const [pokemons,getPokemons]=useState([])
    
// <<<<<<< pokemon2
//     const getData =async()=>{
//         const response=await fetch('https://pokeapi.co/api/v2/pokemon/');
//         const data= await response.json();
//         console.log(data);
//         getPokemons(data);
        
//     }
    
//     useEffect(()=>{
      
//         getData()
//     },[]);
// =======

    
//     useEffect(()=>{
     
//         getData()
//     },[])
// >>>>>>> master
    console.log(pokemons.results[0].name);
    
    return(
        <>
        <img ></img>
        <h1>jdfld</h1>
        </>
    )
}