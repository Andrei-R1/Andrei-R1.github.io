import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Home from '../pages/Home';
import { createHashRouter } from 'react-router-dom';

export const router = createHashRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/projects',
    element: <Projects/>
  }
]);