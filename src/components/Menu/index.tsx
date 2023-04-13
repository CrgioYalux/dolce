import MenuList from './MenuList';

import { MENU } from './consts';

import './Menu.css';
import { MenuItem } from './utils';

interface MenuProps {
    className?: string;
};

const Menu: React.FC<MenuProps> = ({ className }) => {
    return (
        <div className={`Menu ${className ?? ''}`}>
            <MenuList
            list={MENU}
            handlers={{
                onListItemClick: (idsList: number[]) => { 
                    let currList: MenuItem[] | undefined = MENU[idsList[0]].values;

                    for (let i = 1; i < idsList.length - 1; i++) {
                        if (!currList) break;
                        currList = currList[idsList[i]].values;
                    }
                    if (!currList) return;

                    const listItem: MenuItem = currList[idsList[idsList.length - 1]];
                    console.log({ listItem });
                }
            }}
            offset={{ omitFirst: true, increment: 30 }}
            />
        </div>
    );
};

export default Menu;
