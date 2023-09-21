import '../styles/Home.css'
import bgImageD from '../assets/dark-mode/bg-image.svg'
import bgImageL from '../assets/light-mode/bg-image.svg'
import Header from '../components/Header'
import * as React from 'react'
import Box from '@mui/material/Box'
import { useThemeContext } from '../components/ThemeContext'

function Home() {
  const { mode } = useThemeContext()
  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      <Header />
      <div className="container">
        <div className="introduction">
          <h1 className="part1">Andrei Rivera</h1>
          <h2 className="part2">Software Developer</h2>
          <h3 className="part3">
            I'm a frontend & backend developer,
            <br />
            from Costa Rica, 20 years old, with <br />
            more than 1 year of experience.
          </h3>
        </div>
        <div className="homeImage">
          <img src={mode === 'dark' ? bgImageD : bgImageL} alt="" />
        </div>
      </div>
    </Box>
  )
}

export default Home
