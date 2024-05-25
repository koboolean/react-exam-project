import propTypes from "prop-types";

TabButton.propTypes = {
    children:propTypes.string,
    onSelect : propTypes.func,
    isSelected : propTypes.bool};
export default function TabButton({children, isSelected, ...props }){
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props} >{children}</button>
        </li>
    );
}
