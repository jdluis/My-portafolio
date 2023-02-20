import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Works } from './routes/Works';
import { Contact } from './routes/Contact';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='works' element={<Works />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Navigate replace to='/' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
