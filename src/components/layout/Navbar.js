import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // isAuth 라는 고정 변수를 생성할껀데, 이를 setIsAuth 라는 함수로만 변경을 받도록 하겠다.
  // 초기값은 false이다.
  const [isAuth, setIsAuth] = useState(false);

  // [] 안에 들어가는 것이 변할때만 동작하도록 하겠다. 아무것도 없으니까 단 한번만 동작한다.
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    }
  }, []);

  // 아래의 것을 렌더링 해라
  // 로그인 되어있다면 로그아웃 페이지를 보여주도록
  // 로그인 되어있지 않다면 로그인 페이지를 보여주도록
  return (
    <nav>
      <h1>Django React Auth</h1>
      <ul>
        {isAuth === true ? (
          <Fragment>
            {' '}
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            {' '}
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;