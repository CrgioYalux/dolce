type MenuItem = {
    id: number,
    title: string,
    description?: string,
    values?: MenuItem[],
    added: boolean;
    isOption: boolean;
};

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
            } else {
                out.push({
                    ...menu[i],
                    values: walk(menu[i].values, idsList.slice(1)),
                });
            }
        } else { 
            out.push({
                ...menu[i],
                values: walk(menu[i].values, []),
            });
        }
    }

    return out;
}

function findInMenuAndUpdate(menu: MenuItem[] | undefined, idsList: number[]): MenuItem[] {
    return walk(menu, idsList);
}

export type { MenuItem };
export { findInMenuAndUpdate };
