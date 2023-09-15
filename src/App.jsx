import { Routes, Route } from 'react-router-dom';
import { routes } from './router/router';
import React from 'react';

export default function App() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route path={route.path} element={route.element} key={index}/>
      ))}
    </Routes>
  );
}
