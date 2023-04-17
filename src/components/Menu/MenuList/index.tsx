import type { MenuItem } from "../utils";

import './MenuList.css';

interface WalkProps {
    list: MenuItem[];
    ids?: number[];

    className?: string;

    handlers?: {
        onListItemClick?: (idsList: number[]) => void;
    };

    offset: {
        omitFirst: boolean;
        increment: number;
    };
};

const Walk: React.FC<WalkProps> = ({
    list,
    ids = [],
    className,
    handlers,
    offset
}) => {
    const listStyle = {
        '--MenuList-left-offset': offset.increment
    } as React.CSSProperties;

    return (
        <ul
        className={`MenuList ${className ?? ''} ${offset.omitFirst ? '' : '--apply-offset'}`}
        style={listStyle}
        >
            {list.map((item) => (
                <li 
                key={item.id}
                className={`MenuListItem ${item.added ? '--added' : ''}`}
                >
                    <strong
                    className='MenuListItem__title'
                    onClick={() => handlers?.onListItemClick && handlers.onListItemClick([...ids, item.id])}
                    >
                        {item.title}
                        <span>{item.added ? '-' : '+'}</span>
                    </strong>

                    {item.description && <small
                                        className='MenuListItem__description'
                                        >{item.description}</small>
                    }

                    {item.values && <Walk
                                    list={item.values}
                                    ids={[...ids, item.id]}
                                    handlers={handlers}
                                    offset={{ omitFirst: false, increment: offset.increment }}
                                    />
                    }
                </li>
            ))}
        </ul>
    );
};

interface MenuListProps {
    list: MenuItem[];

    className?: string;

    handlers?: {
        onListItemClick?: (idsList: number[]) => void;
    };

    offset?: {
        omitFirst: boolean;
        increment: number;
    };
};

const MenuList: React.FC<MenuListProps> = ({
    list,
    className,
    handlers,
    offset = { omitFirst: true, increment: 2 },
}) => {
    return <Walk
            list={list}
            className={className}
            handlers={handlers}
            offset={offset}
            />;
};

export default MenuList;
