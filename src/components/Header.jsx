import * as React from 'react'
import '../styles/header.css'
import githubD from '../assets/dark-mode/github.svg'
import linkedinD from '../assets/dark-mode/linkedin.svg'
import gmailD from '../assets/dark-mode/gmail.svg'
import githubL from '../assets/light-mode/github.svg'
import linkedinL from '../assets/light-mode/linkedin.svg'
import gmailL from '../assets/light-mode/gmail.svg'
import light from '../assets/dark-mode/light.svg'
import dark from '../assets/light-mode/dark.svg'
import { useThemeContext } from './ThemeContext'
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'


export default function Headerv2() {
  const { mode, toggleMode } = useThemeContext()
  const handleThemeToggle = () => {
    toggleMode()
    document.body.setAttribute('data-theme', mode)
  }
  const GmailButton = () => {
    window.open('mailto:andreirive2003@gmail.com', '_blank')
  }
  const LinkedInButton = () => {
    window.open('https://www.linkedin.com/in/andrei-rivera/', '_blank')
  }
  const GitHubButton = () => {
    window.open('https://github.com/Andrei-R1', '_blank')
  }

  return (
    <AppBar position="static">
      <Toolbar sx={{ bgcolor: 'background.default', color: 'text.primary', display: 'flex'}}>
        <Typography variant="h6" component="div">
          <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            HOME
          </a>
        </Typography>
        <Typography variant="h6" component="div">
          <a href="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
            PROJECTS
          </a>
        </Typography>
        <Typography variant="h6" component="div">
          <a href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            CONTACT
          </a>
        </Typography>
        <IconButton onClick={GmailButton}>
          <img src={mode === 'dark' ? gmailD : gmailL} alt="" />
        </IconButton>
        <IconButton onClick={LinkedInButton}>
          <img src={mode === 'dark' ? linkedinD : linkedinL} alt="" />
        </IconButton>
        <IconButton onClick={GitHubButton}>
          <img src={mode === 'dark' ? githubD : githubL} alt="" />
        </IconButton>
        <IconButton onClick={handleThemeToggle}>
          <img src={mode === 'dark' ? light : dark} alt="" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
