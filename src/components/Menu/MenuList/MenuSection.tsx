import type { MenuItem } from "../../../providers/Menu/utils";
import CheckIcon from "../../Icons/CheckIcon";

interface MenuSectionProps {
    section: MenuItem;
    
    handlers?: {
        onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    };
};

const MenuSection: React.FC<MenuSectionProps> = ({
    section,
    handlers
}) => {
    return (
        <span
        className='MenuListItem'
        >
            <strong
            className={`MenuListItem__title ${section.added ? '--added' : '--not-added'}`}
            >
            {section.added && <CheckIcon className='MenuListItem__check' />}
            {section.title}
            <button
            onClick={(event) => handlers?.onClick && handlers?.onClick(event)}
            >{!section.collapsed ? '-' : '+'}</button>
            </strong>
            {section.description &&
                <small
                className='MenuListItem__description'
                >{section.description}</small>
            }
        </span>
    );
};

export default MenuSection;
