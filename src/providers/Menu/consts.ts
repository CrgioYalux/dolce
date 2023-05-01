import type { MenuState, MenuActions } from "./utils";

const INITIAL_MENU_STATE: MenuState = {
    menu: [],
    ordered: [],
};

const INITAL_MENU_CONTEXT: readonly [MenuState, MenuActions] = [
    {
        menu: [],
        ordered: [],
    },
    {
        setMenu: ([]) => {},
        pickFromMenu: ([]) => {},
    }
];

export { INITIAL_MENU_STATE, INITAL_MENU_CONTEXT };
