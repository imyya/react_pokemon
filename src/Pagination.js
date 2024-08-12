import React from 'react'

export default function Pagination({goToNext,goToPrev}) {
  return (
    <div>
   { goToPrev && <button onClick={goToPrev}>Prev</button>}
   { goToNext && <button onClick={goToNext}>Next</button>}
    </div>
  )
}
