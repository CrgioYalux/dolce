type MenuItemShared = {
    isOption: false,

    id: number,

    title: string,
    description: string,

    added: boolean,
    required: boolean,
    collapsed: boolean,

    values: MenuItem[],
};

type MenuItemOption = {
    isOption: true,

    id: number,

    title: string,
    description: string,

    added: boolean,
}

type MenuItem = MenuItemShared | MenuItemOption;

type MenuItem_bak = {
    id: number,
    title: string,
    added: boolean,
    isOption: boolean,
    description?: string,

    values?: MenuItem_bak[],
    required?: boolean,
    collapsed?: boolean,
};

type Menu = MenuItem[];

interface MenuState {
    menu: Menu;
    ordered: Menu;
};

interface MenuActions {
    setMenu: (menu: Menu) => void;
    pickFromMenu: (idsList: number[]) => void;
    switchCollapsability: (idsList: number[]) => void;
};

type MenuContextProvider = readonly [
    state: MenuState,
    actions: MenuActions,
];

type OrderedFromMenu = Map<string, MenuItem[]>;

export type { MenuItem, Menu, MenuState, MenuActions, MenuContextProvider, OrderedFromMenu };
