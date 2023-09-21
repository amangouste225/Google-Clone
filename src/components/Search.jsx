import SearchIcon from '@mui/icons-material/Search'
import MicNoneIcon from '@mui/icons-material/MicNone'
import './Search.css'
import { Button } from '@mui/material'
import { useState } from 'react'
import { useRef } from 'react'

function Search({ hideBtn = false }) {
  const [input, setInput] = useState('')

  useRef(() => {}, [])

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

      {input.length > 0 ? (
        <div className='search__buttons'>
          <Button variant='outlined' onClick={search} type='submit'>
            Google Search
          </Button>
          <Button variant='outlined'>I'm Feeling Lucky </Button>
        </div>
      ) : (
        <div className='search__buttons'>
          <Button
            variant='outlined'
            onClick={search}
            type='submit'
            className='btn__hidden'
          >
            Google Search
          </Button>
          <Button variant='outlined' className='btn__hidden'>
            I'm Feeling Lucky{' '}
          </Button>
        </div>
      )}
    </form>
  )
}

export default Search
