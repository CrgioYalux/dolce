import { useState } from 'react';

import MenuList from './MenuList';

import type { MenuItem } from './utils';
import { findInMenuAndUpdate } from './utils';

import { MENU } from './consts';

import './Menu.css';

interface MenuProps {
    className?: string;
};

const Menu: React.FC<MenuProps> = ({ className }) => {
    const [menu, setMenu] = useState<MenuItem[]>(() => MENU);

    return (
        <div className={`Menu ${className ?? ''}`}>
            <MenuList
            list={menu}
            handlers={{
                onListItemClick: (idsList: number[]) => { 
                    if (!idsList.length) return;
                    setMenu((prev) => {
                        const out = findInMenuAndUpdate(prev, idsList);
                        if (!out.length) return prev;
                        return out;
                    });
                }
            }}
            offset={{ omitFirst: true, increment: 30 }}
            />
        </div>
    );
};

export default Menu;
