import MenuList from './MenuList';

import { MENU } from './consts';

import './Menu.css';

interface MenuProps {
    className?: string;
};

const Menu: React.FC<MenuProps> = ({ className }) => {
    return (
        <div className={`Menu ${className ?? ''}`}>
            <MenuList list={MENU} offset={{ omitFirst: true, increment: 30 }} />
        </div>
    );
};

export default Menu;
