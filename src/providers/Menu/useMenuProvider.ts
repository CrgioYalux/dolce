import { useContext } from "react";

import type { MenuContextProvider } from "./utils";
import { MenuContext } from "./index";

const useMenuContext = () => useContext<MenuContextProvider>(MenuContext);

export default useMenuContext;
