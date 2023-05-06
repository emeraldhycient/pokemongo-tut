import React, { useState, useEffect } from 'react'
import axios from 'axios'

function AvatarCard({ avatar }) {

  const [currentAvatar, setcurrentAvatar] = useState({})

  const [isShowing, setisShowing] = useState(false)

  const getAvatar = async () => {
    try {
      const req = await axios.get(`${avatar.url}`)
      console.log(req.data)
      setcurrentAvatar(req.data)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getAvatar()
  }, [avatar?.url])


  return (
    <section>
      <div onClick={() => setisShowing(!isShowing)} className="w-[250px] h-[60px] bg-amber-300 shadow-xl flex items-center justify-around rounded-lg m-4">
        <h5>
          {currentAvatar?.id}
        </h5>
        <img src={`${currentAvatar?.sprites?.front_shiny}`} alt={avatar?.name} />
        <h4>{avatar?.name}</h4>
      </div>
      {
        isShowing ?
          <div>
            <center>
              <img src={`${currentAvatar?.sprites?.front_shiny}`} className='h-[150px]' alt={avatar?.name} />
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
          : null
      }
    </section>
  )
}

export default AvatarCard
