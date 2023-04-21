import type { Menu } from '../../providers/Menu/utils';
import MenuProvider from "../../providers/Menu";

interface ProvidersWrapperProps {
    children: React.ReactNode;

    initialState: {
        menuProvider: {
            menu: Menu;
        };
    };
};

const ProvidersWrapper: React.FC<ProvidersWrapperProps> = ({ children, initialState }) => {
    return (
        <MenuProvider initialState={initialState.menuProvider} >
            {children}
        </MenuProvider>
    );
};

export default ProvidersWrapper;
