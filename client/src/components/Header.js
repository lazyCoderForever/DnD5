import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, NavLink, useHistory } from "react-router-dom";

const Header = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = (e) => {
    e.preventDefault();
    auth.logout();
    history.push("/");
  };

  if (auth.isAuthenticated) {
    return (
      <div className='row'>
        <Link to='/'>
          <div className='col s3 logo'></div>
        </Link>
        <div className='col s5 offset-s1'>
          <ul className='list_links'>
            <li className='link'>
              <NavLink to='/create'>
                <button className='create waves-effect pink lighten-1 btn'>
                  Создать нового персонажа
                </button>
              </NavLink>
            </li>
            <li className='link'>
              <NavLink to='/vault/:id'>
                <button className='log_In waves-effect pink lighten-1 btn'>
                  Персонажи
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='col s3 '>
          <ul className='list_links'>
            <li className='link'>
              <button
                className='log_In waves-effect pink lighten-1 btn'
                onClick={logoutHandler}
              >
                Выйти
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className='row'>
      <Link to='/'>
        <div className='col s3 logo'></div>
      </Link>
      <div className='col s7 offset-s2'>
        <ul className='list_links'>
          <li className='link'>
            <NavLink to='/create'>
              <button className='create waves-effect pink lighten-1 btn'>
                Создать нового персонажа
              </button>
            </NavLink>
          </li>
          <li className='link'>
            <Link to='/auth'>
              <button className='log_In waves-effect pink lighten-1 btn'>
                Авторизация
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
