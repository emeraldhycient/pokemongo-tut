import React from 'react'

function Header() {
    return (
        <div className='h-16 w-full bg-gray-800 flex justify-center items-center'>
            <img src="https://i.im.ge/2023/04/30/LvoAlW.pokeapi-256-3fa72200.png" className='w-32 h-12' alt="" />
            <h3 className='text-white font-bold text-xl'>Pokedex</h3>
        </div>
    )
}

export default Header