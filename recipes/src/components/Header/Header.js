import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = ({
  isAuthenticated,
  username
}) => {
    return (
        <div>

<div className={style.container}>
          <div className={style.header}>
            <div className={style.logo}>
              <h1><Link to="/"><span>Cook</span>Book</Link></h1>
            </div>
            <div className={style.menu}>
              <ul>
                {isAuthenticated ? <li className={style.welcome}>Welcome, {username.split('@')[0]}!</li> : ''}
                <li><Link to="/">Home</Link></li>
                {/* <li><Link to="/blog">Blog</Link></li> */}
                {isAuthenticated ? '' : <li><Link to="/login">Login</Link></li>}
                {isAuthenticated ? '' : <li><Link to="/register">Register</Link></li>}
                {isAuthenticated ? <li><Link to="/recipes/create">Create</Link></li> : ''}
                {isAuthenticated ? <li><Link to="/logout">Logout</Link></li> : ''}
              </ul>
            </div>
          </div>

          </div>
        </div>
    );
}

export default Header;