import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from './components/Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './layout.css';

export function Layout() {
  return (
    <main>
      <Nav />
      <section className='container-router'>
        <Outlet />
        <ToastContainer />
      </section>
    </main>
  );
}
