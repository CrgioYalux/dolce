import menu from './consts';
import type { MenuItem } from './utils';

import './Menu.css';

interface MenuListProps {
    list: MenuItem[];
    className?: string;
    id?: string | number | null;
    offset?: {
        omitFirst: boolean;
        increment: number;
    };
};

const MenuList: React.FC<MenuListProps> = ({ list, className, id = '', offset = { omitFirst: true, increment: 2 } }) => {
    const listStyle = {
        '--MenuList-left-offset': offset.increment
    } as React.CSSProperties;

    const itemStyle = {
        '--MenuListItem-left-offset': offset.increment
    } as React.CSSProperties;

    return (
        <ul
            className={`MenuList ${className ?? ''} ${offset.omitFirst ? '' : '--apply-offset'}`}
            style={listStyle}
        >
            {list.map((item) => {
                const description = item.description ? `(${item.description})` : '';

                return (
                    <li 
                        key={id?.toString().concat(item.id.toString())}
                        className='MenuListItem'
                        style={itemStyle}
                    >
                        <strong className='MenuListItem__title'>{item.title}</strong>
                        <small className='MenuListItem__description'>{description}</small>
                        {item.values && <MenuList
                                key={id?.toString().concat(item.id.toString())}
                                list={item.values}
                                offset={{ omitFirst: false, increment: offset.increment }}
                            />
                        }
                    </li>
                );
            })}
        </ul>
    );
};

interface MenuProps {
    className?: string;
};

const Menu: React.FC<MenuProps> = ({ className }) => {
    return (
        <div className={`Menu ${className ?? ''}`}>
            <MenuList list={menu} offset={{ omitFirst: true, increment: 30 }} />
        </div>
    );
};

export default Menu;
