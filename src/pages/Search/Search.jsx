import SearchIcon from '@mui/icons-material/Search'
import MicNoneIcon from '@mui/icons-material/MicNone'
import './Search.css'

function Search() {
  return (
    <div className='search'>
      <div className='search__input'>
        <SearchIcon />
        <input type='text' />
        <MicNoneIcon />
      </div>
    </div>
  )
}

export default Search
