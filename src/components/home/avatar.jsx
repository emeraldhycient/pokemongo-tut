import React from "react";

function Avatar() {
  return (
    <div className="w-full">
      <center>
        <h1>kaduna</h1>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png" className="h-[300px] w-[300px] rounded-full" alt="" />
        <div className="w-full">
          <button className="bg-red-500 px-16 py-3 text-white rounded-lg mr-3">edit</button>
          <button className="bg-red-500 px-16 py-3 text-white rounded-lg mr-3">edit</button>
        </div>
      </center>
    </div>
  );
}

export default Avatar;
