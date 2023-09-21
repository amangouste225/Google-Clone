import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps'
import { Avatar } from '@mui/material'
import { GoogleImage } from '../../images'
import Search from '../../components/Search'

function Home() {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__headerLeft'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='home__headerRight'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className='home__body'>
        <figure className='googleImage'>
          <img src={GoogleImage} alt='' />
        </figure>

        <Search hideBtn />
      </div>

      <div className='home__footer'></div>
    </div>
  )
}

export default Home
