import '../styles/Home.css';
import bgImageD from '../assets/dark-mode/bg-image.svg';
import bgImageL from '../assets/light-mode/bg-image.svg';
import Header from '../components/Header';
import { useTheme } from '@mui/material';
import * as React from 'react';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function Home() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <>
      <Header/>
      <div className='container'>
        <div className="introduction">
          <h1 className="part1">Andrei Rivera</h1>
          <h2 className="part2">Software Developer</h2>
          <h3 className="part3">I'm a frontend & backend developer,<br/>from Costa Rica, 20 years old, with <br/>more than 1 year of experience.</h3>
        </div>
        <div className="homeImage">
          <img src={bgImageD} alt=''/>
        </div>
      </div>
    </>
  )
}

export default Home;