import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from './components/Nav';
import './layout.css';
export function Layout() {
    return (
        <main>
            <Nav />
            <section className='container-router'>
                <Outlet />
            </section>
        </main>
    );
}