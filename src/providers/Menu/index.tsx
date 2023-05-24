import { createContext, useContext, useState, useRef, useEffect } from "react";

import type { MenuItem, Menu, MenuState, MenuActions, MenuContextProvider, OrderedFromMenu } from "./utils";
import { switchMenuItemAdded, switchMenuSectionCollapsibility, fromIdsListToMenuItemList, fromMenuItemListsToMenu } from './helpers';

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

    const addToOrdered = (idsList: number[]): MenuItem[][] => {
        if (!orderedRef.current) return [];

        const key = idsList.slice(0, idsList.length - 1).join('');
        const menuItems = fromIdsListToMenuItemList(state.menu, idsList);
        
        if (idsList.length !== menuItems.length) return [];

        const updatedOrdered = orderedRef.current.set(key, menuItems);
        return Array.from(updatedOrdered.values());
    };

    const actions: MenuActions = {
        setMenu: (menu: Menu) => {
            setState((prev) => ({ ...prev, menu: menu })); 
        },
        pickFromMenu: (idsList: number[]) => {
            if (!idsList.length) return;

            const orderedAsList = addToOrdered(idsList);
            if (!orderedAsList.length || !orderedAsList[0].length) return;

            const orderedAsMenu = fromMenuItemListsToMenu(orderedAsList);
            if (!orderedAsMenu.length) return;

            const updatedMenu = switchMenuItemAdded(state.menu, idsList);
            if (!updatedMenu.length) return;

            setState({ menu: updatedMenu, ordered: orderedAsMenu });
        },
        switchCollapsability: (idsList: number[]) => {
            if (!idsList.length) return;
            
            const updatedMenu = switchMenuSectionCollapsibility(state.menu, idsList);
            if (!updatedMenu.length) return;

            setState(prev => ({ menu: updatedMenu, ordered: prev.ordered }));
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
