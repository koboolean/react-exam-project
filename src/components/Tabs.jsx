import propTypes from "prop-types";

Tabs.propTypes = {
    children : propTypes.any,
    buttons: propTypes.any
}

export default function Tabs({children, buttons}) {
    return <>
        <menu>
            {buttons}
        </menu>
        {children}
    </>
}
