import './ShoppingCartMenu.css';

interface ShoppingCartMenuProps {
    className?: string;
};

const ShoppingCartMenu: React.FC<ShoppingCartMenuProps> = ({ className }) => {
    return (
        <div className={`ShoppingCartMenu ${className ?? ''}`}>
        </div>
    );
};

export default ShoppingCartMenu;
