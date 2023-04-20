import type { Menu } from '../../providers/Menu/utils';
import MenuProvider from "../../providers/Menu";

interface ProvidersWrapperProps {
    children: React.ReactNode;

    menuProvider: {
        menu: Menu;
    };
};

const ProvidersWrapper: React.FC<ProvidersWrapperProps> = ({ children, menuProvider }) => {
    return (
        <MenuProvider {...menuProvider} >
            {children}
        </MenuProvider>
    );
};

export default ProvidersWrapper;
