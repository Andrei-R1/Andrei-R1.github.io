import React, { useEffect, useState } from 'react'
import '../styles/Projects.css'
import githubD from '../assets/dark-mode/github.svg'
import githubL from '../assets/light-mode/github.svg'
import Header from '../components/Header'
import Box from '@mui/material/Box'
import { useThemeContext } from '../components/ThemeContext'

function Projects() {
  const { mode } = useThemeContext()
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('projects.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])
  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      <Header />
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <div className="left-box">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="right-box">
              <h1 className='p1'>{project.title}</h1>
              <h2 className='p2'>{project.description}</h2>
              <h2 className='p3'>{project.date}</h2>
              <div className="link">
                <h2>{'Link= ' + project.url}</h2>
                <img
                  src={mode === 'dark' ? githubD : githubL}
                  alt="GitHub"
                  onClick={() => {
                    window.open(project.url, '_blank')
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Box>
  )
}

export default Projects
