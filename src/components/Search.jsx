import SearchIcon from '@mui/icons-material/Search'
import MicNoneIcon from '@mui/icons-material/MicNone'
import './Search.css'
import { Button } from '@mui/material'
import { useState } from 'react'

function Search() {
  const [input, setInput] = useState('')

  const search = e => {
    e.preventDefault()
  }

  return (
    <form className='search'>
      <div className='search__input'>
        <SearchIcon />
        <input
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <MicNoneIcon />
      </div>

      <div className='search__buttons'>
        <Button variant='outlined' onClick={search} type='submit'>
          Google Search
        </Button>
        <Button variant='outlined'>I'm Feeling Lucky </Button>
      </div>
    </form>
  )
}

export default Search
