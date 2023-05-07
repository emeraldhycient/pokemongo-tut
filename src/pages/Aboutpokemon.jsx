import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

function Aboutpokemon() {

  const { id } = useParams();

  const AVATAR_URL = "https://pokeapi.co/api/v2/pokemon/"

  const [currentAvatar, setcurrentAvatar] = useState({})

  const getAvatar = async () => {
    try {
      const response = await axios.get(`${AVATAR_URL}${id}`)
      console.log(response.data);
      setcurrentAvatar(response.data)
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getAvatar()
  }, [id])



  return (
    <div>
      <center>
        <img src={`${currentAvatar?.sprites?.front_shiny}`} className='h-[150px]' alt={currentAvatar?.name} />
        <div>
          {
            currentAvatar?.stats?.map((stat) => (
              <div key={stat.stat.name} className='flex items-center justify-between w-[200px]'>
                <h4>{stat.stat.name}</h4>
                <h5>{stat.base_stat}</h5>
              </div>
            ))
          }
        </div>
      </center>
    </div>
  )
}

export default Aboutpokemon