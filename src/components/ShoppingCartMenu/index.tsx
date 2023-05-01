import { useMenuContext } from '../../providers/Menu';

import './ShoppingCartMenu.css';

interface ShoppingCartMenuProps {
    className?: string;
};

const ShoppingCartMenu: React.FC<ShoppingCartMenuProps> = ({ className }) => {
    const [state] = useMenuContext();

    return (
        <div className={`ShoppingCartMenu ${className ?? ''}`}>
        {state.ordered.map((order, i) => 
            <ul key={i}>
                {order.map((item, j) =>
                    <li key={`${i}${j}`}>{item.title}</li>
                )}
            </ul>
        )}
        </div>
    );
};

export default ShoppingCartMenu;
