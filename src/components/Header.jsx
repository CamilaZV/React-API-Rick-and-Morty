import React from 'react'

function Header({numPage, setNumPage}) {
  return (
    <header className="d-flex justify-content-around">
    <button
      onClick={() => setNumPage(numPage - 1)}
      className="btn btn-primary"
    >
      Previus
    </button>
    <h3 className='text-black'>Page : {numPage}</h3>
    <button
      onClick={() => setNumPage(numPage + 1)}
      className="btn btn-primary"
    >
      Next
    </button>
  </header>
  )
}

export default Header