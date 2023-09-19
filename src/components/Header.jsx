import * as React from 'react';
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
import { ThemeProvider, createTheme } from '@mui/material/styles';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function Header() {
  const [mode, setMode] = React.useState('dark');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
      },
    }),
    [],
  );

  const [alignment, setAlignment] = React.useState('home');
  const [links, setLinks] = React.useState([]);
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleLinks = (event, newLinks) => {
    setLinks(newLinks);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className='header'>
          <div className='left-header'>
            <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="Page">
              <ToggleButton value="home" href='/'>HOME</ToggleButton>
              <ToggleButton value="projects" href='/projects'>PROJECTS</ToggleButton>
              <ToggleButton value="contact" href='/contact'>CONTACT</ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className='right-header'>
            <ToggleButtonGroup value={links} exclusive onChange={handleLinks} aria-label="Links">
              <ToggleButton value="gmail"><img src={mode === 'dark' ? gmailD : gmailL} alt=''/></ToggleButton>
              <ToggleButton value="linkedin"><img src={mode === 'dark' ? linkedinD : linkedinL} alt=''/></ToggleButton>
              <ToggleButton value="github"><img src={mode === 'dark' ? githubD : githubL} alt=''/></ToggleButton>
              <ToggleButton value="theme"> <img src={mode === 'dark' ? light : dark} alt='' onClick={colorMode.toggleColorMode}/> </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default Header;