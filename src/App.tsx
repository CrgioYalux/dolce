import { useEffect, useState } from 'react';
import { useMenuContext } from './providers/Menu';

import HeaderBar from './components/HeaderBar';
import NavBarMenu from './components/NavBarMenu';
import Menu from './components/Menu';
import ShoppingCartMenu from './components/ShoppingCartMenu';

import { MENU } from './consts';

import './App.css';

function App() {
    const [navBarMenuOpen, setNavBarMenuOpen] = useState<boolean>(false);
    const [shoppingCarMenuOpen, setShoppingCartMenuOpen] = useState<boolean>(false);
    const [_, actions] = useMenuContext();

    useEffect(() => {
        console.log('fetching and setting');
        actions.setMenu(MENU);
    }, []);

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
                <Menu />
            </main>
        </div>
    );
};

export default App;
