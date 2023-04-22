type MenuItem = {
    id: number,
    title: string,
    added: boolean,
    isOption: boolean,
    values?: MenuItem[],
    description?: string,
};

type Menu = MenuItem[];

interface MenuState {
    menu: Menu;
};

interface MenuActions {
    setMenu: (menu: Menu) => void;
    pickFromMenu: (idsList: number[]) => void;
};

type MenuContextProvider = readonly [
    state: MenuState,
    actions: MenuActions,
];

export type { MenuItem, Menu, MenuState, MenuActions, MenuContextProvider };
