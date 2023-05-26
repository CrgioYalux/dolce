import type { MenuItem } from "./utils";

function getMenuItem(menu: MenuItem[] | undefined, idsList: number[]): MenuItem | undefined {
    if (!menu) return undefined;

    function walk(menu: MenuItem[], idsList: number[]): MenuItem | undefined {
        for (let i = 0; i < menu.length; i++) {
            const menuItem = menu[i];
            if (menuItem.id === idsList[0]) {
                if (idsList.length === 1) return menuItem;
                if (!menuItem.isOption) return walk(menuItem.values, idsList.slice(1));
            }
        }

        return undefined;
    }

    return walk(menu, idsList);
}

function switchMenuItemAdded(menu: MenuItem[] | undefined, idsList: number[]): MenuItem[] {
    function walk(menu: MenuItem[] | undefined, idsList: number[]): MenuItem[] {
        if (!menu) return [];

        const out: MenuItem[] = [];

        for (let i = 0; i < menu.length; i++) {
            const menuItem = menu[i];
            
            if (menuItem.id !== idsList[0]) {
                out.push({
                    ...menuItem,
                    added: idsList.length === 1 ? false : menuItem.added,
                });
                continue;
            }
            
            if (!menuItem.isOption) {
                out.push({
                    ...menuItem,
                    added: true,
                    values: walk(menuItem.values, idsList.slice(1)),
                });
                continue;
            }

            out.push({
                ...menuItem,
                added: idsList.length === 1,
            });
        }

        return out;
    }

    return walk(menu, idsList);
}

function switchMenuSectionCollapsibility(menu: MenuItem[] | undefined, idsList: number[]): MenuItem[] {
    function walk(menu: MenuItem[] | undefined, idsList: number[]): MenuItem[] {
        if (!menu) return [];

        const out: MenuItem[] = [];

        for (let i = 0; i < menu.length; i++) {
            const menuItem = menu[i];

            if (menuItem.id !== idsList[0]) {
                out.push(menuItem);
                continue;
            }

            if (!menuItem.isOption) {
                out.push({
                    ...menuItem,
                    collapsed: idsList.length === 1 ? !menuItem.collapsed : menuItem.collapsed,
                    values: idsList.length === 1 ? menuItem.values : walk(menuItem.values, idsList.slice(1)),
                });
            }
        }

        return out;
    }

    return walk(menu, idsList);
}

function fromIdsListToMenuItemList(menu: MenuItem[], idsList: number[]): MenuItem[] {
    const out: MenuItem[] = [];

    for (let i = 1; i <= idsList.length; i++) {
        const menuItem = getMenuItem(menu, idsList.slice(0, i));
        if (!menuItem) break;

        out.push(menuItem.isOption ? menuItem : { ...menuItem, values: [] });                       
    }
    
    return out;
}

function fromMenuItemListToMenu(ordered: MenuItem[]): MenuItem[] {
    if (!ordered.length) return [];
    const menuItem = ordered[0];
    return menuItem.isOption ? [menuItem] : [{ ...menuItem, values: [...menuItem.values, ...fromMenuItemListToMenu(ordered.slice(1))]}];
}

function fromMenuItemListsToMenu(menuItemsLists: MenuItem[][]): MenuItem[] {
    let out: MenuItem[] = [];

    for (let i = 0; i < menuItemsLists.length; i++) {
        const menu = fromMenuItemListToMenu(menuItemsLists[i]);
        if (!menu.length) break;

        let alreadyIn = false;

        for (let j = 0; j < out.length; j++) {
            if (out[j].id === menuItemsLists[i][0].id) {
                const children = fromMenuItemListToMenu([out[j], ...menuItemsLists[i].slice(1)]);
                if (!children.length) break;

                alreadyIn = true;
                out = out.map((item, index) => index === j ? children[0] : item);

                break;
            }
        }

        if (!alreadyIn) out.push(menu[0]);
    }

    return out;
}

export { getMenuItem, switchMenuItemAdded, switchMenuSectionCollapsibility, fromIdsListToMenuItemList, fromMenuItemListsToMenu };
