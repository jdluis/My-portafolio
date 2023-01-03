import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from './components/Nav';
export function Layout() {
    return (
        <main>
            <Nav />
            <section>
                <Outlet />
            </section>
        </main>
    );
}