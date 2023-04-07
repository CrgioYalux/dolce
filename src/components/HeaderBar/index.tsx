import Logo from '../Logo';
import ShoppingCartIcon from "../Icons/ShoppingCart";
import HamburgerMenuIcon from '../Icons/HamburgerMenu';

import './HeaderBar.css';

interface HeaderBarProps {
    className?: string;
};

const HeaderBar: React.FC<HeaderBarProps> = ({ className }) => {
    return (
        <header className={`HeaderBar ${className ?? ''}`}>
            <Logo className='HeaderBar__Logo' />
            <ShoppingCartIcon className='HeaderBar__icon HeaderBar__ShoppingCartIcon' />
            <HamburgerMenuIcon className='HeaderBar__icon HeaderBar__HamburgerMenuIcon'/>
        </header>
    );
};

export default HeaderBar;
