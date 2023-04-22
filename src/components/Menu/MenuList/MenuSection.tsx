import type { MenuItem } from "../../../providers/Menu/utils";
import CheckIcon from "../../Icons/CheckIcon";

interface MenuSectionProps {
    section: MenuItem;
};

const MenuSection: React.FC<MenuSectionProps> = ({ section }) => {
    return (
        <span
        className='MenuListItem'
        >
            {section.added && <CheckIcon className='MenuListItem__check' />}
            <strong
            className='MenuListItem__title'
            >{section.title}</strong>
            {section.description &&
                <small
                className='MenuListItem__description'
                >{section.description}</small>
            }
        </span>
    );
};

export default MenuSection;
