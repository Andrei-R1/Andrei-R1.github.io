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
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useThemeContext } from './ThemeContext'

export default function Header() {
  const { mode, toggleMode } = useThemeContext()
  const handleThemeToggle = () => {
    toggleMode()
    document.body.setAttribute('data-theme', mode)
  }

  const [alignment, setAlignment] = React.useState('home')
  const [links, setLinks] = React.useState([])

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment)
    }
  }
  const handleLinks = (event, newLinks) => {
    setLinks(newLinks)
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
    <div className="header">
      <div className="left-header">
        <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="Page">
          <ToggleButton
            value="home"
            selected={false}
            href="/"
            sx={{
              border: 'none',
              fontSize: '28px',
              color: 'text.primary',
              paddingLeft: '15%',
              paddingRight: '15%',
            }}>
            HOME
          </ToggleButton>
          <span>|</span>
          <ToggleButton
            value="projects"
            selected={false}
            href="/projects"
            sx={{
              border: 'none',
              fontSize: '28px',
              color: 'text.primary',
              paddingLeft: '15%',
              paddingRight: '15%',
            }}>
            PROJECTS
          </ToggleButton>
          <span>|</span>
          <ToggleButton
            value="contact"
            selected={false}
            href="/contact"
            sx={{
              border: 'none',
              fontSize: '28px',
              color: 'text.primary',
              paddingLeft: '15%',
              paddingRight: '15%',
            }}>
            CONTACT
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="right-header">
        <ToggleButtonGroup value={links} exclusive onChange={handleLinks} aria-label="Links">
          <ToggleButton
            value="gmail"
            selected={false}
            onClick={GmailButton}
            sx={{ border: 'none', paddingLeft: '15%', paddingRight: '15%' }}>
            <img src={mode === 'dark' ? gmailD : gmailL} alt="" />
          </ToggleButton>
          <ToggleButton
            value="linkedin"
            selected={false}
            onClick={LinkedInButton}
            sx={{ border: 'none', paddingLeft: '15%', paddingRight: '15%' }}>
            <img src={mode === 'dark' ? linkedinD : linkedinL} alt="" />
          </ToggleButton>
          <ToggleButton
            value="github"
            selected={false}
            onClick={GitHubButton}
            sx={{ border: 'none', paddingLeft: '15%', paddingRight: '15%' }}>
            <img src={mode === 'dark' ? githubD : githubL} alt="" />
          </ToggleButton>
          <ToggleButton
            value="theme"
            selected={false}
            sx={{ border: 'none', paddingLeft: '15%', paddingRight: '15%' }}>
            {' '}
            <img src={mode === 'dark' ? light : dark} alt="" onClick={handleThemeToggle} />{' '}
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  )
}
