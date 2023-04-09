import Logo from '../Logo';
import ShoppingCartIcon from "../Icons/ShoppingCartIcon";
import HamburgerMenuIcon from '../Icons/HamburgerMenuIcon';

import './HeaderBar.css';

interface HeaderBarProps {
    className?: string;

    events?: {
        shoppingCart?: {
            isOpen: boolean;
        };
    };

    handlers?: {
        shoppingCart?: {
            onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
        };
        hamburgerMenu?: {
            onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
        };
    };

    children?: React.ReactNode;
};

const HeaderBar: React.FC<HeaderBarProps> = ({ className, events, handlers, children }) => {
    return (
        <header className={`HeaderBar ${className ?? ''}`}>
            <Logo className='HeaderBar__Logo' />
            <button 
                className={`HeaderBar__bt HeaderBar__ShoppingCart_bt ${events?.shoppingCart?.isOpen ? '--is-open' : '--is-not-open'}`}
                onClick={(event) => handlers?.shoppingCart?.onClick(event)}
            >
                <ShoppingCartIcon className='HeaderBar__Icon' />
            </button>
            <button
                className='HeaderBar__bt HeaderBar__HamburgerMenu_bt'
                onClick={(event) => handlers?.hamburgerMenu?.onClick(event)}
            >
                <HamburgerMenuIcon
                    className='HeaderBar__Icon'
                />
            </button>
            {children}
        </header>
    );
};

export default HeaderBar;
