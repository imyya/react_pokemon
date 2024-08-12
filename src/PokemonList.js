import React from 'react'

export default function PokemonList({poke}) {
  return (
    <div>
      {poke.map(p=>(
        <div key={p.name}>{p.name}</div>
      ))}
    </div>
  )
}
