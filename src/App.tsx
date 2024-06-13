import './styles/index.scss'
import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage.async';
import { AboutPage } from './pages/AboutPage/AboutPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames';


export const App = ()=>{
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>TOGGLE</button>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
      <Suspense fallback={'Loading ...'}>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/about'} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}