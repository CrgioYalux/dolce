type MenuItem = {
    id: number,
    title: string,
    added: boolean,
    isOption: boolean,
    collapsed?: boolean;
    values?: MenuItem[],
    description?: string,
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
