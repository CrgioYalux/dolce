import type { MenuItem } from "../../../providers/Menu/utils";
import CheckIcon from "../../Icons/CheckIcon";
import CollapseIcon from "../../Icons/CollapseIcon";
import ExpandIcon from "../../Icons/ExpandIcon";

interface MenuSectionProps {
    section: MenuItem & { isOption: false };
    
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
            {section.added && <CheckIcon className='MenuListItem__icon MenuListItem__check' />}
            {section.title}
            <button
            onClick={(event) => handlers?.onClick && handlers?.onClick(event)}
            className='MenuListItem__collapse_bt'
            >{!section.collapsed 
                ? <CollapseIcon
                className='MenuListItem__icon MenuListItem__collapse'
                /> 
                : <ExpandIcon
                className='MenuListItem__icon MenuListItem__expand'
                />
            }</button>
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
