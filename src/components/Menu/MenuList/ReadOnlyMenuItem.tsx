import type { MenuItem } from "../../../providers/Menu/utils";

interface ReadOnlyMenuOptionProps {
    item: MenuItem;
};

const ReadOnlyMenuItem: React.FC<ReadOnlyMenuOptionProps> = ({ item }) => {
    return (
        <span
        className='MenuListItem'
        >
            <strong
            className='MenuListItem__title'
            >
            {item.title}
            </strong>
            {item.description &&
                <small
                className='MenuListItem__description'
                >{item.description}</small>
            }
        </span>
    );
};

export default ReadOnlyMenuItem;
