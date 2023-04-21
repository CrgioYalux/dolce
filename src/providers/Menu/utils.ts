type MenuItem = {
    id: number,
    title: string,
    description?: string,
    values?: MenuItem[],
    added: boolean;
    isOption: boolean;
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
