import type { MenuItem } from "../../../providers/Menu/utils";

interface MenuOptionProps {
    section: string;
    option: MenuItem & { isOption: true };
    
    handlers?: {
        onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
        onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    };
};

const MenuOption: React.FC<MenuOptionProps> = ({ 
    section,
    option,
    handlers
}) => {
    const sectionFormatted = section.toLowerCase().split(' ').join('_');
    const titleFormatted = option.title.toLowerCase().split(' ').join('_');
    const id = `${sectionFormatted}_${titleFormatted}`;

    return (
        <label
        htmlFor={id}
        className={`MenuListItem ${option.added ? '--added' : ''}`}
        >
            <strong
            className='MenuListItem__title'
            >
                {option.title}
            </strong>

            {option.description && 
                <small
                className='MenuListItem__description'
                >{option.description}</small>
            }

            <input
            type='radio'
            name={sectionFormatted}
            id={id}
            value={option.title}
            checked={option.added}
            onClick={(event) => handlers?.onClick && handlers?.onClick(event)}
            onChange={(event) => handlers?.onChange && handlers?.onChange(event)}
            />
        </label>
    );
};

export default MenuOption;
