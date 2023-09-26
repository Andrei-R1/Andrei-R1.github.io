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
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

export default function Header() {
  const { mode, toggleMode } = useThemeContext()
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleThemeToggle = () => {
    toggleMode()
    document.body.setAttribute('data-theme', mode)
  }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
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
    <AppBar className="header" position="static" sx={{boxShadow:'none'}}>
      <Container maxWidth="x1" sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/#/"
                  sx={{
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'text.primary',
                    textDecoration: 'none',
                  }}>
                  HOME
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/#/projects"
                  sx={{
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'text.primary',
                    textDecoration: 'none',
                  }}>
                  PROJECTS
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/#/contact"
                  sx={{
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'text.primary',
                    textDecoration: 'none',
                  }}>
                  CONTACT
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box className="left-header" sx={{ paddingLeft:5, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/#/"
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'text.primary',
                  textDecoration: 'none',
                  mr: 5,
                  ml: 5,
                }}>
                HOME
              </Typography>
            </Button>
            <Typography
              variant="h5"
              noWrap
              component="p"
              sx={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '2rem',
                color: 'text.primary',
                alignSelf: 'center',
              }}>
              |
            </Typography>
            <Button>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/#/projects"
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'text.primary',
                  textDecoration: 'none',
                  mr: 5,
                  ml: 5,
                }}>
                PROJECTS
              </Typography>
            </Button>
            <Typography
              variant="h5"
              noWrap
              component="p"
              sx={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '2rem',
                color: 'text.primary',
                alignSelf: 'center',
              }}>
              |
            </Typography>
            <Button>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/#/contact"
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'text.primary',
                  textDecoration: 'none',
                  mr: 5,
                  ml: 5,
                }}>
                CONTACT
              </Typography>
            </Button>
          </Box>
          <Box className="right-header" sx={{ paddingRight:5, display: { xs: 'flex', md: 'flex' }}}>
            <IconButton onClick={GmailButton} sx={{mr:2, ml:2}}>
              <img src={mode === 'dark' ? gmailD : gmailL} alt=""/>
            </IconButton>
            <IconButton onClick={LinkedInButton} sx={{mr:2, ml:2}}>
              <img src={mode === 'dark' ? linkedinD : linkedinL} alt="" />
            </IconButton>
            <IconButton onClick={GitHubButton} sx={{mr:2, ml:2}}>
              <img src={mode === 'dark' ? githubD : githubL} alt="" />
            </IconButton>
            <IconButton onClick={handleThemeToggle} sx={{mr:2, ml:2}}>
              <img src={mode === 'dark' ? light : dark} alt="" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
