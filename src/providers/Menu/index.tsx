import { createContext, useState } from "react";
import type { Menu, MenuState, MenuActions, MenuContextProvider } from "./utils";

const MenuContext = createContext<MenuContextProvider>([
    {menu: []},
    {}
]);

interface MenuProviderProps {
    children: React.ReactNode;
    menu: Menu;
};

const MenuProvider: React.FC<MenuProviderProps> = ({ children, menu }) => {
    const [state, setState] = useState<MenuState>(() => {
        console.log('asds');
        return { menu };
    });

    const actions: MenuActions = {
    };

    const value: MenuContextProvider = [state, actions];

    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    );
};

export { MenuContext };
export default MenuProvider;
