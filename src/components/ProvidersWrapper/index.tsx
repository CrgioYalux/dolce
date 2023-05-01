import type { MenuState } from '../../providers/Menu';
import MenuProvider from '../../providers/Menu';

interface ProvidersWrapperProps {
    children: React.ReactNode;

    initialState?: {
        menuProvider: MenuState | undefined;
    };
};

const ProvidersWrapper: React.FC<ProvidersWrapperProps> = ({ children, initialState }) => {
    return (
        <MenuProvider initialState={initialState?.menuProvider} >
            {children}
        </MenuProvider>
    );
};

export default ProvidersWrapper;
