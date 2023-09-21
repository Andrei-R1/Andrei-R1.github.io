import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Home from '../pages/Home';

export const routes = [
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
];