import { useMenuContext } from '../../providers/Menu';
import MenuList from '../Menu/MenuList'; 

import './ShoppingCartMenu.css';

interface ShoppingCartMenuProps {
    className?: string;
};

const ShoppingCartMenu: React.FC<ShoppingCartMenuProps> = ({ className }) => {
    const [state] = useMenuContext();

    return (
        <div className={`ShoppingCartMenu ${className ?? ''}`}>
            <MenuList 
                list={state.ordered}
                className='ShoppingCartMenu__MenuList'
                readOnly={true}
                offset={{ omitFirst: true, increment: 15 }}
            />
        </div>
    );
};

export default ShoppingCartMenu;
