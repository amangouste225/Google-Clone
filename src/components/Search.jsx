import SearchIcon from '@mui/icons-material/Search'
import MicNoneIcon from '@mui/icons-material/MicNone'
import './Search.css'
import { Button } from '@mui/material'

function Search() {
  return (
    <div className='search'>
      <div className='search__input'>
        <SearchIcon />
        <input type='text' />
        <MicNoneIcon />
      </div>

      <div className='search__buttons'>
        <Button variant='outlined'>Google Search</Button>
        <Button variant='outlined'>I'm Feeling Lucky </Button>
      </div>
    </div>
  )
}

export default Search
