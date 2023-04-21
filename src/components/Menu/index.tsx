import { useMenuContext } from '../../providers/Menu';

import MenuList from './MenuList';

import './Menu.css';

interface MenuProps {
    className?: string;
};

const Menu: React.FC<MenuProps> = ({ className }) => {
    const [state, actions] = useMenuContext();

    return (
        <div className={`Menu ${className ?? ''}`}>
            <MenuList
            list={state.menu}
            handlers={{
                onListItemClick: (idsList: number[]) => { 
                    actions.pickFromMenu(idsList);
                }
            }}
            offset={{ omitFirst: true, increment: 30 }}
            />
        </div>
    );
};

export default Menu;
