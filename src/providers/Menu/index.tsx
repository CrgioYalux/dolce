import { createContext, useContext, useState } from "react";

import type { Menu, MenuState, MenuActions, MenuContextProvider } from "./utils";
import { switchMenuItemAdded } from './helpers';

const MenuContext = createContext<MenuContextProvider>([
    {menu: []},
    {
        setMenu: ([]) => {},
        pickFromMenu: ([]) => {},
    }
]);

interface MenuProviderProps {
    children: React.ReactNode;
    initialState: MenuState;
};

const MenuProvider: React.FC<MenuProviderProps> = ({ children, initialState }) => {
    const [state, setState] = useState<MenuState>(initialState);

    const actions: MenuActions = {
        setMenu: (menu: Menu) => {
            setState((prev) => ({ ...prev, menu: menu })); 
        },
        pickFromMenu: (idsList: number[]) => {
            if (!idsList.length) return;
            setState((prev) => {
                const out = switchMenuItemAdded(prev.menu, idsList);
                if (!out.length) return prev;
                return { ...prev, menu: out };
            });
        },
    };

    const value: MenuContextProvider = [state, actions];

    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    );
};

const useMenuContext = () => useContext<MenuContextProvider>(MenuContext);

export { useMenuContext };
export default MenuProvider;
