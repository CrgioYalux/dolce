import MenuSection from "./MenuSection";
import MenuOption from "./MenuOption";

import type { MenuItem } from "../utils";

import './MenuList.css';

interface WalkProps {
    list: MenuItem[];
    ids?: number[];
    section?: string;

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
    section = '',
    className,
    handlers,
    offset,
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
                <li key={item.id}>
                    {item.isOption 
                        ? <MenuOption
                          option={item}
                          section={section}
                          handlers={{
                              onChange: () => {
                                  if (handlers?.onListItemClick) {
                                      handlers.onListItemClick([...ids, item.id]);
                                  }
                              }
                          }}
                          /> 
                        : <MenuSection
                          section={item}
                          />
                    }

                    {item.values && 
                        <Walk
                        list={item.values}
                        ids={[...ids, item.id]}
                        handlers={handlers}
                        offset={{ omitFirst: false, increment: offset.increment }}
                        section={item.title}
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
