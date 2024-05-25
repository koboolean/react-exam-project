import propTypes from "prop-types";

Section.propTypes = {
    title:propTypes.string,
    children:propTypes.string
}

export default function Section({ title, children, ...props}) {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}
