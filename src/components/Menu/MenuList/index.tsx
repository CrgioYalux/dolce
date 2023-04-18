import type { MenuItem } from "../utils";

import './MenuList.css';

interface MenuSectionProps {
    section: MenuItem;
};

const MenuSection: React.FC<MenuSectionProps> = ({ section }) => {
    return (
        <span
        className='MenuListItem'
        >
            <strong
            className='MenuListItem__title'
            >{section.title}</strong>

            {section.description &&
                <small
                className='MenuListItem__description'
                >{section.description}</small>
            }
        </span>
    );
};


interface MenuOptionProps {
    section: string;
    option: MenuItem;
    
    handlers?: {
        onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
        onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    };
};

const MenuOption: React.FC<MenuOptionProps> = ({ section, option, handlers }) => {
    const sectionFormatted = section.toLowerCase().split(' ').join('_');
    const titleFormatted = option.title.toLowerCase().split(' ').join('_');
    const id = `${sectionFormatted}_${titleFormatted}`;

    return (
        <label
        htmlFor={id}
        className={`MenuListItem ${option.added ? '--added' : ''}`}
        >
            <strong
            className='MenuListItem__title'
            >
                {option.title}
                <span>{(!option.added && '+')}</span>
            </strong>

            {option.description && 
                <small
                className='MenuListItem__description'
                >{option.description}</small>
            }

            <input
            type='radio'
            name={sectionFormatted}
            id={id}
            value={option.title}
            checked={option.added}
            onClick={(event) => handlers?.onClick && handlers?.onClick(event)}
            onChange={(event) => handlers?.onChange && handlers?.onChange(event)}
            />
        </label>
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
