import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AvatarCard from '../components/home/avatarCard'
// import Avatar from '../components/home/avatar'
import Header from '../components/common/header'

function Home() {

  const [avatars, setAvatars] = useState({})
  const [page, setPage] = useState("https://pokeapi.co/api/v2/pokemon/");

  const getAvatars = async () => {
    try {
      const req = await axios.get(page)
      console.log(req.data)
      setAvatars(req.data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getAvatars()
  }, [page]);

  const handleNext = () => {
    if (avatars?.next) {
      setPage(avatars?.next)
    } else {
      alert("this is the last page")
    }
  }


  const handlePrevious = () => {
    if (avatars?.previous) {
      setPage(avatars?.previous)
    } else {
      alert("this is the last page")
    }
  }
  return (
    <section>
      <Header />
      <div className="w-10/12 md:w-8/12 lg:w-6/12 mx-auto grid grid-cols-1 md:grid-cols-2">
        {
          avatars?.results?.map((avatar, index) => (
            <AvatarCard avatar={avatar} key={index} />
          ))
        }
      </div>
      <div className='w-10/12 md:w-8/12 lg:w-6/12 mx-auto grid grid-cols-2 md:p-20'>
        <button onClick={() => { handlePrevious() }} className='font-semibold h-[40px] w-[100px] bg-slate-100 rounded-lg shadow'>Previous</button>
        <button onClick={() => { handleNext() }} className='font-semibold h-[40px] w-[100px] bg-slate-100 rounded-lg shadow'>Next</button>
      </div>
    </section>
  )
}

export default Home
