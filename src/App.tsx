import { useState } from 'react';

import HeaderBar from './components/HeaderBar';
import NavBarMenu from './components/NavBarMenu';

import './App.css';
import ShoppingCartMenu from './components/ShoppingCartMenu';

function App() {
    const [navBarMenuOpen, setNavBarMenuOpen] = useState<boolean>(false);
    const [shoppingCarMenuOpen, setShoppingCartMenuOpen] = useState<boolean>(false);

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
        <div className={`App ${shoppingCarMenuOpen ? '--is-blurred' : '--is-not-blurred'}`}>
            <HeaderBar 
                className='App__HeaderBar'
                events={{
                    shoppingCart: {
                        isOpen: shoppingCarMenuOpen
                    }
                }}
                handlers={{
                    hamburgerMenu: {
                        onClick: () => setNavBarMenuOpen(true)
                    },
                    shoppingCart: {
                        onClick: () => setShoppingCartMenuOpen(prev => !prev)
                    },
                }}
            >
                {shoppingCarMenuOpen && <ShoppingCartMenu className='App__ShoppingCartMenu' />}
            </HeaderBar>
            <main>
                <h2>Welcome</h2>
                <h6>More soon...</h6>
            </main>
        </div>
    );
};

export default App;
