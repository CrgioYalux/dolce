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
            <strong
            className={`MenuListItem__title ${section.added ? '--added' : '--not-added'}`}
            >
            {section.added && <CheckIcon className='MenuListItem__check' />}
            {section.title}
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
