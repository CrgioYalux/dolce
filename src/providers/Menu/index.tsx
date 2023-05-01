import { createContext, useContext, useState, useRef, useEffect } from "react";

import type { MenuItem, Menu, MenuState, MenuActions, MenuContextProvider, OrderedFromMenu } from "./utils";
import { getMenuItem, switchMenuItemAdded } from './helpers';

import { INITAL_MENU_CONTEXT, INITIAL_MENU_STATE } from "./consts";

const MenuContext = createContext<MenuContextProvider>(INITAL_MENU_CONTEXT);

interface MenuProviderProps {
    children: React.ReactNode;
    initialState: MenuState | undefined;
};

const MenuProvider: React.FC<MenuProviderProps> = ({ children, initialState = INITIAL_MENU_STATE }) => {
    const [state, setState] = useState<MenuState>(initialState);
    const orderedRef = useRef<OrderedFromMenu | null>(null);

    useEffect(() => {
        if (orderedRef.current) return;
        orderedRef.current = new Map<string, MenuItem[]>();
    }, []);

    const addToOrdered = (idsList: number[]): MenuItem[][] | undefined => {
        if (!orderedRef.current) return undefined;

        const key = idsList.slice(0, idsList.length - 1).join('');
        const menuItems: MenuItem[] = [];

        for (let i = 1; i <= idsList.length; i++) {
            const menuItem = getMenuItem(state.menu, idsList.slice(0, i));
            if (!menuItem) break;
            const { values, ...rest } = menuItem;

            menuItems.push(rest);                       
        }
        
        if (!(idsList.length === menuItems.length)) return;

        const ordered = orderedRef.current.set(key, menuItems);
        return Array.from(ordered.values());
    };

    const actions: MenuActions = {
        setMenu: (menu: Menu) => {
            setState((prev) => ({ ...prev, menu: menu })); 
        },
        pickFromMenu: (idsList: number[]) => {
            if (!idsList.length) return;

            const ordered = addToOrdered(idsList);
            if (!ordered) return;

            const menu = switchMenuItemAdded(state.menu, idsList);
            if (menu.length === 0) return;

            setState({ menu, ordered });
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

export type { MenuState };
export { useMenuContext };
export default MenuProvider;
