import XMarkIcon from '../Icons/XMarkIcon';

import './NavBarMenu.css';

interface NavBarMenuProps {
    className?: string;

    anchors: {
        href: string;
        label: string;
        target?: React.HTMLAttributeAnchorTarget;
    }[];

    handlers?: {
        closeBT?: {
            onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
        };
    };
};

const NavBarMenu: React.FC<NavBarMenuProps> = ({ className, anchors, handlers }) => {
    return (
        <ul className={`NavBarMenu ${className ?? ''}`}>
            {anchors.map((a, key) => (
                <li 
                    tabIndex={key + 1}
                    key={key}
                >
                    <a
                        href={a.href}
                        target={a.target}
                    >{a.label}</a>
                </li>
            ))}
            <li>
                <button
                    tabIndex={anchors.length}
                    onClick={(event) => handlers?.closeBT?.onClick(event)}
                >
                    <XMarkIcon className='NavBarMenu__XMarkIcon' />
                </button>
            </li>
        </ul>
    );
};

export default NavBarMenu;
