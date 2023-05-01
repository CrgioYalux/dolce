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
            } else if (idsList.length === 1) {
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

        return out;
    }

    return walk(menu, idsList);
}

export { getMenuItem, switchMenuItemAdded };
