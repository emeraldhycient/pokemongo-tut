import React, { useState,useEffect } from 'react'
import axios from 'axios'
import AvatarCard from '../components/home/avatarCard'
import Avatar from '../components/home/avatar'
import Header from '../components/common/header'

function Home() {

  const [avatars, setAvatars] = useState({})
  
  const getAvatars = async () => {
    try {
      const req = await axios.get('https://pokeapi.co/api/v2/pokemon/')
      // console.log(req.data)
      setAvatars(req.data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getAvatars()
  }, [])
  
  
  
  return (
    <section>
      <Header/>
      <div className="w-10/12 md:w-8/12 lg:w-6/12 mx-auto grid grid-cols-1 md:grid-cols-2">
        {
          avatars?.results?.map((avatar,index) => (
            <AvatarCard avatar={avatar} key={index} />
          ))
        }
      </div>
    </section>
  )
}

export default Home
