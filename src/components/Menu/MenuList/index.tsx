import MenuSection from "./MenuSection";
import MenuOption from "./MenuOption";
import ReadOnlyMenuItem from "./ReadOnlyMenuItem";

import type { MenuItem } from "../../../providers/Menu/utils";

import './MenuList.css';

interface ReadOnlyWalkProps {
    list: MenuItem[];
    className?: string;
    offset: {
        omitFirst: boolean;
        increment: number;
    };
};

const ReadOnlyWalk: React.FC<ReadOnlyWalkProps> = ({
    list,
    className,
    offset
}) => {
    const listStyle = {
        '--MenuList-left-offset': offset.increment
    } as React.CSSProperties;

    return (
        <ul
        className={`MenuList ${offset.omitFirst ? '' : '--apply-offset'} ${className ?? ''} --read-only`}
        style={listStyle}
        >
        {list.map((item) => (
            <li key={item.id}>
                <ReadOnlyMenuItem item={item} />
                {item.values &&
                    <ReadOnlyWalk
                    className={className}
                    list={item.values}
                    offset={{ omitFirst: false, increment: offset.increment }}
                    />
                }
            </li>
            ))}
        </ul>
    );
};

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
        className={`MenuList ${offset.omitFirst ? '' : '--apply-offset'} ${className ?? ''}`}
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
                        section={item.title}
                        className={className}
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
    readOnly?: boolean;

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
    readOnly = false,
    handlers,
    offset = { omitFirst: true, increment: 2 },
}) => {
    return (readOnly 
        ? <ReadOnlyWalk list={list} className={className} offset={offset} />
        : <Walk list={list} className={className} handlers={handlers} offset={offset} />
    );
};

export default MenuList;
