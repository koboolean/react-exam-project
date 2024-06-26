import propTypes from "prop-types";

Tabs.propTypes = {
    children : propTypes.any,
    buttons: propTypes.any,
    ButtonContainer: propTypes.any
}

export default function Tabs({children, buttons, ButtonContainer="menu"}) {
    return <>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        {children}
    </>
}
