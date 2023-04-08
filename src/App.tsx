import { useState } from 'react';

import HeaderBar from './components/HeaderBar';
import NavBarMenu from './components/NavBarMenu';

import './App.css';

function App() {
    const [navBarMenuOpen, setNavBarMenuOpen] = useState<boolean>(false);

    if (navBarMenuOpen) return (
        <div className='App'>
            <NavBarMenu 
                anchors={[
                    {
                        href: '/',
                        label: 'Inicio'
                    },
                    {
                        href: '/contacto',
                        label: 'Contacto'
                    },
                    {
                        href: '/preguntasfecuentes',
                        label: 'Preguntas frecuentes'
                    },
                    {
                        href: '/quiensoy',
                        label: 'Quién soy?'
                    },
                ]}
                handlers={{
                    closeBT: {
                        onClick: () => setNavBarMenuOpen(false)
                    }
                }}
            />
        </div>
    );

    return (
        <div className='App'>
            <HeaderBar 
                handlers={{
                    hamburgerMenu: {
                        onClick: () => setNavBarMenuOpen(true)
                    }
                }}
            
            />
            <main>
                <h2>Welcome</h2>
                <h6>More soon...</h6>
            </main>
        </div>
    );
};

export default App;
