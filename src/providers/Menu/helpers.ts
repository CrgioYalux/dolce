import type { MenuItem } from "./utils";

function getMenuItem(menu: MenuItem[] | undefined, idsList: number[]): MenuItem | undefined {
    function walk(menu: MenuItem[] | undefined, idsList: number[]): MenuItem | undefined {
        if (!menu) return undefined;
        if (!menu.length) return undefined;

        for (let i = 0; i < menu.length; i++) {
            if (menu[i].id === idsList[0]) {
                if (idsList.length === 1) return menu[idsList[0]];
                return walk(menu[i].values, idsList.slice(1));
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
            if (menu[i].id === idsList[0]) {
                if (idsList.length === 1) {
                    out.push({
                        ...menu[i],
                        added: !menu[i].added,
                        values: walk(menu[i].values, []),
                    });
                }
                else {
                    out.push({
                        ...menu[i],
                        added: !getMenuItem(menu, idsList)?.added ?? false,
                        values: walk(menu[i].values, idsList.slice(1)),
                    });
                }
            } else {
                if (idsList.length === 1) {
                    out.push({
                        ...menu[i],
                        added: false,
                        values: walk(menu[i].values, []),
                    });
                } else { 
                    out.push({
                        ...menu[i],
                        values: walk(menu[i].values, []),
                    });
                }
            }
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
            if (menu[i].id !== idsList[0]) {
                out.push({
                    ...menu[i],
                    values: walk(menu[i].values, []),
                });
                continue;
            }

            if (idsList.length === 1) {
                out.push({
                    ...menu[i],
                    collapsed: !menu[i].collapsed,
                    values: walk(menu[i].values, []),
                });
            }
            else {
                out.push({
                    ...menu[i],
                    values: walk(menu[i].values, idsList.slice(1)),
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
        const { values, ...rest } = menuItem;

        out.push(rest);                       
    }
    
    return out;
}

function fromMenuItemListToMenu(ordered: MenuItem[]): MenuItem[] {
    // [[0,1,1], [0,2,1]]
    // [0: [1: [1], 2: [1]]]
    if (!ordered.length) return [];
    return [{
        ...ordered[0],
        values: [...(ordered[0].values ?? []), ...fromMenuItemListToMenu(ordered.slice(1))] as MenuItem[],
    }];
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

                out = out.map((item, index) => {
                    if (index === j) return children[0];
                    return item;
                });

                break;
            }
        }

        if (!alreadyIn) out.push(menu[0]);
    }

    return out;
}

export { getMenuItem, switchMenuItemAdded, switchMenuSectionCollapsibility, fromIdsListToMenuItemList, fromMenuItemListsToMenu };
